// 路線別メタデータ: 南武線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "川崎": {"nameKana":"かわさき","interchanges":[{"toOperator":"京急","toLine":"本線","toStationName":"京急川崎"}]},
  "尻手": {"nameKana":"しって"},
  "矢向": {"nameKana":"やこう"},
  "鹿島田": {"nameKana":"かしまだ"},
  "平間": {"nameKana":"ひらま"},
  "向河原": {"nameKana":"むかいがわら"},
  "武蔵小杉": {"nameKana":"むさしこすぎ","interchanges":[{"toOperator":"東急","toLine":"東横線"},{"toOperator":"東急","toLine":"目黒線"}]},
  "武蔵中原": {"nameKana":"むさしなかはら"},
  "武蔵新城": {"nameKana":"むさししんじょう"},
  "武蔵溝ノ口": {"nameKana":"むさしみぞのくち","interchanges":[{"toOperator":"東急","toLine":"田園都市線","toStationName":"溝の口"},{"toOperator":"東急","toLine":"大井町線","toStationName":"溝の口"}]},
  "津田山": {"nameKana":"つだやま"},
  "久地": {"nameKana":"くじ"},
  "宿河原": {"nameKana":"しゅくがわら"},
  "登戸": {"nameKana":"のぼりと","interchanges":[{"toOperator":"小田急","toLine":"小田原線"}]},
  "中野島": {"nameKana":"なかのしま"},
  "稲田堤": {"nameKana":"いなだづつみ","interchanges":[{"toOperator":"京王","toLine":"相模原線","toStationName":"京王稲田堤"}]},
  "矢野口": {"nameKana":"やのくち"},
  "稲城長沼": {"nameKana":"いなぎながぬま"},
  "南多摩": {"nameKana":"みなみたま"},
  "府中本町": {"nameKana":"ふちゅうほんまち"},
  "分倍河原": {"nameKana":"ぶばいがわら","interchanges":[{"toOperator":"京王","toLine":"京王線"}]},
  "西府": {"nameKana":"にしふ"},
  "谷保": {"nameKana":"やほ"},
  "矢川": {"nameKana":"やがわ"},
  "西国立": {"nameKana":"にしくにたち"},
  "立川": {"nameKana":"たちかわ","interchanges":[{"toOperator":"多摩都市モノレール","toLine":"多摩都市モノレール線"}]}
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:nambu": {
    area: "関東",
    operator: "JR東日本",
    lineName: "南武線",
    lineNameKana: "なんぶせん",
    scope: "横浜支社",
    routeSymbol: "JN",
    directionGroups: ["東海道方面"],
    stations: [
      { name: "川崎" }, { name: "尻手" }, { name: "矢向" }, { name: "鹿島田" }, { name: "平間" },
      { name: "向河原" }, { name: "武蔵小杉" }, { name: "武蔵中原" }, { name: "武蔵新城" }, { name: "武蔵溝ノ口" },
      { name: "津田山" }, { name: "久地" }, { name: "宿河原" }, { name: "登戸" }, { name: "中野島" },
      { name: "稲田堤" }, { name: "矢野口" }, { name: "稲城長沼" }, { name: "南多摩" }, { name: "府中本町" },
      { name: "分倍河原" }, { name: "西府" }, { name: "谷保" }, { name: "矢川" }, { name: "西国立" }, { name: "立川" }
    ]
  }
});
