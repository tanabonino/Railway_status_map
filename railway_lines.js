// アプリ本体（file:// で動作。fetch不要）
// 路線データは data_*.js から読み込む。
function normalizeStationMetaKey(name) {
  return String(name || "")
    .replace(/\s+/g, "")
    .replace(/駅$/g, "");
}

function getStationMetadataByName(name) {
  const root = window.stationMetadata || {};
  const key = normalizeStationMetaKey(name);
  return root[key] || root[String(name || "")] || null;
}

function mergeInterchanges(primaryList, fallbackList) {
  const out = [];
  const seen = {};

  function pushAll(list) {
    (Array.isArray(list) ? list : []).forEach(function (it) {
      const op = String((it && it.toOperator) || "");
      const line = String((it && it.toLine) || "");
      const st = String((it && it.toStationName) || "");
      const key = [op, line, st].join("|");
      if (!key || seen[key]) {
        return;
      }
      seen[key] = true;
      out.push({ toOperator: op, toLine: line, toStationName: st });
    });
  }

  pushAll(primaryList);
  pushAll(fallbackList);
  return out;
}

function normalizeLegacyLine(line) {
  const stations = Array.isArray(line && line.stations) ? line.stations : [];
  return {
    area: (line && line.area) || "未分類",
    lineName: (line && line.lineName) || "名称未設定",
    lineNameKana: (line && line.lineNameKana) || "",
    scope: (line && line.scope) || "",
    stations: stations.map(function (st) {
      const stationName = st && st.name ? String(st.name) : "駅名未設定";
      const meta = getStationMetadataByName(stationName) || {};
      const inlineInterchanges = Array.isArray(st && st.interchanges) ? st.interchanges : [];
      return {
        id: st && st.id ? String(st.id) : "",
        name: stationName,
        nameKana: st && (st.nameKana || st.kana) ? String(st.nameKana || st.kana) : String(meta.nameKana || ""),
        interchanges: mergeInterchanges(inlineInterchanges, meta.interchanges)
      };
    })
  };
}

function buildLineDataMap(railDataRoot, fallbackChunks) {
  const out = {};
  const fallback = fallbackChunks || {};
  Object.keys(fallback).forEach(function (lineId) {
    out[lineId] = normalizeLegacyLine(fallback[lineId]);
  });

  const lines = (railDataRoot && railDataRoot.lines) || {};
  const stations = (railDataRoot && railDataRoot.stations) || {};
  const interchanges = (railDataRoot && railDataRoot.interchanges) || {};

  Object.keys(lines).forEach(function (lineId) {
    const line = lines[lineId] || {};
    let mappedStations = [];

    if (Array.isArray(line.stationIds) && line.stationIds.length) {
      mappedStations = line.stationIds.map(function (stationId) {
        const s = stations[stationId] || {};
        const stationName = s.name || stationId;
        const meta = getStationMetadataByName(stationName) || {};
        return {
          id: stationId,
          name: stationName,
          nameKana: String(s.nameKana || s.kana || meta.nameKana || ""),
          interchanges: mergeInterchanges(
            Array.isArray(interchanges[stationId]) ? interchanges[stationId] : [],
            meta.interchanges
          )
        };
      });
    } else if (Array.isArray(line.stations)) {
      mappedStations = line.stations.map(function (st) {
        const sid = st && st.id ? String(st.id) : "";
        const stationName = st && st.name ? String(st.name) : "駅名未設定";
        const meta = getStationMetadataByName(stationName) || {};
        const inlineInterchanges = sid && Array.isArray(interchanges[sid])
          ? interchanges[sid]
          : (Array.isArray(st && st.interchanges) ? st.interchanges : []);
        return {
          id: sid,
          name: stationName,
          nameKana: st && (st.nameKana || st.kana) ? String(st.nameKana || st.kana) : String(meta.nameKana || ""),
          interchanges: mergeInterchanges(inlineInterchanges, meta.interchanges)
        };
      });
    }

    out[lineId] = {
      area: line.area || "未分類",
      lineName: line.lineName || lineId,
      lineNameKana: line.lineNameKana || "",
      scope: line.scope || "",
      stations: mappedStations
    };
  });

  return out;
}

function buildDirectionLinesFromRailData(railDataRoot) {
  const groups = (railDataRoot && railDataRoot.groups) || {};
  const lines = (railDataRoot && railDataRoot.lines) || {};
  const out = {};

  Object.keys(groups).forEach(function (groupName) {
    const ids = Array.isArray(groups[groupName]) ? groups[groupName] : [];
    const names = [];
    ids.forEach(function (lineId) {
      const line = lines[lineId];
      const name = line && line.lineName;
      if (name && names.indexOf(name) === -1) {
        names.push(name);
      }
    });
    if (names.length) {
      out[groupName] = names;
    }
  });

  return out;
}

