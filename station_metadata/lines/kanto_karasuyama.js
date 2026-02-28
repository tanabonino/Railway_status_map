// 路線別メタデータ: 烏山線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "宝積寺": {
    nameKana: "ほうしゃくじ",
    interchanges: [
      { operator: "JR東日本", line: "東北本線（宇都宮線）" }
    ]
  },
  "下野花岡": { nameKana: "しもつけはなおか" },
  "仁井田": { nameKana: "にいた" },
  "大金": { nameKana: "おおがね" },
  "鴻野山": { nameKana: "こうのやま" },
  "小塙": { nameKana: "こばな" },
  "滝": { nameKana: "たき" },
  "烏山": { nameKana: "からすやま" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:karasuyama": {
    area: "関東",
    operator: "JR東日本",
    lineName: "烏山線",
    lineNameKana: "からすやません",
    scope: "大宮支社",
    directionGroups: ["東北・高崎方面"],
    stations: [
      { name: "宝積寺" }, { name: "下野花岡" }, { name: "仁井田" }, { name: "大金" },
      { name: "鴻野山" }, { name: "小塙" }, { name: "滝" }, { name: "烏山" }
    ]
  }
});
