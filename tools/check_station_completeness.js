const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, "reports");
const REPORT_PATH = path.join(REPORT_DIR, "station_completeness.md");
const MASTER_PATH = path.join(ROOT, "station_master", "full_line_stations.json");

const DATA_FILES = [
  "data_kanto.js",
  "data_tohoku.js",
  "data_shinetsu.js",
  "data_limited.js",
  "data_shinkansen.js"
];

function loadLineData() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  DATA_FILES.forEach((rel) => {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) {
      return;
    }
    const code = fs.readFileSync(abs, "utf8");
    vm.runInContext(code, ctx, { filename: rel });
  });
  return ctx.window.railwayLinesDataChunks || {};
}

function lineRows(lines) {
  return Object.entries(lines)
    .map(([lineKey, line]) => {
      const stations = Array.isArray(line.stations) ? line.stations : [];
      return {
        lineKey,
        area: line.area || "",
        lineName: line.lineName || "",
        scope: line.scope || "",
        stationNames: stations.map((s) => String((s && s.name) || "")).filter(Boolean),
      };
    })
    .sort((a, b) => a.lineKey.localeCompare(b.lineKey, "ja"));
}

function readMasterOrNull() {
  if (!fs.existsSync(MASTER_PATH)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(MASTER_PATH, "utf8"));
}

function compareWithMaster(rows, master) {
  const curMap = new Map(rows.map((r) => [r.lineKey, r]));
  const masterMap = new Map(Object.entries(master));

  const missingInMaster = [];
  const missingInCurrent = [];
  const lengthMismatch = [];
  const orderMismatch = [];

  curMap.forEach((row, lineKey) => {
    if (!masterMap.has(lineKey)) {
      missingInMaster.push(lineKey);
      return;
    }
    const expected = Array.isArray(masterMap.get(lineKey)) ? masterMap.get(lineKey) : [];
    if (expected.length !== row.stationNames.length) {
      lengthMismatch.push({
        lineKey,
        expected: expected.length,
        current: row.stationNames.length
      });
      return;
    }
    const same = expected.every((name, i) => name === row.stationNames[i]);
    if (!same) {
      orderMismatch.push(lineKey);
    }
  });

  masterMap.forEach((_, lineKey) => {
    if (!curMap.has(lineKey)) {
      missingInCurrent.push(lineKey);
    }
  });

  return {
    missingInMaster: missingInMaster.sort((a, b) => a.localeCompare(b, "ja")),
    missingInCurrent: missingInCurrent.sort((a, b) => a.localeCompare(b, "ja")),
    lengthMismatch: lengthMismatch.sort((a, b) => a.lineKey.localeCompare(b.lineKey, "ja")),
    orderMismatch: orderMismatch.sort((a, b) => a.localeCompare(b, "ja"))
  };
}

function buildReport(rows, master, diff) {
  const lines = [];
  lines.push("# 駅データ完全性レポート");
  lines.push("");
  lines.push(`- 生成日時: ${new Date().toISOString()}`);
  lines.push(`- 対象路線数: ${rows.length}`);
  lines.push("");

  if (!master) {
    lines.push("## 判定状態");
    lines.push("- `station_master/full_line_stations.json` が未作成のため、全駅網羅判定は未実施です。");
    lines.push("- まずは全路線の正規駅順を `full_line_stations.json` に投入してください。");
    lines.push("");
    lines.push("## 現在の登録駅数一覧");
    rows.forEach((r) => {
      lines.push(`- \`${r.lineKey}\` ${r.lineName}（${r.scope}）: ${r.stationNames.length}駅`);
    });
    return lines.join("\n") + "\n";
  }

  lines.push("## 判定状態");
  const ok =
    diff.missingInMaster.length === 0 &&
    diff.missingInCurrent.length === 0 &&
    diff.lengthMismatch.length === 0 &&
    diff.orderMismatch.length === 0;
  lines.push(ok ? "- 全路線が全駅マスタと一致しています。" : "- 不一致があります。以下を修正してください。");
  lines.push("");

  lines.push(`- マスタ未登録路線: ${diff.missingInMaster.length}`);
  lines.push(`- 現行未登録路線: ${diff.missingInCurrent.length}`);
  lines.push(`- 駅数不一致: ${diff.lengthMismatch.length}`);
  lines.push(`- 駅順不一致: ${diff.orderMismatch.length}`);
  lines.push("");

  if (diff.missingInMaster.length) {
    lines.push("### マスタ未登録路線");
    diff.missingInMaster.forEach((k) => lines.push(`- \`${k}\``));
    lines.push("");
  }
  if (diff.missingInCurrent.length) {
    lines.push("### 現行未登録路線");
    diff.missingInCurrent.forEach((k) => lines.push(`- \`${k}\``));
    lines.push("");
  }
  if (diff.lengthMismatch.length) {
    lines.push("### 駅数不一致");
    diff.lengthMismatch.forEach((d) => {
      lines.push(`- \`${d.lineKey}\`: current=${d.current}, expected=${d.expected}`);
    });
    lines.push("");
  }
  if (diff.orderMismatch.length) {
    lines.push("### 駅順不一致");
    diff.orderMismatch.forEach((k) => lines.push(`- \`${k}\``));
    lines.push("");
  }

  return lines.join("\n") + "\n";
}

function main() {
  const rows = lineRows(loadLineData());
  const master = readMasterOrNull();
  const diff = master ? compareWithMaster(rows, master) : null;

  if (!fs.existsSync(REPORT_DIR)) {
    fs.mkdirSync(REPORT_DIR, { recursive: true });
  }
  fs.writeFileSync(REPORT_PATH, buildReport(rows, master, diff), "utf8");

  if (!master) {
    console.log("WARN: master file not found:", MASTER_PATH);
    console.log("Generated:", REPORT_PATH);
    process.exitCode = 2;
    return;
  }

  const hasError =
    diff.missingInMaster.length ||
    diff.missingInCurrent.length ||
    diff.lengthMismatch.length ||
    diff.orderMismatch.length;
  console.log("Generated:", REPORT_PATH);
  if (hasError) {
    process.exitCode = 1;
  }
}

main();

