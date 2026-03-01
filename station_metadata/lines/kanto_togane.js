// 路線別メタデータ: 東金線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "大網": { nameKana: "おおあみ" },
  "東金": { nameKana: "とうがね" },
  "成東": { nameKana: "なるとう" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:togane": {
    area: "関東",
    operator: "JR東日本",
    lineName: "東金線",
    lineNameKana: "とうがねせん",
    scope: "千葉支社",
    directionGroups: ["総武方面"],
    stations: [
      { name: "大網" }, { name: "東金" }, { name: "成東" }
    ]
  }
});
