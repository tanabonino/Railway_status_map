// 路線別メタデータ: 水郡線（関東）
window.stationMetadataChunks = window.stationMetadataChunks || {};
window.railwayLineFileChunks = window.railwayLineFileChunks || {};
Object.assign(window.stationMetadataChunks, {
  "水戸": {
    nameKana: "みと",
    interchanges: [
      { toOperator: "JR東日本", toLine: "常磐線" },
      { toOperator: "鹿島臨海鉄道", toLine: "大洗鹿島線" }
    ]
  },
  "常陸青柳": { nameKana: "ひたちあおやぎ" },
  "常陸津田": { nameKana: "ひたちつだ" },
  "後台": { nameKana: "ごだい" },
  "下菅谷": { nameKana: "しもすがや" },
  "中菅谷": { nameKana: "なかすがや" },
  "上菅谷": { nameKana: "かみすがや" },
  "常陸鴻巣": { nameKana: "ひたちこうのす" },
  "常陸大宮": { nameKana: "ひたちおおみや" },
  "玉川村": { nameKana: "たまがわむら" },
  "野上原": { nameKana: "のがみはら" },
  "山方宿": { nameKana: "やまがたじゅく" },
  "中舟生": { nameKana: "なかふにゅう" },
  "下小川": { nameKana: "しもおがわ" },
  "西金": { nameKana: "さいがね" },
  "上小川": { nameKana: "かみおがわ" },
  "袋田": { nameKana: "ふくろだ" },
  "常陸大子": { nameKana: "ひたちだいご" },
  "下野宮": { nameKana: "しものみや" },
  "矢祭山": { nameKana: "やまつりやま" },
  "東館": { nameKana: "ひがしだて" },
  "南石井": { nameKana: "みなみいしい" },
  "磐城石井": { nameKana: "いわきいしい" },
  "磐城塙": { nameKana: "いわきはなわ" },
  "近津": { nameKana: "ちかつ" },
  "中豊": { nameKana: "なかとよ" },
  "磐城棚倉": { nameKana: "いわきたなぐら" },
  "磐城浅川": { nameKana: "いわきあさかわ" },
  "里白石": { nameKana: "さとしらいし" },
  "磐城石川": { nameKana: "いわきいしかわ" },
  "野木沢": { nameKana: "のぎさわ" },
  "川東": { nameKana: "かわひがし" },
  "小塩江": { nameKana: "おしおえ" },
  "谷田川": { nameKana: "やたがわ" },
  "磐城守山": { nameKana: "いわきもりやま" },
  "安積永盛": {
    nameKana: "あさかながもり",
    interchanges: [
      { toOperator: "JR東日本", toLine: "東北本線" }
    ]
  },
  "郡山": {
    nameKana: "こおりやま",
    interchanges: [
      { toOperator: "JR東日本", toLine: "東北本線" },
      { toOperator: "JR東日本", toLine: "東北新幹線" },
      { toOperator: "JR東日本", toLine: "磐越西線" },
      { toOperator: "JR東日本", toLine: "磐越東線" }
    ]
  },
  "南酒出": { nameKana: "みなみさかいで" },
  "額田": { nameKana: "ぬかだ" },
  "河合": { nameKana: "かわい" },
  "谷河原": { nameKana: "やがわら" },
  "常陸太田": { nameKana: "ひたちおおた" }
});

Object.assign(window.railwayLineFileChunks, {
  "kanto:suigun": {
    area: "関東",
    operator: "JR東日本",
    lineName: "水郡線",
    lineNameKana: "すいぐんせん",
    scope: "水戸支社",
    directionGroups: ["常磐方面"],
    stations: [
      { name: "水戸" }, { name: "常陸青柳" }, { name: "常陸津田" }, { name: "後台" }, { name: "下菅谷" },
      { name: "中菅谷" }, { name: "上菅谷" }, { name: "常陸鴻巣" }, { name: "常陸大宮" }, { name: "玉川村" },
      { name: "野上原" }, { name: "山方宿" }, { name: "中舟生" }, { name: "下小川" }, { name: "西金" },
      { name: "上小川" }, { name: "袋田" }, { name: "常陸大子" }, { name: "下野宮" }, { name: "矢祭山" },
      { name: "東館" }, { name: "南石井" }, { name: "磐城石井" }, { name: "磐城塙" }, { name: "近津" },
      { name: "中豊" }, { name: "磐城棚倉" }, { name: "磐城浅川" }, { name: "里白石" }, { name: "磐城石川" },
      { name: "野木沢" }, { name: "川東" }, { name: "小塩江" }, { name: "谷田川" }, { name: "磐城守山" },
      { name: "安積永盛" }, { name: "郡山" }, { name: "上菅谷" }, { name: "南酒出" }, { name: "額田" },
      { name: "河合" }, { name: "谷河原" }, { name: "常陸太田" }
    ]
  }
});
