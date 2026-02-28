// 路線別メタデータ: 中央線快速電車（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "東京": { nameKana: "とうきょう", interchanges: [{ toOperator: "東京メトロ", toLine: "丸ノ内線" }] },
  "神田": { nameKana: "かんだ", interchanges: [{ toOperator: "東京メトロ", toLine: "銀座線" }] },
  "御茶ノ水": { nameKana: "おちゃのみず", interchanges: [{ toOperator: "東京メトロ", toLine: "丸ノ内線" }] },
  "四ツ谷": { nameKana: "よつや", interchanges: [{ toOperator: "東京メトロ", toLine: "丸ノ内線" }, { toOperator: "東京メトロ", toLine: "南北線" }] },
  "新宿": { nameKana: "しんじゅく", interchanges: [{ toOperator: "東京メトロ", toLine: "丸ノ内線" }, { toOperator: "都営", toLine: "新宿線" }, { toOperator: "都営", toLine: "大江戸線" }, { toOperator: "小田急", toLine: "小田原線" }, { toOperator: "京王", toLine: "京王線" }] },
  "中野": { nameKana: "なかの", interchanges: [{ toOperator: "東京メトロ", toLine: "東西線" }] },
  "荻窪": { nameKana: "おぎくぼ", interchanges: [{ toOperator: "東京メトロ", toLine: "丸ノ内線" }] },
  "吉祥寺": { nameKana: "きちじょうじ", interchanges: [{ toOperator: "京王", toLine: "井の頭線" }] },
  "三鷹": { nameKana: "みたか" },
  "国分寺": { nameKana: "こくぶんじ", interchanges: [{ toOperator: "西武", toLine: "国分寺線" }, { toOperator: "西武", toLine: "多摩湖線" }] },
  "立川": { nameKana: "たちかわ", interchanges: [{ toOperator: "多摩都市モノレール", toLine: "多摩都市モノレール線" }] },
  "八王子": { nameKana: "はちおうじ", interchanges: [{ toOperator: "京王", toLine: "京王線", toStationName: "京王八王子" }] },
  "西八王子": { nameKana: "にしはちおうじ" },
  "高尾": { nameKana: "たかお", interchanges: [{ toOperator: "京王", toLine: "高尾線" }] }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:chuo_rapid": {
    area: "関東",
    operator: "JR東日本",
    lineName: "中央線快速電車",
    lineNameKana: "ちゅうおうせんかいそくでんしゃ",
    scope: "東京支社",
    routeSymbol: "JC",
    directionGroups: ["中央方面"],
    stations: [
      { name: "東京" }, { name: "神田" }, { name: "御茶ノ水" }, { name: "四ツ谷" }, { name: "新宿" },
      { name: "中野" }, { name: "荻窪" }, { name: "吉祥寺" }, { name: "三鷹" }, { name: "国分寺" },
      { name: "立川" }, { name: "八王子" }, { name: "西八王子" }, { name: "高尾" }
    ]
  }
});
