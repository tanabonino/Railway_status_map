// 路線別メタデータ: 信越本線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "高崎": {
    nameKana: "たかさき",
    interchanges: [
      { operator: "JR東日本", line: "高崎線" },
      { operator: "JR東日本", line: "上越線" },
      { operator: "JR東日本", line: "両毛線" },
      { operator: "JR東日本", line: "八高線" },
      { operator: "上信電鉄", line: "上信線" }
    ]
  },
  "北高崎": { nameKana: "きたたかさき" },
  "群馬八幡": { nameKana: "ぐんまやわた" },
  "安中": { nameKana: "あんなか" },
  "磯部": { nameKana: "いそべ" },
  "松井田": { nameKana: "まついだ" },
  "西松井田": { nameKana: "にしまついだ" },
  "横川": { nameKana: "よこかわ" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:shinetsu_kanto": {
    area: "関東",
    operator: "JR東日本",
    lineName: "信越本線",
    lineNameKana: "しんえつほんせん",
    scope: "高崎支社",
    directionGroups: ["東北・高崎方面"],
    stations: [
      { name: "高崎" }, { name: "北高崎" }, { name: "群馬八幡" }, { name: "安中" },
      { name: "磯部" }, { name: "松井田" }, { name: "西松井田" }, { name: "横川" }
    ]
  }
});
