// 路線別メタデータ: 鶴見線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "鶴見": {"nameKana":"つるみ","interchanges":[{"toOperator":"京急","toLine":"本線","toStationName":"京急鶴見"}]},
  "国道": {"nameKana":"こくどう"},
  "鶴見小野": {"nameKana":"つるみおの"},
  "弁天橋": {"nameKana":"べんてんばし"},
  "浅野": {"nameKana":"あさの"},
  "安善": {"nameKana":"あんぜん"},
  "武蔵白石": {"nameKana":"むさししらいし"},
  "浜川崎": {"nameKana":"はまかわさき"},
  "昭和": {"nameKana":"しょうわ"},
  "扇町": {"nameKana":"おうぎまち"},
  "新芝浦": {"nameKana":"しんしばうら"},
  "海芝浦": {"nameKana":"うみしばうら"},
  "大川": {"nameKana":"おおかわ"}
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:tsurumi": {
    area: "関東",
    operator: "JR東日本",
    lineName: "鶴見線",
    lineNameKana: "つるみせん",
    scope: "横浜支社",
    directionGroups: ["東海道方面"],
    stations: [
      { name: "鶴見" }, { name: "国道" }, { name: "鶴見小野" }, { name: "弁天橋" }, { name: "浅野" },
      { name: "安善" }, { name: "武蔵白石" }, { name: "浜川崎" }, { name: "昭和" }, { name: "扇町" },
      { name: "新芝浦" }, { name: "海芝浦" }, { name: "大川" }
    ]
  }
});
