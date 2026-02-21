// 駅メタデータ統合ローダー
// 各ファイルは window.stationMetadataChunks に駅名キーで追加する。
(function () {
  const chunks = window.stationMetadataChunks || {};
  const base = window.stationMetadata || {};
  const merged = {};

  function mergeInterchanges(primary, secondary) {
    const out = [];
    const seen = {};

    function pushAll(list) {
      (Array.isArray(list) ? list : []).forEach(function (it) {
        const item = {
          toOperator: String((it && it.toOperator) || ""),
          toLine: String((it && it.toLine) || ""),
          toStationName: String((it && it.toStationName) || "")
        };
        const key = [item.toOperator, item.toLine, item.toStationName].join("|");
        if (!key || seen[key]) {
          return;
        }
        seen[key] = true;
        out.push(item);
      });
    }

    pushAll(primary);
    pushAll(secondary);
    return out;
  }

  function mergeStation(name, src) {
    const current = merged[name] || {};
    merged[name] = {
      nameKana: String((src && src.nameKana) || current.nameKana || ""),
      interchanges: mergeInterchanges(
        current.interchanges || [],
        (src && src.interchanges) || []
      )
    };
  }

  Object.keys(base).forEach(function (name) {
    mergeStation(name, base[name]);
  });

  Object.keys(chunks).forEach(function (name) {
    mergeStation(name, chunks[name]);
  });

  window.stationMetadata = merged;
})();
