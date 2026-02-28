// 路線別メタデータ: 横浜線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "東神奈川": {"nameKana":"ひがしかながわ","interchanges":[{"toOperator":"京急","toLine":"本線","toStationName":"京急東神奈川"}]},
  "大口": {"nameKana":"おおぐち"},
  "菊名": {"nameKana":"きくな","interchanges":[{"toOperator":"東急","toLine":"東横線"}]},
  "新横浜": {"nameKana":"しんよこはま","interchanges":[{"toOperator":"横浜市営地下鉄","toLine":"ブルーライン"},{"toOperator":"相鉄","toLine":"相鉄新横浜線"},{"toOperator":"東急","toLine":"新横浜線"}]},
  "小机": {"nameKana":"こづくえ"},
  "鴨居": {"nameKana":"かもい"},
  "中山": {"nameKana":"なかやま","interchanges":[{"toOperator":"横浜市営地下鉄","toLine":"グリーンライン"}]},
  "十日市場": {"nameKana":"とおかいちば"},
  "長津田": {"nameKana":"ながつた","interchanges":[{"toOperator":"東急","toLine":"田園都市線"},{"toOperator":"東急","toLine":"こどもの国線"}]},
  "成瀬": {"nameKana":"なるせ"},
  "町田": {"nameKana":"まちだ","interchanges":[{"toOperator":"小田急","toLine":"小田原線"}]},
  "古淵": {"nameKana":"こぶち"},
  "淵野辺": {"nameKana":"ふちのべ"},
  "矢部": {"nameKana":"やべ"},
  "相模原": {"nameKana":"さがみはら"},
  "橋本": {"nameKana":"はしもと","interchanges":[{"toOperator":"京王","toLine":"相模原線"}]},
  "相原": {"nameKana":"あいはら"},
  "八王子みなみ野": {"nameKana":"はちおうじみなみの"},
  "片倉": {"nameKana":"かたくら"},
  "八王子": {"nameKana":"はちおうじ","interchanges":[{"toOperator":"京王","toLine":"京王線","toStationName":"京王八王子"}]}
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:yokohama": {
    area: "関東",
    operator: "JR東日本",
    lineName: "横浜線",
    lineNameKana: "よこはません",
    scope: "八王子支社",
    routeSymbol: "JH",
    directionGroups: ["東海道方面"],
    stations: [
      { name: "東神奈川" }, { name: "大口" }, { name: "菊名" }, { name: "新横浜" }, { name: "小机" },
      { name: "鴨居" }, { name: "中山" }, { name: "十日市場" }, { name: "長津田" }, { name: "成瀬" },
      { name: "町田" }, { name: "古淵" }, { name: "淵野辺" }, { name: "矢部" }, { name: "相模原" },
      { name: "橋本" }, { name: "相原" }, { name: "八王子みなみ野" }, { name: "片倉" }, { name: "八王子" }
    ]
  }
});
