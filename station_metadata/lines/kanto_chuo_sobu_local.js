// 路線別メタデータ: 中央・総武各駅停車（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
Object.assign(window.stationMetadataChunks, {
  "三鷹": { nameKana: "みたか" },
  "中野": { nameKana: "なかの", interchanges: [{ toOperator: "東京メトロ", toLine: "東西線" }] },
  "新宿": { nameKana: "しんじゅく", interchanges: [{ toOperator: "東京メトロ", toLine: "丸ノ内線" }, { toOperator: "都営", toLine: "新宿線" }, { toOperator: "都営", toLine: "大江戸線" }, { toOperator: "小田急", toLine: "小田原線" }, { toOperator: "京王", toLine: "京王線" }] },
  "四ツ谷": { nameKana: "よつや", interchanges: [{ toOperator: "東京メトロ", toLine: "丸ノ内線" }, { toOperator: "東京メトロ", toLine: "南北線" }] },
  "御茶ノ水": { nameKana: "おちゃのみず", interchanges: [{ toOperator: "東京メトロ", toLine: "丸ノ内線" }] },
  "秋葉原": { nameKana: "あきはばら", interchanges: [{ toOperator: "東京メトロ", toLine: "日比谷線" }, { toOperator: "つくばエクスプレス", toLine: "常磐新線" }] },
  "錦糸町": { nameKana: "きんしちょう", interchanges: [{ toOperator: "東京メトロ", toLine: "半蔵門線" }] },
  "亀戸": { nameKana: "かめいど", interchanges: [{ toOperator: "東武", toLine: "亀戸線" }] },
  "平井": { nameKana: "ひらい" },
  "新小岩": { nameKana: "しんこいわ" },
  "小岩": { nameKana: "こいわ" },
  "市川": { nameKana: "いちかわ" },
  "本八幡": { nameKana: "もとやわた", interchanges: [{ toOperator: "都営", toLine: "新宿線" }, { toOperator: "京成", toLine: "本線", toStationName: "京成八幡" }] },
  "下総中山": { nameKana: "しもうさなかやま" },
  "西船橋": { nameKana: "にしふなばし", interchanges: [{ toOperator: "東京メトロ", toLine: "東西線" }, { toOperator: "東葉高速鉄道", toLine: "東葉高速線" }] }
});
