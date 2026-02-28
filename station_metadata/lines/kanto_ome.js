// 路線別メタデータ: 青梅線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "立川": {
    nameKana: "たちかわ",
    interchanges: [
      { toOperator: "JR東日本", toLine: "中央線" },
      { toOperator: "JR東日本", toLine: "南武線" }
    ]
  },
  "西立川": { nameKana: "にしたちかわ" },
  "東中神": { nameKana: "ひがしなかがみ" },
  "中神": { nameKana: "なかがみ" },
  "昭島": { nameKana: "あきしま" },
  "拝島": {
    nameKana: "はいじま",
    interchanges: [
      { toOperator: "JR東日本", toLine: "八高線" },
      { toOperator: "西武鉄道", toLine: "拝島線" }
    ]
  },
  "牛浜": { nameKana: "うしはま" },
  "福生": { nameKana: "ふっさ" },
  "羽村": { nameKana: "はむら" },
  "小作": { nameKana: "おざく" },
  "河辺": { nameKana: "かべ" },
  "東青梅": { nameKana: "ひがしおうめ" },
  "青梅": { nameKana: "おうめ" },
  "宮ノ平": { nameKana: "みやのひら" },
  "日向和田": { nameKana: "ひなたわだ" },
  "石神前": { nameKana: "いしがみまえ" },
  "二俣尾": { nameKana: "ふたまたお" },
  "軍畑": { nameKana: "いくさばた" },
  "沢井": { nameKana: "さわい" },
  "御嶽": { nameKana: "みたけ" },
  "川井": { nameKana: "かわい" },
  "古里": { nameKana: "こり" },
  "鳩ノ巣": { nameKana: "はとのす" },
  "白丸": { nameKana: "しろまる" },
  "奥多摩": { nameKana: "おくたま" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:ome": {
    area: "関東",
    operator: "JR東日本",
    lineName: "青梅線",
    lineNameKana: "おうめせん",
    scope: "八王子支社",
    directionGroups: ["中央方面"],
    stations: [
      { name: "立川" }, { name: "西立川" }, { name: "東中神" }, { name: "中神" }, { name: "昭島" },
      { name: "拝島" }, { name: "牛浜" }, { name: "福生" }, { name: "羽村" }, { name: "小作" },
      { name: "河辺" }, { name: "東青梅" }, { name: "青梅" }, { name: "宮ノ平" }, { name: "日向和田" },
      { name: "石神前" }, { name: "二俣尾" }, { name: "軍畑" }, { name: "沢井" }, { name: "御嶽" },
      { name: "川井" }, { name: "古里" }, { name: "鳩ノ巣" }, { name: "白丸" }, { name: "奥多摩" }
    ]
  }
});
