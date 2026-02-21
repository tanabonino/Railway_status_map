// 中央線快速電車系メタデータ
window.stationMetadataChunks = window.stationMetadataChunks || {};
Object.assign(window.stationMetadataChunks, {
  "御茶ノ水": {
    nameKana: "おちゃのみず",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "丸ノ内線" }
    ]
  },
  "四ツ谷": {
    nameKana: "よつや",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "丸ノ内線" },
      { toOperator: "東京メトロ", toLine: "南北線" }
    ]
  },
  "中野": {
    nameKana: "なかの",
    interchanges: [
      { toOperator: "東京メトロ", toLine: "東西線" }
    ]
  },
  "立川": {
    nameKana: "たちかわ",
    interchanges: [
      { toOperator: "多摩都市モノレール", toLine: "多摩都市モノレール線" }
    ]
  },
  "八王子": {
    nameKana: "はちおうじ",
    interchanges: [
      { toOperator: "京王", toLine: "京王線", toStationName: "京王八王子" }
    ]
  }
});
