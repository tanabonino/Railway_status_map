// 路線別メタデータ: 日光線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
Object.assign(window.stationMetadataChunks, {
  "宇都宮": {
    nameKana: "うつのみや",
    interchanges: [
      { toOperator: "JR東日本", toLine: "東北本線（宇都宮線）" },
      { toOperator: "JR東日本", toLine: "東北新幹線" }
    ]
  },
  "鶴田": { nameKana: "つるた" },
  "鹿沼": { nameKana: "かぬま" },
  "文挾": { nameKana: "ふばさみ" },
  "下野大沢": { nameKana: "しもつけおおさわ" },
  "今市": {
    nameKana: "いまいち",
    interchanges: [
      { toOperator: "東武鉄道", toLine: "日光線", toStationName: "下今市駅" }
    ]
  },
  "日光": {
    nameKana: "にっこう",
    interchanges: [
      { toOperator: "東武鉄道", toLine: "日光線", toStationName: "東武日光駅" }
    ]
  }
});