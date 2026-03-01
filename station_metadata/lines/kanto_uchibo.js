// 路線別メタデータ: 内房線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "蘇我": { nameKana: "そが" },
  "浜野": { nameKana: "はまの" },
  "八幡宿": { nameKana: "やわたじゅく" },
  "五井": { nameKana: "ごい", interchanges: [{ toOperator: "小湊鐵道", toLine: "小湊鉄道線" }] },
  "姉ケ崎": { nameKana: "あねがさき" },
  "木更津": { nameKana: "きさらづ" },
  "君津": { nameKana: "きみつ" },
  "富浦": { nameKana: "とみうら" },
  "那古船形": { nameKana: "なこふなかた" },
  "館山": { nameKana: "たてやま" },
  "千倉": { nameKana: "ちくら" },
  "安房鴨川": { nameKana: "あわかもがわ" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:uchibo": {
    area: "関東",
    operator: "JR東日本",
    lineName: "内房線",
    lineNameKana: "うちぼうせん",
    scope: "千葉支社",
    directionGroups: ["総武方面"],
    stations: [
      { name: "蘇我" }, { name: "浜野" }, { name: "八幡宿" }, { name: "五井" }, { name: "姉ケ崎" },
      { name: "木更津" }, { name: "君津" }, { name: "富浦" }, { name: "那古船形" }, { name: "館山" },
      { name: "千倉" }, { name: "安房鴨川" }
    ]
  }
});
