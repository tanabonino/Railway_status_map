// 路線別メタデータ: 水戸線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "小山": {
    nameKana: "おやま",
    interchanges: [
      { toOperator: "JR東日本", toLine: "東北本線（宇都宮線）" },
      { toOperator: "JR東日本", toLine: "両毛線" },
      { toOperator: "JR東日本", toLine: "東北新幹線" }
    ]
  },
  "小田林": { nameKana: "おたばやし" },
  "結城": { nameKana: "ゆうき" },
  "東結城": { nameKana: "ひがしゆうき" },
  "川島": { nameKana: "かわしま" },
  "玉戸": { nameKana: "たまど" },
  "下館": {
    nameKana: "しもだて",
    interchanges: [
      { toOperator: "関東鉄道", toLine: "常総線" },
      { toOperator: "真岡鐵道", toLine: "真岡線" }
    ]
  },
  "新治": { nameKana: "にいはり" },
  "大和": { nameKana: "やまと" },
  "岩瀬": { nameKana: "いわせ" },
  "羽黒": { nameKana: "はぐろ" },
  "福原": { nameKana: "ふくはら" },
  "稲田": { nameKana: "いなだ" },
  "笠間": { nameKana: "かさま" },
  "宍戸": { nameKana: "ししど" },
  "友部": {
    nameKana: "ともべ",
    interchanges: [
      { toOperator: "JR東日本", toLine: "常磐線" }
    ]
  }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:mito": {
    area: "関東",
    operator: "JR東日本",
    lineName: "水戸線",
    lineNameKana: "みとせん",
    scope: "水戸支社",
    directionGroups: ["常磐方面"],
    stations: [
      { name: "小山" }, { name: "小田林" }, { name: "結城" }, { name: "東結城" }, { name: "川島" },
      { name: "玉戸" }, { name: "下館" }, { name: "新治" }, { name: "大和" }, { name: "岩瀬" },
      { name: "羽黒" }, { name: "福原" }, { name: "稲田" }, { name: "笠間" }, { name: "宍戸" }, { name: "友部" }
    ]
  }
});
