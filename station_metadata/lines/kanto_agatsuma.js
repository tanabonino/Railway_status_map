// 路線別メタデータ: 吾妻線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "渋川": { nameKana: "しぶかわ" },
  "中之条": { nameKana: "なかのじょう" },
  "長野原草津口": { nameKana: "ながのはらくさつぐち" },
  "万座・鹿沢口": { nameKana: "まんざ・かざわぐち" },
  "大前": { nameKana: "おおまえ" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:agatsuma": {
    area: "関東",
    operator: "JR東日本",
    lineName: "吾妻線",
    lineNameKana: "あがつません",
    scope: "高崎支社",
    directionGroups: ["東北・高崎方面"],
    stations: [
      { name: "渋川" }, { name: "中之条" }, { name: "長野原草津口" }, { name: "万座・鹿沢口" }, { name: "大前" }
    ]
  }
});
