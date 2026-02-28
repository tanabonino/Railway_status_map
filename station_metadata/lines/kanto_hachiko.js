// 路線別メタデータ: 八高線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "八王子": { nameKana: "はちおうじ", interchanges: [{ toOperator: "京王", toLine: "京王線", toStationName: "京王八王子" }] },
  "拝島": { nameKana: "はいじま", interchanges: [{ toOperator: "西武", toLine: "拝島線" }] },
  "高麗川": { nameKana: "こまがわ" },
  "寄居": { nameKana: "よりい", interchanges: [{ toOperator: "東武", toLine: "東上線" }, { toOperator: "秩父鉄道", toLine: "秩父本線" }] },
  "高崎": { nameKana: "たかさき", interchanges: [{ toOperator: "上信電鉄", toLine: "上信線" }] }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:hachiko": {
    area: "関東",
    operator: "JR東日本",
    lineName: "八高線",
    lineNameKana: "はちこうせん",
    scope: "八王子支社",
    directionGroups: ["東北・高崎方面", "中央方面"],
    stations: [
      { name: "八王子" }, { name: "拝島" }, { name: "高麗川" }, { name: "寄居" }, { name: "高崎" }
    ]
  }
});
