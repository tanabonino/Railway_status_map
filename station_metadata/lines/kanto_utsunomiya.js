// 路線別メタデータ: 宇都宮線（関東）
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
  "蓮田": { nameKana: "はすだ" },
  "久喜": { nameKana: "くき", interchanges: [{ toOperator: "東武", toLine: "伊勢崎線" }] },
  "古河": { nameKana: "こが" },
  "小山": { nameKana: "おやま" },
  "自治医大": { nameKana: "じちいだい" },
  "石橋": { nameKana: "いしばし" },
  "雀宮": { nameKana: "すずめのみや" },
  "宇都宮": { nameKana: "うつのみや", interchanges: [{ toOperator: "宇都宮ライトレール", toLine: "宇都宮芳賀ライトレール線" }] }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:utsunomiya": {
    area: "関東",
    operator: "JR東日本",
    lineName: "宇都宮線",
    lineNameKana: "うつのみやせん",
    scope: "大宮支社",
    routeSymbol: "JU",
    directionGroups: ["東北・高崎方面"],
    stations: [
      { name: "東京" }, { name: "上野" }, { name: "尾久" }, { name: "赤羽" }, { name: "浦和" },
      { name: "さいたま新都心" }, { name: "大宮" }, { name: "蓮田" }, { name: "久喜" }, { name: "古河" },
      { name: "小山" }, { name: "自治医大" }, { name: "石橋" }, { name: "雀宮" }, { name: "宇都宮" }
    ]
  }
});
