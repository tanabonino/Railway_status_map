// 路線別メタデータ: 上越線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "高崎": {
    nameKana: "たかさき",
    interchanges: [
      { operator: "JR東日本", line: "高崎線" },
      { operator: "JR東日本", line: "信越本線" },
      { operator: "上信電鉄", line: "上信電鉄線" }
    ]
  },
  "高崎問屋町": { nameKana: "たかさきとんやまち" },
  "井野": { nameKana: "いの" },
  "新前橋": {
    nameKana: "しんまえばし",
    interchanges: [
      { operator: "JR東日本", line: "両毛線" }
    ]
  },
  "群馬総社": { nameKana: "ぐんまそうじゃ" },
  "八木原": { nameKana: "やぎはら" },
  "渋川": {
    nameKana: "しぶかわ",
    interchanges: [
      { operator: "JR東日本", line: "吾妻線" }
    ]
  },
  "敷島": { nameKana: "しきしま" },
  "津久田": { nameKana: "つくだ" },
  "岩本": { nameKana: "いわもと" },
  "沼田": { nameKana: "ぬまた" },
  "後閑": { nameKana: "ごかん" },
  "上牧": { nameKana: "かみもく" },
  "水上": { nameKana: "みなかみ" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:joetsu_kanto": {
    area: "関東",
    operator: "JR東日本",
    lineName: "上越線",
    lineNameKana: "じょうえつせん",
    scope: "高崎支社",
    directionGroups: ["東北・高崎方面"],
    stations: [
      { name: "高崎" }, { name: "高崎問屋町" }, { name: "井野" }, { name: "新前橋" }, { name: "群馬総社" },
      { name: "八木原" }, { name: "渋川" }, { name: "敷島" }, { name: "津久田" }, { name: "岩本" },
      { name: "沼田" }, { name: "後閑" }, { name: "上牧" }, { name: "水上" }
    ]
  }
});