const railDataRoot = window.railData || {};
const directionLinesFromData = buildDirectionLinesFromRailData(railDataRoot);
const railwayLinesData = buildLineDataMap(railDataRoot, window.railwayLinesDataChunks || {});
(function () {
  const AREA_PRIORITY = ["関東", "東北", "信越"];

  const statusMeta = {
    normal: { label: "平常運転", badge: "b-normal" },
    delay: { label: "遅延", badge: "b-delay" },
    suspend: { label: "運転見合わせ", badge: "b-suspend" },
    stop: { label: "運休", badge: "b-stop" }
  };
  const ROUTE_SYMBOL_BY_LINE_NAME = {
    "山手線": "JY",
    "京浜東北線": "JK",
    "東海道線": "JT",
    "横須賀線": "JO",
    "南武線": "JN",
    "横浜線": "JH",
    "相模線": "JI",
    "湘南新宿ライン": "JS",
    "上野東京ライン": "JU",
    "宇都宮線": "JU",
    "高崎線": "JU",
    "埼京線": "JA",
    "川越線": "JA",
    "中央線快速電車": "JC",
    "中央・総武各駅停車": "JB",
    "総武快速線": "JO",
    "京葉線": "JE",
    "武蔵野線": "JM",
    "常磐線": "JJ",
    "常磐線快速電車": "JJ",
    "常磐線各駅停車": "JL",
    "東京モノレール線": "MO"
  };
  const ROUTE_COLOR_BY_SYMBOL = {
    "JY": "#9acd32",
    "JK": "#00b2e5",
    "JT": "#f68b1f",
    "JO": "#1f3a93",
    "JN": "#f4a300",
    "JH": "#7fbf3f",
    "JS": "#e95d0f",
    "JU": "#f68b1f",
    "JA": "#00ac9a",
    "JC": "#f15a22",
    "JB": "#ffd400",
    "JE": "#c2185b",
    "JM": "#e95d0f",
    "JJ": "#00b261",
    "JL": "#00a0e9"
  };
  const ROUTE_ICON_BY_SYMBOL = {
    "JY": "route_icons/ico_rosen_jy.svg",
    "MO": "route_icons/ico_rosen_mo.svg",
    "JE": "route_icons/ico_rosen_je.svg",
    "JL": "route_icons/ico_rosen_jl.svg",
    "JJ": "route_icons/ico_rosen_jj.svg",
    "JB": "route_icons/ico_rosen_jb.svg",
    "JC": "route_icons/ico_rosen_jc.svg",
    "JM": "route_icons/ico_rosen_jm.svg",
    "JA": "route_icons/ico_rosen_ja.svg",
    "JU": "route_icons/ico_rosen_ju.svg",
    "JI": "route_icons/ico_rosen_ji.svg",
    "JN": "route_icons/ico_rosen_jn.svg",
    "JK": "route_icons/ico_rosen_jk.svg",
    "JH": "route_icons/ico_rosen_jh.svg",
    "JO": "route_icons/ico_rosen_jo.svg",
    "JT": "route_icons/ico_rosen_jt.svg",
    "JS": "route_icons/ico_rosen_js.svg"
  };

  const STALE_MINUTES = 20;

  const DIRECTION_ORDER = [
    "all",
    "山手線",
    "直通サービス",
    "東海道方面",
    "東北・高崎方面",
    "中央方面",
    "常磐方面",
    "総武方面",
    "東京モノレール線",
    "東北方面",
    "信越方面",
    "在来線特急",
    "新幹線"
  ];

  const DIRECTION_LINES = {
    "山手線": ["山手線"],
    "直通サービス": ["上野東京ライン", "湘南新宿ライン", "相鉄線直通列車"],
    "東海道方面": ["東海道線", "京浜東北線", "横須賀線", "南武線", "横浜線", "伊東線", "相模線", "鶴見線"],
    "東北・高崎方面": ["宇都宮線", "高崎線", "京浜東北線", "埼京線", "川越線", "武蔵野線", "上越線", "信越本線", "吾妻線", "烏山線", "八高線", "日光線", "両毛線"],
    "中央方面": ["中央線快速電車", "中央・総武各駅停車", "中央本線", "武蔵野線", "五日市線", "青梅線", "八高線", "小海線"],
    "常磐方面": ["常磐線", "常磐線快速電車", "常磐線各駅停車", "水郡線", "水戸線"],
    "総武方面": ["総武快速線", "総武本線", "中央・総武各駅停車", "京葉線", "武蔵野線", "内房線", "鹿島線", "久留里線", "外房線", "東金線", "成田線"],
    "東京モノレール線": ["東京モノレール線"],
    "東北方面": ["羽越本線", "奥羽本線", "常磐線", "仙山線", "仙石線", "仙石東北ライン", "東北本線", "磐越西線", "左沢線", "石巻線", "大船渡線", "大船渡線ＢＲＴ", "大湊線", "男鹿線", "釜石線", "北上線", "気仙沼線", "気仙沼線ＢＲＴ", "五能線", "水郡線", "田沢湖線", "只見線", "津軽線", "八戸線", "花輪線", "磐越東線", "山田線", "米坂線", "陸羽西線", "陸羽東線"],
    "信越方面": ["羽越本線", "信越本線", "上越線", "篠ノ井線", "中央本線", "白新線", "磐越西線", "飯山線", "越後線", "大糸線", "小海線", "只見線", "弥彦線", "米坂線"],
    "在来線特急": ["成田エクスプレス", "ひたち・ときわ", "あずさ・かいじ・富士回遊", "しなの", "わかしお・さざなみ", "しおさい", "日光・きぬがわ", "草津・四万・あかぎ", "踊り子・湘南", "いなほ・しらゆき", "つがる", "サンライズ瀬戸・出雲", "臨時列車"],
    "新幹線": ["東北新幹線", "山形新幹線", "秋田新幹線", "上越新幹線", "北陸新幹線"]
  };

  Object.keys(directionLinesFromData).forEach(function (groupName) {
    DIRECTION_LINES[groupName] = directionLinesFromData[groupName];
    if (DIRECTION_ORDER.indexOf(groupName) === -1) {
      DIRECTION_ORDER.push(groupName);
    }
  });

  const lineNameIndex = buildLineNameIndex();
  const state = createInitialState();
  let selectedDirectionFilter = loadDirectionFilter();
  let selectedStation = loadSelectedStation();

  const ui = {
    rawText: document.getElementById("rawText"),
    parseBtn: document.getElementById("parseBtn"),
    clearBtn: document.getElementById("clearBtn"),
    parseResult: document.getElementById("parseResult"),
    cards: document.getElementById("cards"),
    directionFilters: document.getElementById("directionFilters"),
    manualLine: document.getElementById("manualLine"),
    manualStatus: document.getElementById("manualStatus"),
    manualDirection: document.getElementById("manualDirection"),
    manualSection: document.getElementById("manualSection"),
    manualCause: document.getElementById("manualCause"),
    manualResume: document.getElementById("manualResume"),
    manualApply: document.getElementById("manualApply"),
    debugForceSegments: document.getElementById("debugForceSegments"),
    stationDetail: document.getElementById("stationDetail")
  };

  init();

  function init() {
    refreshManualLineOptions();
    setupDirectionFilters();
    loadState();
    render();

    ui.parseBtn.addEventListener("click", handleParse);
    ui.clearBtn.addEventListener("click", function () {
      ui.rawText.value = "";
      ui.parseResult.textContent = "入力をクリアしました";
    });

    if (ui.debugForceSegments) {
      ui.debugForceSegments.checked = localStorage.getItem("debugForceSegments") === "1";
      ui.debugForceSegments.addEventListener("change", function () {
        try {
          localStorage.setItem("debugForceSegments", ui.debugForceSegments.checked ? "1" : "0");
        } catch (_) {}
        render();
      });
    }

    ui.manualApply.addEventListener("click", function () {
      const lineId = ui.manualLine.value;
      if (!lineId) {
        return;
      }

      ensureLine(lineId);
      const target = state[lineId];
      target.status = ui.manualStatus.value;
      const manualDir = directionByMode(ui.manualDirection.value, railwayLinesData[lineId].lineName);
      target.directionMode = manualDir.mode;
      target.directionUpLabel = manualDir.upLabel;
      target.directionDownLabel = manualDir.downLabel;
      target.section = normalize(ui.manualSection.value);
      target.sectionRanges = rangesFromSectionText(target.section);
      target.cause = ui.manualCause.value.trim();
      target.resume = ui.manualResume.value.trim();
      target.updatedAt = nowLabel();
      target.isCleared = false;

      persistState();
      render();
      ui.parseResult.textContent = "手動設定を反映しました: " + displayName(lineId);
    });
  }

  function loadDirectionFilter() {
    try {
      const v = localStorage.getItem("directionFilter");
      if (v && (v === "all" || DIRECTION_ORDER.indexOf(v) !== -1)) {
        return v;
      }
    } catch (_) {}
    return "all";
  }

  function saveDirectionFilter(v) {
    try {
      localStorage.setItem("directionFilter", v);
    } catch (_) {}
  }

  function loadSelectedStation() {
    try {
      const raw = localStorage.getItem("selectedStationV1");
      if (!raw) {
        return null;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.key || !parsed.stationName) {
        return null;
      }
      return parsed;
    } catch (_) {
      return null;
    }
  }

  function saveSelectedStation() {
    try {
      if (!selectedStation) {
        localStorage.removeItem("selectedStationV1");
        return;
      }
      localStorage.setItem("selectedStationV1", JSON.stringify(selectedStation));
    } catch (_) {}
  }

  function makeStationKey(lineId, stationName) {
    return String(lineId || "") + "::" + normalizeStationToken(stationName);
  }

  function setSelectedStation(lineId, line, station) {
    const lineSafe = line || {};
    const stationSafe = station || {};
    selectedStation = {
      key: makeStationKey(lineId, stationSafe.name),
      lineId: lineId,
      lineName: lineSafe.lineName || "",
      lineScope: lineSafe.scope || "",
      lineArea: lineSafe.area || "",
      stationName: stationSafe.name || "",
      stationKana: detectStationKana(stationSafe),
      interchanges: cleanInterchanges(stationSafe.interchanges || [])
    };
    saveSelectedStation();
    render();
  }

  function cleanInterchanges(list) {
    const out = [];
    const seen = {};
    (Array.isArray(list) ? list : []).forEach(function (it) {
      const item = {
        toOperator: cleanText((it && it.toOperator) || ""),
        toLine: cleanText((it && it.toLine) || ""),
        toStationName: cleanText((it && it.toStationName) || "")
      };
      const key = [item.toOperator, item.toLine, item.toStationName].join("|");
      if (!key || seen[key]) {
        return;
      }
      seen[key] = true;
      out.push(item);
    });
    return out;
  }

  function setupDirectionFilters() {
    if (!ui.directionFilters) {
      return;
    }
    renderDirectionFilters();
    ui.directionFilters.addEventListener("click", function (ev) {
      const t = ev.target;
      if (!t || !t.classList || !t.classList.contains("dir-filter-btn")) {
        return;
      }
      const val = t.getAttribute("data-direction") || "all";
      selectedDirectionFilter = val;
      saveDirectionFilter(val);
      renderDirectionFilters();
      render();
    });
  }

  function renderDirectionFilters() {
    if (!ui.directionFilters) {
      return;
    }
    ui.directionFilters.innerHTML = "";
    DIRECTION_ORDER.forEach(function (dirName) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "dir-filter-btn" + (selectedDirectionFilter === dirName ? " active" : "");
      b.setAttribute("data-direction", dirName);
      b.textContent = dirName === "all" ? "すべて" : dirName;
      ui.directionFilters.appendChild(b);
    });
  }

  function lineMatchesDirection(lineName) {
    if (!selectedDirectionFilter || selectedDirectionFilter === "all") {
      return true;
    }
    const targets = DIRECTION_LINES[selectedDirectionFilter] || [];
    return targets.indexOf(lineName) !== -1;
  }

  function buildLineNameIndex() {
    const index = {};
    Object.keys(railwayLinesData).forEach(function (lineId) {
      const line = railwayLinesData[lineId];
      const names = [line.lineName];
      if (line.lineName.endsWith("線")) {
        names.push(line.lineName.replace(/線$/, ""));
      }

      names.forEach(function (name) {
        if (!index[name]) {
          index[name] = [];
        }
        if (index[name].indexOf(lineId) === -1) {
          index[name].push(lineId);
        }
      });
    });
    return index;
  }

  function refreshManualLineOptions() {
    const selected = ui.manualLine.value;
    ui.manualLine.innerHTML = "";

    Object.keys(railwayLinesData).forEach(function (lineId) {
      const opt = document.createElement("option");
      opt.value = lineId;
      opt.textContent = displayName(lineId);
      ui.manualLine.appendChild(opt);
    });

    if (selected && railwayLinesData[selected]) {
      ui.manualLine.value = selected;
    }
  }


  function formatLineTitle(line) {
    const rawName = (line && line.lineName) || "";
    const name = lineNameWithSymbol(rawName);
    const kana = (line && line.lineNameKana) || "";
    if (!name) {
      return "";
    }
    if (!kana) {
      return name;
    }
    return name + " （" + kana + "）";
  }

  function renderLineTitleNode(target, line) {
    if (!target) {
      return;
    }
    target.innerHTML = "";

    const rawName = (line && line.lineName) || "";
    const symbol = routeSymbolByLineName(rawName);
    if (symbol) {
      target.appendChild(createRouteSymbolNode(symbol));
    }

    const nameMain = document.createElement("span");
    nameMain.className = "line-name-main";
    const kana = (line && line.lineNameKana) || "";
    nameMain.textContent = rawName ? (rawName + (kana ? " （" + kana + "）" : "")) : "";
    target.appendChild(nameMain);
  }

  function displayName(lineId) {
    const line = railwayLinesData[lineId];
    if (!line) {
      return lineId;
    }
    const scope = line.scope ? " / " + line.scope : "";
    return "[" + line.area + "] " + lineNameWithSymbol(line.lineName) + scope;
  }

  function lineNameWithSymbol(lineName) {
    const name = String(lineName || "");
    const symbol = routeSymbolByLineName(name);
    if (!symbol || !name) {
      return name;
    }
    return symbol + " " + name;
  }

  function routeSymbolByLineName(lineName) {
    return ROUTE_SYMBOL_BY_LINE_NAME[String(lineName || "")] || "";
  }

  function routeColorBySymbol(symbol) {
    return ROUTE_COLOR_BY_SYMBOL[String(symbol || "")] || "#4f6a59";
  }

  function routeIconBySymbol(symbol) {
    return ROUTE_ICON_BY_SYMBOL[String(symbol || "")] || "";
  }

  function createRouteSymbolNode(symbol) {
    const iconPath = routeIconBySymbol(symbol);
    if (iconPath) {
      const img = document.createElement("img");
      img.className = "route-symbol-icon";
      img.src = iconPath;
      img.alt = symbol;
      img.loading = "lazy";
      return img;
    }
    const badge = document.createElement("span");
    badge.className = "route-symbol-badge";
    badge.style.backgroundColor = routeColorBySymbol(symbol);
    badge.textContent = symbol;
    return badge;
  }

  function createInitialState() {
    const s = {};
    Object.keys(railwayLinesData).forEach(function (lineId) {
      s[lineId] = defaultLineState();
    });
    return s;
  }

  function defaultLineState() {
    return {
      status: "normal",
      directionMode: "unknown",
      directionUpLabel: "上り",
      directionDownLabel: "下り",
      section: "",
      sectionRanges: [],
      cause: "",
      resume: "",
      sourceText: "",
      updatedAt: "",
      isCleared: false
    };
  }

  function ensureLine(lineId, area, lineName, scope) {
    if (!lineId) {
      return;
    }

    if (!railwayLinesData[lineId]) {
      railwayLinesData[lineId] = {
        area: area || "未分類",
        lineName: lineName || lineId,
        scope: scope || "",
        stations: []
      };
      // 新規動的路線も索引に追加
      const names = [railwayLinesData[lineId].lineName];
      if (railwayLinesData[lineId].lineName.endsWith("線")) {
        names.push(railwayLinesData[lineId].lineName.replace(/線$/, ""));
      }
      names.forEach(function (name) {
        if (!lineNameIndex[name]) {
          lineNameIndex[name] = [];
        }
        if (lineNameIndex[name].indexOf(lineId) === -1) {
          lineNameIndex[name].push(lineId);
        }
      });
      refreshManualLineOptions();
    setupDirectionFilters();
    }

    if (!state[lineId]) {
      state[lineId] = defaultLineState();
    }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem("railwayStatusStateV3");
      if (!raw) {
        return;
      }
      const loaded = JSON.parse(raw);
      Object.keys(loaded).forEach(function (lineId) {
        if (!railwayLinesData[lineId]) {
          return;
        }
        ensureLine(lineId);
        state[lineId] = Object.assign({}, defaultLineState(), loaded[lineId]);
      });
    } catch (_) {
      // localStorage が使えない環境でも動作継続
    }
  }

  function persistState() {
    try {
      localStorage.setItem("railwayStatusStateV3", JSON.stringify(state));
    } catch (_) {
      // 無視
    }
  }

  function clearLineState(lineId) {
    ensureLine(lineId);
    state[lineId] = defaultLineState();
    state[lineId].isCleared = true;
    state[lineId].updatedAt = nowLabel();
  }

  function handleParse() {
    const text = normalize(ui.rawText.value);
    if (!text) {
      ui.parseResult.textContent = "本文が空です";
      return;
    }

    const parsed = parseNotice(text);
    const targetIds = uniq((parsed.lineIds && parsed.lineIds.length ? parsed.lineIds : [parsed.lineId]).filter(Boolean));
    if (!targetIds.length) {
      ui.parseResult.textContent = "路線名を特定できませんでした。本文に路線名を含めてください。";
      return;
    }

    const now = nowLabel();
    targetIds.forEach(function (lineId) {
      const line = railwayLinesData[lineId] || {};
      ensureLine(lineId, line.area || parsed.area, line.lineName || parsed.lineName, line.scope || parsed.scope);

      const target = state[lineId];
      target.status = parsed.status;
      target.directionMode = parsed.directionMode;
      target.directionUpLabel = parsed.directionUpLabel;
      target.directionDownLabel = parsed.directionDownLabel;
      target.section = parsed.section;
      target.sectionRanges = parsed.sectionRanges;
      target.cause = parsed.cause;
      target.resume = parsed.resume;
      target.sourceText = text;
      target.updatedAt = now;
      target.isCleared = false;
    });

    persistState();
    render();

    const affectedLines = targetIds.map(function (lineId) {
      const line = railwayLinesData[lineId] || {};
      return line.lineName
        ? (lineNameWithSymbol(line.lineName) + (line.scope ? "（" + line.scope + "）" : ""))
        : lineId;
    });

    const lines = [
      "路線: " + affectedLines.join(" / "),
      "状態: " + statusMeta[parsed.status].label,
      "方向: " + parsed.directionLabel,
      "区間: " + (parsed.section || "未抽出"),
      "原因: " + (parsed.cause || "未抽出"),
      "再開見込み: " + (parsed.resume || "未抽出")
    ];

    if (parsed.note) {
      lines.push("判定メモ: " + parsed.note);
    }

    ui.parseResult.textContent = lines.join("\n");
  }
  function parseNotice(text) {
    const sectionInfo = detectSection(text);
    const linePick = detectLineAndArea(text, sectionInfo.stationTokens);
    const directionInfo = detectDirection(text, linePick.lineName);
    const status = detectStatus(text);
    const sectionResolved = resolveOperationalSection(text, status, sectionInfo);
    const cause = detectCause(text);
    const resume = detectResume(text, status);

    return {
      lineId: linePick.lineId,
      lineIds: linePick.lineIds || (linePick.lineId ? [linePick.lineId] : []),
      lineName: linePick.lineName,
      area: linePick.area,
      scope: linePick.scope,
      note: linePick.note,
      status: status,
      directionMode: directionInfo.mode,
      directionUpLabel: directionInfo.upLabel,
      directionDownLabel: directionInfo.downLabel,
      directionLabel: directionInfo.display,
      section: sectionResolved.text,
      sectionRanges: sectionResolved.ranges,
      cause: cause,
      resume: resume
    };
  }
  function detectLineAndArea(text, stationTokens) {
    const lineName = detectLineName(text);
    const scopeHint = detectScopeHint(text, lineName);
    if (!lineName) {
      return { lineId: "", lineIds: [], lineName: "", area: "", scope: "", note: "" };
    }

    const candidates = lineNameIndex[lineName] || [];

    if (candidates.length === 0) {
      const dynamicId = "unknown:" + slug(lineName);
      return {
        lineId: dynamicId,
        lineIds: [dynamicId],
        lineName: lineName,
        area: "未分類",
        scope: scopeHint,
        note: "未登録路線のため未分類で作成"
      };
    }

    if (candidates.length === 1) {
      const id = candidates[0];
      return {
        lineId: id,
        lineIds: [id],
        lineName: railwayLinesData[id].lineName,
        area: railwayLinesData[id].area,
        scope: railwayLinesData[id].scope || "",
        note: ""
      };
    }

    const specialTargets = pickSpecialMultiTargets(lineName, text, candidates);
    if (specialTargets && specialTargets.length) {
      const first = specialTargets[0];
      const hasExplicitBranch = hasSpecialBranchHint(lineName, text);
      return {
        lineId: first,
        lineIds: specialTargets,
        lineName: railwayLinesData[first].lineName,
        area: railwayLinesData[first].area,
        scope: railwayLinesData[first].scope || "",
        note: hasExplicitBranch
          ? "系統キーワードで判定"
          : "系統特定不可のため同名系統すべてに反映"
      };
    }

    const resolved = resolveByStationsAndArea(text, stationTokens, scopeHint, candidates);
    resolved.lineIds = resolved.lineId ? [resolved.lineId] : [];
    return resolved;
  }

  function isSpecialMultiLine(lineName) {
    return lineName === "湘南新宿ライン" || lineName === "上野東京ライン";
  }

  function hasSpecialBranchHint(lineName, text) {
    if (!isSpecialMultiLine(lineName)) {
      return false;
    }
    return /(宇都宮線|宇都宮方面|高崎線|高崎方面)/.test(text);
  }

  function pickSpecialMultiTargets(lineName, text, candidates) {
    if (!isSpecialMultiLine(lineName)) {
      return null;
    }

    const hasUtsunomiya = /(宇都宮線|宇都宮方面)/.test(text);
    const hasTakasaki = /(高崎線|高崎方面)/.test(text);

    if (hasUtsunomiya && !hasTakasaki) {
      const onlyU = candidates.filter(function (lineId) {
        return (railwayLinesData[lineId].scope || "").indexOf("宇都宮") !== -1;
      });
      if (onlyU.length) {
        return onlyU;
      }
    }

    if (hasTakasaki && !hasUtsunomiya) {
      const onlyT = candidates.filter(function (lineId) {
        return (railwayLinesData[lineId].scope || "").indexOf("高崎") !== -1;
      });
      if (onlyT.length) {
        return onlyT;
      }
    }

    if (hasUtsunomiya && hasTakasaki) {
      const both = candidates.filter(function (lineId) {
        const scope = railwayLinesData[lineId].scope || "";
        return scope.indexOf("宇都宮") !== -1 || scope.indexOf("高崎") !== -1;
      });
      return both.length ? both : candidates.slice();
    }

    return candidates.slice();
  }
  function detectLineName(text) {
    const names = Object.keys(lineNameIndex).sort(function (a, b) {
      return b.length - a.length;
    });

    for (const name of names) {
      if (text.indexOf(name) !== -1) {
        return lineNameIndex[name] && lineNameIndex[name][0]
          ? railwayLinesData[lineNameIndex[name][0]].lineName
          : name;
      }
    }

    const m = text.match(/^([\u4E00-\u9FFF\u3040-\u30FFA-Za-z0-9々ヶ・\-]+(?:線|本線|各駅停車))/);
    return m ? m[1] : "";
  }

  function resolveByStationsAndArea(text, stationTokens, scopeHint, candidates) {
    const scored = candidates.map(function (lineId) {
      const stations = railwayLinesData[lineId].stations || [];
      const scope = railwayLinesData[lineId].scope || "";
      let score = 0;

      stationTokens.forEach(function (token) {
        if (hasStation(stations, token)) {
          score += 2;
        }
      });

      stations.forEach(function (st) {
        if (st.name && text.indexOf(st.name) !== -1) {
          score += 1;
        }
      });

      if (text.indexOf(railwayLinesData[lineId].area + "エリア") !== -1 || text.indexOf(railwayLinesData[lineId].area) !== -1) {
        score += 1;
      }
      if (scopeHint && scope && scope.indexOf(scopeHint) !== -1) {
        score += 3;
      }
      if (scope && text.indexOf(scope) !== -1) {
        score += 2;
      }

      return { lineId: lineId, score: score };
    });

    scored.sort(function (a, b) {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      const areaA = railwayLinesData[a.lineId].area;
      const areaB = railwayLinesData[b.lineId].area;
      return AREA_PRIORITY.indexOf(areaA) - AREA_PRIORITY.indexOf(areaB);
    });

    const top = scored[0];
    const second = scored[1];
    const ambiguous = second && top.score === second.score;

    return {
      lineId: top.lineId,
      lineName: railwayLinesData[top.lineId].lineName,
      area: railwayLinesData[top.lineId].area,
      scope: railwayLinesData[top.lineId].scope || "",
      note: ambiguous
        ? "同名路線が複数あるため駅名・管轄ヒント・優先順で判定（候補: " + candidates.map(displayName).join(" / ") + "）"
        : "同名路線を駅名/管轄ヒントで判定"
    };
  }

  function detectScopeHint(text, lineName) {
    if (!lineName) {
      return "";
    }
    const escaped = escapeRegExp(lineName);
    const m = text.match(new RegExp(escaped + "（([^）]+)）"));
    if (m) {
      return cleanText(m[1]);
    }
    return "";
  }

  function hasStation(stations, token) {
    for (const st of stations) {
      if (st.name === token) {
        return true;
      }
    }
    return false;
  }

  function detectStatus(text) {
    if (/(平常運転|平常通り|通常通り)/.test(text)) {
      return "normal";
    }
    if (/(運転を?見合わせ|見合せ|運転見合わせ)/.test(text)) {
      return "suspend";
    }
    if (/(運転を取りやめ|運休とな|運休します|区間運休|一部運休|直通運転.*中止|運転を中止)/.test(text)) {
      return "stop";
    }
    if (/(徐行運転|遅れ|遅延|ダイヤ乱れ|見込まれます)/.test(text)) {
      return "delay";
    }
    return "delay";
  }

  function detectDirection(text, lineName) {
    const lineUsesLoopTerms = /山手線/.test(lineName || "");
    const hasBoth = /(上下線|両方向|双方|上下とも|内回り・外回り|内回りと外回り|外回り・内回り)/.test(text);
    const hasUp = /(上り線|上り列車)/.test(text);
    const hasDown = /(下り線|下り列車)/.test(text);
    const hasInner = /(内回り)/.test(text);
    const hasOuter = /(外回り)/.test(text);

    if (lineUsesLoopTerms || hasInner || hasOuter) {
      const upLabel = "内回り";
      const downLabel = "外回り";
      if (hasBoth || (hasInner && hasOuter)) {
        return directionObj("both", upLabel, downLabel, "内回り/外回り");
      }
      if (hasInner) {
        return directionObj("up", upLabel, downLabel, "内回りのみ");
      }
      if (hasOuter) {
        return directionObj("down", upLabel, downLabel, "外回りのみ");
      }
      if (hasUp && hasDown) {
        return directionObj("both", upLabel, downLabel, "内回り/外回り");
      }
      if (hasUp) {
        return directionObj("up", upLabel, downLabel, "内回りのみ");
      }
      if (hasDown) {
        return directionObj("down", upLabel, downLabel, "外回りのみ");
      }
      return directionObj("unknown", upLabel, downLabel, "方向不明");
    }

    const upLabel = "上り";
    const downLabel = "下り";
    if (hasBoth || (hasUp && hasDown)) {
      return directionObj("both", upLabel, downLabel, "上下線");
    }
    if (hasUp) {
      return directionObj("up", upLabel, downLabel, "上りのみ");
    }
    if (hasDown) {
      return directionObj("down", upLabel, downLabel, "下りのみ");
    }
    return directionObj("unknown", upLabel, downLabel, "方向不明");
  }

  function detectSection(text) {
    const sections = [];
    const tokens = [];
    const ranges = [];

    const pairPatterns = [
      /([\u4E00-\u9FFF\u3040-\u30FFA-Za-z0-9々ヶ・]+)\s*[〜～\-－]\s*([\u4E00-\u9FFF\u3040-\u30FFA-Za-z0-9々ヶ・]+)駅?間/g,
      /([\u4E00-\u9FFF\u3040-\u30FFA-Za-z0-9々ヶ・]+)\s*[〜～\-－]\s*([\u4E00-\u9FFF\u3040-\u30FFA-Za-z0-9々ヶ・]+)間/g
    ];

    pairPatterns.forEach(function (p) {
      let m;
      while ((m = p.exec(text)) !== null) {
        const from = normalizeStationToken(cleanText(m[1]));
        const to = normalizeStationToken(cleanText(m[2]));
        sections.push(from + "〜" + to);
        tokens.push(from);
        tokens.push(to);
        ranges.push({ from: from, to: to });
      }
    });

    const uniqSections = uniq(sections);
    const uniqTokens = uniq(tokens);

    return {
      text: uniqSections.join(" / "),
      stationTokens: uniqTokens,
      ranges: ranges
    };
  }

  function resolveOperationalSection(text, status, sectionInfo) {
    const base = sectionInfo || { text: "", ranges: [] };
    const ranges = Array.isArray(base.ranges) ? base.ranges : [];

    if (status !== "suspend" && status !== "stop") {
      return {
        text: base.text || "",
        ranges: ranges
      };
    }

    const linked = detectOperationLinkedRanges(text);
    if (linked.length) {
      return {
        text: linked.map(function (r) {
          return r.from + "〜" + r.to;
        }).join(" / "),
        ranges: linked
      };
    }

    // 「A〜B駅間での〜の影響で、上下線で運転を見合わせ」のような文は
    // 原因発生箇所が抽出されるため、全線見合わせとして区間を空にする。
    if (isLikelyWholeLineSuspension(text)) {
      return { text: "", ranges: [] };
    }

    return {
      text: base.text || "",
      ranges: ranges
    };
  }

  function detectOperationLinkedRanges(text) {
    const out = [];
    const seen = {};
    const patterns = [
      /([\u4E00-\u9FFF\u3040-\u30FFA-Za-z0-9々ヶ・]+)\s*[〜～\-－]\s*([\u4E00-\u9FFF\u3040-\u30FFA-Za-z0-9々ヶ・]+)駅?間の[^。\n]*(運転を?見合わせ|運休|運転を取りやめ|運転を中止)/g,
      /([\u4E00-\u9FFF\u3040-\u30FFA-Za-z0-9々ヶ・]+)\s*[〜～\-－]\s*([\u4E00-\u9FFF\u3040-\u30FFA-Za-z0-9々ヶ・]+)駅?間で(?!の)[^。\n]*(運転を?見合わせ|運休|運転を取りやめ|運転を中止)/g
    ];

    patterns.forEach(function (p) {
      let m;
      while ((m = p.exec(text)) !== null) {
        const from = normalizeStationToken(cleanText(m[1]));
        const to = normalizeStationToken(cleanText(m[2]));
        const key = from + "|" + to;
        if (!from || !to || from === to || seen[key]) {
          continue;
        }
        seen[key] = true;
        out.push({ from: from, to: to });
      }
    });

    return out;
  }

  function isLikelyWholeLineSuspension(text) {
    if (/一部/.test(text)) {
      return false;
    }
    return /(上下線|全線|全区間)[^。\n]{0,24}(運転を?見合わせ|運休|運転を取りやめ|運転を中止)/.test(text);
  }

  function detectCause(text) {
    const patterns = [
      /([^。\n]+?)の影響で/,
      /([^。\n]+?)を行うため/,
      /([^。\n]+?)を防ぐため/,
      /([^。\n]+?)のため/,
      /([^。\n]+?)を踏まえ/,
      /([^。\n]+?)に伴う/,
      /([^。\n]+?)により/
    ];

    for (const p of patterns) {
      const m = text.match(p);
      if (!m) {
        continue;
      }
      const c = cleanupCausePhrase(m[1]);
      if (c) {
        return c;
      }
    }

    return "";
  }

  function cleanupCausePhrase(raw) {
    let s = String(raw || "");
    s = s.replace(/（[^）]*）/g, " ");
    s = s.split(/[、，,]/).pop() || s;

    // 「宇都宮線内での人身事故」のような前置きから主因部分だけを残す
    s = s.replace(/^.*?での\s*/, "");
    s = s.replace(/^.*?における\s*/, "");
    s = s.replace(/^.*?は\s*/, "");
    s = s.replace(/^.*?で\s*/, "");
    s = s.replace(/^の+/, "");

    return cleanText(s);
  }

  function detectResume(text, status) {
    if (/運転再開見込.*立っていません/.test(text) || /再開見込.*未定/.test(text)) {
      return "未定";
    }

    if (/運転再開の時期は改めてお知らせ/.test(text)) {
      return "時期未定（別途案内）";
    }

    const m1 = text.match(/運転再開(?:見込|見込み)?(?:は|を)?\s*([^。\n]+)/);
    if (m1) {
      return cleanText(m1[1]);
    }

    const m2 = text.match(/(?:再開予定|再開見込み)\s*[:：]?\s*([^。\n]+)/);
    if (m2) {
      return cleanText(m2[1]);
    }

    if (/当面の間/.test(text) && (status === "stop" || status === "suspend")) {
      return "当面の間";
    }

    return "";
  }

  function render() {
    const previousScrollByLine = captureStationScrollPositions();
    ui.cards.innerHTML = "";

    const orderedIds = Object.keys(railwayLinesData).sort(function (a, b) {
      const aArea = railwayLinesData[a].area;
      const bArea = railwayLinesData[b].area;

      if (aArea !== bArea) {
        return AREA_PRIORITY.indexOf(aArea) - AREA_PRIORITY.indexOf(bArea);
      }

      const byName = railwayLinesData[a].lineName.localeCompare(railwayLinesData[b].lineName, "ja");
      if (byName !== 0) {
        return byName;
      }
      return (railwayLinesData[a].scope || "").localeCompare((railwayLinesData[b].scope || ""), "ja");
    });

    const forceSegments = !!(ui.debugForceSegments && ui.debugForceSegments.checked);

    orderedIds.forEach(function (lineId) {
      ensureLine(lineId);

      const line = railwayLinesData[lineId];
      if (!lineMatchesDirection(line.lineName)) {
        return;
      }
      const s = state[lineId];
      const meta = statusMeta[s.status] || statusMeta.normal;

      const card = document.createElement("section");
      card.className = "card";

      const ageMin = getUpdatedAgeMinutes(s.updatedAt);
      const isStale = ageMin !== null && ageMin >= STALE_MINUTES;
      if (isStale) {
        card.classList.add("card-stale");
      }

      const head = document.createElement("div");
      head.className = "head";

      const headMain = document.createElement("div");
      headMain.className = "head-main";

      const title = document.createElement("div");
      title.className = "line-name";
      renderLineTitleNode(title, line);

      const areaChip = document.createElement("span");
      areaChip.className = "station";
      areaChip.textContent = line.area;
      const scopeChip = document.createElement("span");
      scopeChip.className = "station";
      scopeChip.textContent = line.scope || "管轄未設定";
      const badge = document.createElement("span");
      badge.className = "badge " + meta.badge;
      badge.textContent = meta.label;

      const readAt = document.createElement("span");
      readAt.className = "read-at";
      readAt.textContent = "データ読込時刻: " + (s.updatedAt || "未更新");

      headMain.appendChild(title);
      headMain.appendChild(areaChip);
      headMain.appendChild(scopeChip);
      headMain.appendChild(badge);
      headMain.appendChild(readAt);

      const headRight = document.createElement("div");
      headRight.className = "head-right";
      const clearBtn = document.createElement("button");
      clearBtn.type = "button";
      clearBtn.className = "btn-clear-card";
      clearBtn.textContent = "クリア";
      clearBtn.addEventListener("click", function () {
        clearLineState(lineId);
        persistState();
        render();
        ui.parseResult.textContent = "カードをクリアしました: " + displayName(lineId);
      });
      headRight.appendChild(clearBtn);

      head.appendChild(headMain);
      head.appendChild(headRight);

      const metaBlock = document.createElement("div");
      metaBlock.className = "meta";
      const sourceText = escapeHtml((s.sourceText || "---")).replace(/\n/g, "<br>");
      metaBlock.innerHTML = [
        "<div class=\"meta-grid\">",
        "  <div class=\"meta-main\">",
        "    <span class=\"direction-basis\">" + escapeHtml(directionBasisText(line.lineName)) + "</span><br>",
        "    方向: " + escapeHtml(displayDirectionForCard(s)) + "<br>",
        "    区間: " + escapeHtml(displayFieldForCard(s, s.section, "全線/未設定")) + "<br>",
        "    原因: " + escapeHtml(displayFieldForCard(s, s.cause, "未設定")) + "<br>",
        "    再開見込み: " + escapeHtml(displayFieldForCard(s, s.resume, "未設定")) + "<br>",
        (isStale ? "<span class=\"stale-alert\">データ読込から " + ageMin + " 分経過（再確認推奨）</span>" : ""),
        "  </div>",
        "  <div class=\"meta-source\">",
        "    <div class=\"meta-label\">解析した自然文</div>",
        "    <div class=\"meta-source-text\">" + sourceText + "</div>",
        "  </div>",
        "</div>"
      ].join("");

      const stations = document.createElement("div");
      stations.className = "stations";
      stations.setAttribute("data-line-id", lineId);
      const preservedScroll = previousScrollByLine[lineId];
      let loopForScrollRestore = false;

      if (!line.stations.length) {
        const note = document.createElement("span");
        note.className = "station";
        note.textContent = "駅データ未設定";
        stations.appendChild(note);
      } else {
        const isLoopLine = isLoopLineName(line.lineName);
        loopForScrollRestore = isLoopLine;
        const baseStations = line.stations;
        const loopDisplayLaps = isLoopLine ? 3 : 1;
        const displayStations = [];
        for (let lap = 0; lap < loopDisplayLaps; lap += 1) {
          baseStations.forEach(function (st, idx) {
            displayStations.push({
              station: st,
              baseIdx: idx,
              lap: lap
            });
          });
        }
        const ranges = Array.isArray(s.sectionRanges) && s.sectionRanges.length
          ? s.sectionRanges
          : rangesFromSectionText(s.section);
        const affectedMap = buildAffectedSegments(baseStations, ranges, isLoopLine, s.directionMode || "unknown");
        const wholeLineByStatus = (!ranges.length && !cleanText(s.section) && (s.status === "suspend" || s.status === "stop"));
        const segmentCount = isLoopLine ? baseStations.length : baseStations.length - 1;
        if (wholeLineByStatus) {
          for (let i = 0; i < segmentCount; i += 1) {
            affectedMap[i] = true;
          }
        }

        displayStations.forEach(function (entry, displayIdx) {
          const st = entry.station;
          const station = document.createElement("span");
          station.className = "station";
          if (isLoopLine) {
            station.setAttribute("data-loop-base-idx", String(entry.baseIdx));
            station.setAttribute("data-loop-lap", String(entry.lap));
          }

          const stationName = document.createElement("span");
          stationName.className = "station-name";
          stationName.textContent = st.name;
          station.appendChild(stationName);

          const interchangeLabels = collectInterchangeLabels(st);
          const stationKey = makeStationKey(lineId, st.name);
          const stationKana = detectStationKana(st);
          if (interchangeLabels.length) {
            station.classList.add("station-with-xfer");
          }
          if (selectedStation && selectedStation.key === stationKey) {
            station.classList.add("station-selected");
          }
          if (stationKana) {
            station.title = stationKana;
          }
          station.addEventListener("click", function () {
            setSelectedStation(lineId, line, st);
          });

          stations.appendChild(station);
          if (displayIdx < displayStations.length - 1) {
            const segment = document.createElement("span");
            segment.className = "segment";
            if (isLoopLine && entry.baseIdx === baseStations.length - 1) {
              segment.classList.add("segment-loop-close");
              segment.title = "環状接続: " + st.name + "→" + baseStations[0].name;
            }

            const topTrack = document.createElement("span");
            topTrack.className = "seg-track top";
            const bottomTrack = document.createElement("span");
            bottomTrack.className = "seg-track bottom";
            const affectedIdx = isLoopLine ? entry.baseIdx : displayIdx;

            if (affectedMap[affectedIdx]) {
              const statusClass = "status-" + normalizeStatus(s.status);
              const mode = s.directionMode || "unknown";
              applyTrackActivation(topTrack, bottomTrack, mode, statusClass);
              segment.title = directionDisplayFromState(s) + " に影響";
            } else if (forceSegments) {
              applyTrackActivation(topTrack, bottomTrack, "both", "status-delay");
              segment.title = "デバッグ強制表示";
            }

            segment.appendChild(topTrack);
            segment.appendChild(bottomTrack);
            stations.appendChild(segment);
          }
        });
      }

      card.appendChild(head);
      card.appendChild(metaBlock);
      card.appendChild(stations);
      ui.cards.appendChild(card);
      if (line.stations.length) {
        if (loopForScrollRestore) {
          setupPseudoInfiniteLoopScroll(stations, preservedScroll);
        } else if (typeof preservedScroll === "number" && preservedScroll >= 0) {
          stations.scrollLeft = preservedScroll;
        }
      }
    });

    renderSelectedStationPanel();
  }

  function captureStationScrollPositions() {
    const out = {};
    if (!ui.cards) {
      return out;
    }
    const lists = ui.cards.querySelectorAll(".stations[data-line-id]");
    lists.forEach(function (el) {
      const lineId = el.getAttribute("data-line-id");
      if (!lineId) {
        return;
      }
      out[lineId] = el.scrollLeft || 0;
    });
    return out;
  }

  function renderSelectedStationPanel() {
    if (!ui.stationDetail) {
      return;
    }
    ui.stationDetail.innerHTML = "";

    if (!selectedStation || !selectedStation.stationName) {
      const empty = document.createElement("p");
      empty.className = "station-detail-empty";
      empty.textContent = "駅を選択してください。";
      ui.stationDetail.appendChild(empty);
      return;
    }

    const head = document.createElement("div");
    head.className = "station-detail-head";

    const h3 = document.createElement("h3");
    h3.className = "station-detail-title";
    h3.textContent = selectedStation.stationName;
    head.appendChild(h3);

    const sub = document.createElement("div");
    sub.className = "station-detail-sub";

    const areaChip = document.createElement("span");
    areaChip.className = "station-detail-chip";
    areaChip.textContent = selectedStation.lineArea || "未分類";
    sub.appendChild(areaChip);

    const lineChip = document.createElement("span");
    lineChip.className = "station-detail-chip";
    lineChip.textContent = lineNameWithSymbol(selectedStation.lineName || "") || "路線未設定";
    sub.appendChild(lineChip);
    const symbol = routeSymbolByLineName(selectedStation.lineName || "");
    if (symbol) {
      sub.appendChild(createRouteSymbolNode(symbol));
    }

    if (selectedStation.lineScope) {
      const scopeChip = document.createElement("span");
      scopeChip.className = "station-detail-chip";
      scopeChip.textContent = selectedStation.lineScope;
      sub.appendChild(scopeChip);
    }
    head.appendChild(sub);
    ui.stationDetail.appendChild(head);

    const kanaBlock = document.createElement("div");
    kanaBlock.className = "station-detail-block";
    const kanaLabel = document.createElement("p");
    kanaLabel.className = "station-detail-label";
    kanaLabel.textContent = "駅名かな";
    const kanaValue = document.createElement("p");
    kanaValue.className = "station-detail-value";
    kanaValue.textContent = selectedStation.stationKana || "未登録";
    kanaBlock.appendChild(kanaLabel);
    kanaBlock.appendChild(kanaValue);
    ui.stationDetail.appendChild(kanaBlock);

    const xferBlock = document.createElement("div");
    xferBlock.className = "station-detail-block";
    const xferLabel = document.createElement("p");
    xferLabel.className = "station-detail-label";
    xferLabel.textContent = "乗換路線";
    xferBlock.appendChild(xferLabel);

    const list = cleanInterchanges(selectedStation.interchanges || []);
    if (!list.length) {
      const noXfer = document.createElement("p");
      noXfer.className = "station-detail-value";
      noXfer.textContent = "登録なし";
      xferBlock.appendChild(noXfer);
    } else {
      const ul = document.createElement("ul");
      ul.className = "station-xfer-list";
      list.forEach(function (it) {
        const li = document.createElement("li");
        li.className = "station-xfer-item";
        const parts = [];
        if (it.toOperator) {
          parts.push(it.toOperator);
        }
        if (it.toLine) {
          parts.push(it.toLine);
        }
        let text = parts.join(" ");
        if (!text) {
          text = "路線名未設定";
        }
        if (it.toStationName) {
          text += "（" + it.toStationName + "）";
        }
        li.textContent = text;
        ul.appendChild(li);
      });
      xferBlock.appendChild(ul);
    }
    ui.stationDetail.appendChild(xferBlock);
  }


  function directionBasisText(lineName) {
    if (isLoopLineName(lineName)) {
      return "方向基準: → 外回り / ← 内回り";
    }
    return "方向基準: → 下り / ← 上り";
  }

  function directionObj(mode, upLabel, downLabel, display) {
    return {
      mode: mode,
      upLabel: upLabel,
      downLabel: downLabel,
      display: display
    };
  }

  function directionByMode(mode, lineName) {
    const loop = isLoopLineName(lineName);
    const upLabel = loop ? "内回り" : "上り";
    const downLabel = loop ? "外回り" : "下り";
    if (mode === "both") {
      return directionObj("both", upLabel, downLabel, upLabel + "/" + downLabel);
    }
    if (mode === "up") {
      return directionObj("up", upLabel, downLabel, upLabel + "のみ");
    }
    if (mode === "down") {
      return directionObj("down", upLabel, downLabel, downLabel + "のみ");
    }
    return directionObj("unknown", upLabel, downLabel, "方向不明");
  }

  function displayDirectionForCard(s) {
    if (s && s.isCleared) {
      return "---";
    }
    return directionDisplayFromState(s);
  }

  function displayFieldForCard(s, value, fallback) {
    if (s && s.isCleared) {
      return "---";
    }
    return value || fallback;
  }

  function directionDisplayFromState(s) {
    if (!s) {
      return "方向不明";
    }
    if (s.directionMode === "both") {
      return (s.directionUpLabel || "上り") + "/" + (s.directionDownLabel || "下り");
    }
    if (s.directionMode === "up") {
      return (s.directionUpLabel || "上り") + "のみ";
    }
    if (s.directionMode === "down") {
      return (s.directionDownLabel || "下り") + "のみ";
    }
    return "方向不明";
  }

  function collectInterchangeLabels(station) {
    const list = Array.isArray(station && station.interchanges) ? station.interchanges : [];
    const labels = [];

    list.forEach(function (it) {
      const line = cleanText((it && it.toLine) || "");
      const op = cleanText((it && it.toOperator) || "");
      let label = line || cleanText((it && it.toStationName) || "");
      if (!label) {
        return;
      }
      if (op && label.indexOf(op) === -1) {
        label = op + " " + label;
      }
      if (labels.indexOf(label) === -1) {
        labels.push(label);
      }
    });

    return labels;
  }

  function detectStationKana(station) {
    const raw = cleanText((station && (station.nameKana || station.kana)) || "");
    if (raw) {
      return raw;
    }
    const name = cleanText(station && station.name);
    if (!name || !/^[\u3040-\u309F\u30A0-\u30FFー・\s]+$/.test(name)) {
      return "";
    }
    return katakanaToHiragana(name).replace(/\s+/g, "");
  }

  function katakanaToHiragana(input) {
    return String(input || "").replace(/[\u30A1-\u30F6]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) - 0x60);
    });
  }

  function rangesFromSectionText(sectionText) {
    const ranges = [];
    String(sectionText || "").split("/").forEach(function (chunk) {
      const part = normalize(cleanText(chunk));
      if (!part) {
        return;
      }
      const m = part.match(/^(.+?)[〜～\-－→←↔](.+)$/);
      const mFromTo = m ? null : part.match(/^(.+?)から(.+?)(?:まで)?$/);
      const picked = m || mFromTo;
      if (picked) {
        ranges.push({ from: cleanText(normalize(picked[1])), to: cleanText(normalize(picked[2])) });
      }
    });
    return ranges;
  }

  function isLoopLineName(lineName) {
    return /山手線/.test(lineName || "");
  }

  function setupPseudoInfiniteLoopScroll(stationsEl, preservedScrollLeft) {
    const anchors = stationsEl.querySelectorAll('.station[data-loop-base-idx="0"]');
    if (!anchors || anchors.length < 3) {
      return;
    }

    const a0 = anchors[0];
    const a1 = anchors[1];
    const lapWidth = a1.offsetLeft - a0.offsetLeft;
    if (!(lapWidth > 0)) {
      return;
    }

    if (typeof preservedScrollLeft === "number" && preservedScrollLeft >= 0) {
      stationsEl.scrollLeft = preservedScrollLeft;
    } else {
      stationsEl.scrollLeft = lapWidth;
    }
    let adjusting = false;

    stationsEl.addEventListener("scroll", function () {
      if (adjusting) {
        return;
      }
      const x = stationsEl.scrollLeft;
      if (x < lapWidth * 0.5) {
        adjusting = true;
        stationsEl.scrollLeft = x + lapWidth;
        adjusting = false;
        return;
      }
      if (x > lapWidth * 1.5) {
        adjusting = true;
        stationsEl.scrollLeft = x - lapWidth;
        adjusting = false;
      }
    });
  }

  function buildAffectedSegments(stations, ranges, isLoopLine, directionMode) {
    const affected = {};
    const count = Array.isArray(stations) ? stations.length : 0;
    const loopEnabled = !!isLoopLine && count >= 2;

    (ranges || []).forEach(function (r) {
      const fromIdx = findStationIndex(stations, r.from);
      const toIdx = findStationIndex(stations, r.to);
      if (fromIdx < 0 || toIdx < 0 || fromIdx === toIdx) {
        return;
      }

      if (!loopEnabled) {
        const start = Math.min(fromIdx, toIdx);
        const end = Math.max(fromIdx, toIdx);
        for (let i = start; i < end; i += 1) {
          affected[i] = true;
        }
        return;
      }

      const forward = loopSegmentPath(count, fromIdx, toIdx, true);
      const backward = loopSegmentPath(count, fromIdx, toIdx, false);
      let chosen;
      if (directionMode === "down") {
        chosen = forward;
      } else if (directionMode === "up") {
        chosen = backward;
      } else {
        chosen = forward.length <= backward.length ? forward : backward;
      }
      chosen.forEach(function (idx) {
        affected[idx] = true;
      });
    });
    return affected;
  }

  function loopSegmentPath(stationCount, fromIdx, toIdx, forward) {
    const segments = [];
    let cur = fromIdx;
    while (cur !== toIdx) {
      if (forward) {
        segments.push(cur);
        cur = (cur + 1) % stationCount;
      } else {
        const prev = (cur - 1 + stationCount) % stationCount;
        segments.push(prev);
        cur = prev;
      }
    }
    return segments;
  }

  function findStationIndex(stations, stationName) {
    for (let i = 0; i < stations.length; i += 1) {
      if (normalizeStationToken(stations[i].name) === normalizeStationToken(stationName)) {
        return i;
      }
    }
    return -1;
  }

  function applyTrackActivation(topTrack, bottomTrack, mode, statusClass) {
    if (mode === "both") {
      activateTrack(topTrack, statusClass, "flow-left");
      activateTrack(bottomTrack, statusClass, "flow-right");
      return;
    }
    if (mode === "up") {
      activateTrack(topTrack, statusClass, "flow-left");
      return;
    }
    if (mode === "down") {
      activateTrack(bottomTrack, statusClass, "flow-right");
      return;
    }
    activateTrack(topTrack, statusClass, "flow-pulse");
    activateTrack(bottomTrack, statusClass, "flow-pulse");
  }

  function activateTrack(trackEl, statusClass, flowClass) {
    trackEl.classList.add("active");
    trackEl.classList.add(statusClass);
    trackEl.classList.add(flowClass);
  }

  function normalizeStatus(status) {
    if (status === "normal" || status === "delay" || status === "suspend" || status === "stop") {
      return status;
    }
    return "unknown";
  }

  function parseUpdatedAt(value) {
    const m = String(value || "").match(/^(\d{4})\/(\d{2})\/(\d{2})\s+(\d{2}):(\d{2}):(\d{2})$/);
    if (!m) {
      return null;
    }
    return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), Number(m[4]), Number(m[5]), Number(m[6]));
  }

  function getUpdatedAgeMinutes(updatedAt) {
    const d = parseUpdatedAt(updatedAt);
    if (!d || Number.isNaN(d.getTime())) {
      return null;
    }
    const diff = Date.now() - d.getTime();
    if (diff < 0) {
      return 0;
    }
    return Math.floor(diff / 60000);
  }

  function normalize(input) {
    return String(input || "")
      .replace(/\r\n/g, "\n")
      .replace(/\u3000/g, " ")
      .replace(/[‐‑‒–—―ー]/g, "-")
      .trim();
  }

  function normalizeStationToken(input) {
    return cleanText(input)
      .replace(/\s+/g, "")
      .replace(/駅$/g, "");
  }

  function cleanText(input) {
    return String(input || "")
      .replace(/^[、。\s]+|[、。\s]+$/g, "")
      .replace(/\s+/g, " ");
  }

  function nowLabel() {
    const d = new Date();
    const p = function (n) {
      return String(n).padStart(2, "0");
    };
    return d.getFullYear() + "/" + p(d.getMonth() + 1) + "/" + p(d.getDate()) + " " + p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
  }

  function uniq(items) {
    const out = [];
    items.forEach(function (x) {
      if (x && out.indexOf(x) === -1) {
        out.push(x);
      }
    });
    return out;
  }

  function slug(input) {
    return String(input || "").replace(/\s+/g, "_");
  }

  function escapeRegExp(str) {
    return String(str || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();







































