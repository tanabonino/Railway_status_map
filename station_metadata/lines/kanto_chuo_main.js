// 路線別メタデータ: 中央本線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "新宿": { nameKana: "しんじゅく", interchanges: [{ toOperator: "東京メトロ", toLine: "丸ノ内線" }, { toOperator: "都営", toLine: "新宿線" }, { toOperator: "都営", toLine: "大江戸線" }, { toOperator: "小田急", toLine: "小田原線" }, { toOperator: "京王", toLine: "京王線" }] },
  "立川": { nameKana: "たちかわ", interchanges: [{ toOperator: "多摩都市モノレール", toLine: "多摩都市モノレール線" }] },
  "八王子": { nameKana: "はちおうじ", interchanges: [{ toOperator: "京王", toLine: "京王線", toStationName: "京王八王子" }] },
  "高尾": { nameKana: "たかお", interchanges: [{ toOperator: "京王", toLine: "高尾線" }] },
  "大月": { nameKana: "おおつき", interchanges: [{ toOperator: "富士急行", toLine: "大月線" }] },
  "甲府": { nameKana: "こうふ" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:chuo_main": {
    area: "関東",
    operator: "JR東日本",
    lineName: "中央本線",
    lineNameKana: "ちゅうおうほんせん",
    scope: "東京支社",
    directionGroups: ["中央方面"],
    stations: [
      { name: "新宿" }, { name: "立川" }, { name: "八王子" }, { name: "高尾" }, { name: "大月" }, { name: "甲府" }
    ]
  }
});
