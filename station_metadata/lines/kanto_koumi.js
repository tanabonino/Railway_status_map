// 路線別メタデータ: 小海線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "小淵沢": { nameKana: "こぶちざわ" },
  "野辺山": { nameKana: "のべやま" },
  "小諸": { nameKana: "こもろ" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:koumi": {
    area: "関東",
    operator: "JR東日本",
    lineName: "小海線",
    lineNameKana: "こうみせん",
    scope: "八王子支社",
    directionGroups: ["中央方面"],
    stations: [
      { name: "小淵沢" }, { name: "野辺山" }, { name: "小諸" }
    ]
  }
});
