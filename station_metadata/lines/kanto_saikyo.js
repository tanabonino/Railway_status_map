// 路線別メタデータ: 埼京線（関東）
// 上り（大宮→大崎）/下り（大崎→大宮）

window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "大崎": { nameKana: "おおさき", interchanges: [{ toOperator: "JR東日本", toLine: "山手線" }, { toOperator: "JR東日本", toLine: "湘南新宿ライン" }, { toOperator: "東京臨海高速鉄道", toLine: "りんかい線", toStationName: "直通例あり" }] },
  "恵比寿": { nameKana: "えびす", interchanges: [{ toOperator: "JR東日本", toLine: "山手線" }] },
  "渋谷": { nameKana: "しぶや", interchanges: [{ toOperator: "JR東日本", toLine: "山手線" }, { toOperator: "JR東日本", toLine: "湘南新宿ライン" }] },
  "新宿": { nameKana: "しんじゅく", interchanges: [{ toOperator: "JR東日本", toLine: "山手線" }, { toOperator: "JR東日本", toLine: "中央線" }, { toOperator: "JR東日本", toLine: "中央・総武緩行線" }, { toOperator: "JR東日本", toLine: "湘南新宿ライン" }, { toOperator: "JR東日本", toLine: "他各線" }, { toOperator: "京王電鉄", toLine: "京王線" }, { toOperator: "小田急電鉄", toLine: "小田原線" }, { toOperator: "西武鉄道", toLine: "西武新宿線" }, { toOperator: "東京メトロ", toLine: "各線" }] },
  "池袋": { nameKana: "いけぶくろ", interchanges: [{ toOperator: "JR東日本", toLine: "山手線" }, { toOperator: "東京メトロ", toLine: "各線" }, { toOperator: "東武鉄道", toLine: "東上線" }, { toOperator: "西武鉄道", toLine: "池袋線" }] },
  "板橋": { nameKana: "いたばし" },
  "十条": { nameKana: "じゅうじょう" },
  "赤羽": { nameKana: "あかばね", interchanges: [{ toOperator: "JR東日本", toLine: "京浜東北線" }, { toOperator: "JR東日本", toLine: "高崎線" }, { toOperator: "JR東日本", toLine: "宇都宮線" }] },
  "北赤羽": { nameKana: "きたあかばね" },
  "浮間舟渡": { nameKana: "うきまふなと" },
  "戸田公園": { nameKana: "とだこうえん" },
  "戸田": { nameKana: "とだ" },
  "北戸田": { nameKana: "きたとだ" },
  "武蔵浦和": { nameKana: "むさしうらわ", interchanges: [{ toOperator: "JR東日本", toLine: "武蔵野線" }] },
  "中浦和": { nameKana: "なかうらわ" },
  "南与野": { nameKana: "みなみよの" },
  "与野本町": { nameKana: "よのほんまち" },
  "さいたま新都心": { nameKana: "さいたましんとしん" },
  "大宮": { nameKana: "おおみや", interchanges: [{ toOperator: "JR東日本", toLine: "東北線" }, { toOperator: "JR東日本", toLine: "高崎線" }, { toOperator: "JR東日本", toLine: "宇都宮線" }, { toOperator: "JR東日本", toLine: "京浜東北線" }, { toOperator: "JR東日本", toLine: "川越線" }, { toOperator: "JR東日本", toLine: "他多数" }] }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:saikyo": {
    area: "関東",
    operator: "JR東日本",
    lineName: "埼京線",
    lineNameKana: "さいきょうせん",
    scope: "東京支社",
    routeSymbol: "JA",
    directionGroups: ["東北・高崎方面"],
    stations: [
      { name: "大崎" }, { name: "恵比寿" }, { name: "渋谷" }, { name: "新宿" }, { name: "池袋" },
      { name: "板橋" }, { name: "十条" }, { name: "赤羽" }, { name: "北赤羽" }, { name: "浮間舟渡" },
      { name: "戸田公園" }, { name: "戸田" }, { name: "北戸田" }, { name: "武蔵浦和" }, { name: "中浦和" },
      { name: "南与野" }, { name: "与野本町" }, { name: "さいたま新都心" }, { name: "大宮" }
    ]
  }
});
