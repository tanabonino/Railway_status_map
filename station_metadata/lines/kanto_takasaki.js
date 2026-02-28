// 路線別メタデータ: 高崎線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "東京": { nameKana: "とうきょう", interchanges: [{ toOperator: "東京メトロ", toLine: "丸ノ内線" }] },
  "上野": { nameKana: "うえの", interchanges: [{ toOperator: "東京メトロ", toLine: "銀座線" }, { toOperator: "東京メトロ", toLine: "日比谷線" }] },
  "尾久": { nameKana: "おく" },
  "赤羽": { nameKana: "あかばね" },
  "浦和": { nameKana: "うらわ" },
  "さいたま新都心": { nameKana: "さいたましんとしん" },
  "大宮": { nameKana: "おおみや", interchanges: [{ toOperator: "東武", toLine: "野田線" }, { toOperator: "埼玉新都市交通", toLine: "伊奈線" }] },
  "宮原": { nameKana: "みやはら" },
  "上尾": { nameKana: "あげお" },
  "北上尾": { nameKana: "きたあげお" },
  "桶川": { nameKana: "おけがわ" },
  "鴻巣": { nameKana: "こうのす" },
  "熊谷": { nameKana: "くまがや", interchanges: [{ toOperator: "秩父鉄道", toLine: "秩父本線" }] },
  "籠原": { nameKana: "かごはら" },
  "深谷": { nameKana: "ふかや" },
  "本庄": { nameKana: "ほんじょう" },
  "新町": { nameKana: "しんまち" },
  "倉賀野": { nameKana: "くらがの" },
  "高崎": { nameKana: "たかさき", interchanges: [{ toOperator: "上信電鉄", toLine: "上信線" }] }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:takasaki": {
    area: "関東",
    operator: "JR東日本",
    lineName: "高崎線",
    lineNameKana: "たかさきせん",
    scope: "高崎支社",
    routeSymbol: "JU",
    directionGroups: ["東北・高崎方面"],
    stations: [
      { name: "東京" }, { name: "上野" }, { name: "尾久" }, { name: "赤羽" }, { name: "浦和" },
      { name: "さいたま新都心" }, { name: "大宮" }, { name: "宮原" }, { name: "上尾" }, { name: "北上尾" },
      { name: "桶川" }, { name: "鴻巣" }, { name: "熊谷" }, { name: "籠原" }, { name: "深谷" },
      { name: "本庄" }, { name: "新町" }, { name: "倉賀野" }, { name: "高崎" }
    ]
  }
});
