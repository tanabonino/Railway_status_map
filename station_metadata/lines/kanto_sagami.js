// 路線別メタデータ: 相模線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "茅ケ崎": {"nameKana":"ちがさき"},
  "北茅ケ崎": {"nameKana":"きたちがさき"},
  "香川": {"nameKana":"かがわ"},
  "寒川": {"nameKana":"さむかわ"},
  "宮山": {"nameKana":"みややま"},
  "倉見": {"nameKana":"くらみ"},
  "門沢橋": {"nameKana":"かどさわばし"},
  "社家": {"nameKana":"しゃけ"},
  "厚木": {"nameKana":"あつぎ","interchanges":[{"toOperator":"小田急","toLine":"小田原線"}]},
  "海老名": {"nameKana":"えびな","interchanges":[{"toOperator":"小田急","toLine":"小田原線"},{"toOperator":"相鉄","toLine":"本線"}]},
  "入谷": {"nameKana":"いりや"},
  "相武台下": {"nameKana":"そうぶだいした"},
  "下溝": {"nameKana":"しもみぞ"},
  "原当麻": {"nameKana":"はらたいま"},
  "番田": {"nameKana":"ばんだ"},
  "上溝": {"nameKana":"かみみぞ"},
  "南橋本": {"nameKana":"みなみはしもと"},
  "橋本": {"nameKana":"はしもと","interchanges":[{"toOperator":"京王","toLine":"相模原線"}]}
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:sagami": {
    area: "関東",
    operator: "JR東日本",
    lineName: "相模線",
    lineNameKana: "さがみせん",
    scope: "横浜支社",
    routeSymbol: "JI",
    directionGroups: ["東海道方面"],
    stations: [
      { name: "茅ケ崎" }, { name: "北茅ケ崎" }, { name: "香川" }, { name: "寒川" }, { name: "宮山" },
      { name: "倉見" }, { name: "門沢橋" }, { name: "社家" }, { name: "厚木" }, { name: "海老名" },
      { name: "入谷" }, { name: "相武台下" }, { name: "下溝" }, { name: "原当麻" }, { name: "番田" },
      { name: "上溝" }, { name: "南橋本" }, { name: "橋本" }
    ]
  }
});
