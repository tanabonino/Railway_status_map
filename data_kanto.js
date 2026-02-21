// 関東エリア路線データ
window.railwayLinesDataChunks = window.railwayLinesDataChunks || {};
Object.assign(window.railwayLinesDataChunks, {
  "kanto:yamanote": { area: "関東", lineName: "山手線", scope: "東京支社", stations: [{ name: "東京" }, { name: "有楽町" }, { name: "新橋" }, { name: "浜松町" }, { name: "田町" }, { name: "高輪ゲートウェイ" }, { name: "品川" }, { name: "大崎" }, { name: "五反田" }, { name: "目黒" }, { name: "恵比寿" }, { name: "渋谷" }, { name: "原宿" }, { name: "代々木" }, { name: "新宿" }, { name: "新大久保" }, { name: "高田馬場" }, { name: "目白" }, { name: "池袋" }, { name: "大塚" }, { name: "巣鴨" }, { name: "駒込" }, { name: "田端" }, { name: "西日暮里" }, { name: "日暮里" }, { name: "鶯谷" }, { name: "上野" }, { name: "御徒町" }, { name: "秋葉原" }, { name: "神田" }] },
  "kanto:ueno_tokyo_utsunomiya": { area: "関東", lineName: "上野東京ライン", scope: "宇都宮線系統", stations: [{ name: "東京" }, { name: "上野" }, { name: "赤羽" }, { name: "大宮" }, { name: "久喜" }, { name: "小山" }, { name: "宇都宮" }] },
  "kanto:ueno_tokyo_takasaki": { area: "関東", lineName: "上野東京ライン", scope: "高崎線系統", stations: [{ name: "東京" }, { name: "上野" }, { name: "赤羽" }, { name: "大宮" }, { name: "桶川" }, { name: "熊谷" }, { name: "高崎" }] },
  "kanto:shonan_shinjuku_utsunomiya": { area: "関東", lineName: "湘南新宿ライン", scope: "宇都宮線系統", stations: [{ name: "宇都宮" }, { name: "小山" }, { name: "久喜" }, { name: "大宮" }, { name: "赤羽" }, { name: "池袋" }, { name: "新宿" }, { name: "渋谷" }, { name: "大崎" }, { name: "武蔵小杉" }, { name: "横浜" }, { name: "戸塚" }, { name: "大船" }, { name: "鎌倉" }, { name: "逗子" }] },
  "kanto:shonan_shinjuku_takasaki": { area: "関東", lineName: "湘南新宿ライン", scope: "高崎線系統", stations: [{ name: "高崎" }, { name: "熊谷" }, { name: "桶川" }, { name: "大宮" }, { name: "赤羽" }, { name: "池袋" }, { name: "新宿" }, { name: "渋谷" }, { name: "大崎" }, { name: "武蔵小杉" }, { name: "横浜" }, { name: "戸塚" }, { name: "大船" }, { name: "藤沢" }, { name: "平塚" }, { name: "小田原" }] },
  "kanto:sotetsu_direct": { area: "関東", lineName: "相鉄線直通列車", scope: "直通", stations: [{ name: "新宿" }, { name: "大崎" }, { name: "武蔵小杉" }] },

  "kanto:tokaido": { area: "関東", lineName: "東海道線", lineNameKana: "とうかいどうせん", scope: "横浜支社", stations: [{ name: "東京" }, { name: "新橋" }, { name: "品川" }, { name: "川崎" }, { name: "横浜" }, { name: "戸塚" }, { name: "大船" }, { name: "藤沢" }, { name: "辻堂" }, { name: "茅ケ崎" }, { name: "平塚" }, { name: "大磯" }, { name: "二宮" }, { name: "国府津" }, { name: "鴨宮" }, { name: "小田原" }, { name: "早川" }, { name: "根府川" }, { name: "真鶴" }, { name: "湯河原" }, { name: "熱海" }] },
  "kanto:keihin_tohoku_local": { area: "関東", lineName: "京浜東北線", lineNameKana: "けいひんとうほくせん", scope: "東京支社", stations: [{ name: "大宮" }, { name: "さいたま新都心" }, { name: "与野" }, { name: "北浦和" }, { name: "浦和" }, { name: "南浦和" }, { name: "蕨" }, { name: "西川口" }, { name: "川口" }, { name: "赤羽" }, { name: "東十条" }, { name: "王子" }, { name: "上中里" }, { name: "田端" }, { name: "西日暮里" }, { name: "日暮里" }, { name: "鶯谷" }, { name: "上野" }, { name: "御徒町" }, { name: "秋葉原" }, { name: "神田" }, { name: "東京" }, { name: "有楽町" }, { name: "新橋" }, { name: "浜松町" }, { name: "田町" }, { name: "高輪ゲートウェイ" }, { name: "品川" }, { name: "大井町" }, { name: "大森" }, { name: "蒲田" }, { name: "川崎" }, { name: "鶴見" }, { name: "新子安" }, { name: "東神奈川" }, { name: "横浜" }, { name: "桜木町" }, { name: "関内" }, { name: "石川町" }, { name: "山手" }, { name: "根岸" }, { name: "磯子" }, { name: "新杉田" }, { name: "洋光台" }, { name: "港南台" }, { name: "本郷台" }, { name: "大船" }] },
  "kanto:yokosuka": { area: "関東", lineName: "横須賀線", lineNameKana: "よこすかせん", scope: "横浜支社", stations: [{ name: "東京" }, { name: "新橋" }, { name: "品川" }, { name: "西大井" }, { name: "武蔵小杉" }, { name: "新川崎" }, { name: "横浜" }, { name: "保土ケ谷" }, { name: "東戸塚" }, { name: "戸塚" }, { name: "大船" }, { name: "北鎌倉" }, { name: "鎌倉" }, { name: "逗子" }, { name: "東逗子" }, { name: "田浦" }, { name: "横須賀" }, { name: "衣笠" }, { name: "久里浜" }] },
  "kanto:nambu": { area: "関東", lineName: "南武線", lineNameKana: "なんぶせん", scope: "横浜支社", stations: [{ name: "川崎" }, { name: "尻手" }, { name: "矢向" }, { name: "鹿島田" }, { name: "平間" }, { name: "向河原" }, { name: "武蔵小杉" }, { name: "武蔵中原" }, { name: "武蔵新城" }, { name: "武蔵溝ノ口" }, { name: "津田山" }, { name: "久地" }, { name: "宿河原" }, { name: "登戸" }, { name: "中野島" }, { name: "稲田堤" }, { name: "矢野口" }, { name: "稲城長沼" }, { name: "南多摩" }, { name: "府中本町" }, { name: "分倍河原" }, { name: "西府" }, { name: "谷保" }, { name: "矢川" }, { name: "西国立" }, { name: "立川" }] },
  "kanto:yokohama": { area: "関東", lineName: "横浜線", lineNameKana: "よこはません", scope: "八王子支社", stations: [{ name: "東神奈川" }, { name: "大口" }, { name: "菊名" }, { name: "新横浜" }, { name: "小机" }, { name: "鴨居" }, { name: "中山" }, { name: "十日市場" }, { name: "長津田" }, { name: "成瀬" }, { name: "町田" }, { name: "古淵" }, { name: "淵野辺" }, { name: "矢部" }, { name: "相模原" }, { name: "橋本" }, { name: "相原" }, { name: "八王子みなみ野" }, { name: "片倉" }, { name: "八王子" }] },
  "kanto:ito": { area: "関東", lineName: "伊東線", lineNameKana: "いとうせん", scope: "横浜支社", stations: [{ name: "熱海" }, { name: "来宮" }, { name: "伊豆多賀" }, { name: "網代" }, { name: "宇佐美" }, { name: "伊東" }] },
  "kanto:sagami": { area: "関東", lineName: "相模線", lineNameKana: "さがみせん", scope: "横浜支社", stations: [{ name: "茅ケ崎" }, { name: "北茅ケ崎" }, { name: "香川" }, { name: "寒川" }, { name: "宮山" }, { name: "倉見" }, { name: "門沢橋" }, { name: "社家" }, { name: "厚木" }, { name: "海老名" }, { name: "入谷" }, { name: "相武台下" }, { name: "下溝" }, { name: "原当麻" }, { name: "番田" }, { name: "上溝" }, { name: "南橋本" }, { name: "橋本" }] },
  "kanto:tsurumi": { area: "関東", lineName: "鶴見線", lineNameKana: "つるみせん", scope: "横浜支社", stations: [{ name: "鶴見" }, { name: "国道" }, { name: "鶴見小野" }, { name: "弁天橋" }, { name: "浅野" }, { name: "安善" }, { name: "武蔵白石" }, { name: "浜川崎" }, { name: "昭和" }, { name: "扇町" }, { name: "新芝浦" }, { name: "海芝浦" }, { name: "大川" }] },

  "kanto:utsunomiya": { area: "関東", lineName: "宇都宮線", scope: "大宮支社", stations: [{ name: "東京" }, { name: "上野" }, { name: "尾久" }, { name: "赤羽" }, { name: "浦和" }, { name: "さいたま新都心" }, { name: "大宮" }, { name: "蓮田" }, { name: "久喜" }, { name: "古河" }, { name: "小山" }, { name: "自治医大" }, { name: "石橋" }, { name: "雀宮" }, { name: "宇都宮" }] },
  "kanto:takasaki": { area: "関東", lineName: "高崎線", scope: "高崎支社", stations: [{ name: "東京" }, { name: "上野" }, { name: "尾久" }, { name: "赤羽" }, { name: "浦和" }, { name: "さいたま新都心" }, { name: "大宮" }, { name: "宮原" }, { name: "上尾" }, { name: "北上尾" }, { name: "桶川" }, { name: "鴻巣" }, { name: "熊谷" }, { name: "籠原" }, { name: "深谷" }, { name: "本庄" }, { name: "新町" }, { name: "倉賀野" }, { name: "高崎" }] },
  "kanto:saikyo": { area: "関東", lineName: "埼京線", scope: "東京支社", stations: [{ name: "大崎" }, { name: "恵比寿" }, { name: "渋谷" }, { name: "新宿" }, { name: "池袋" }, { name: "赤羽" }, { name: "武蔵浦和" }, { name: "大宮" }] },
  "kanto:kawagoe": { area: "関東", lineName: "川越線", scope: "大宮支社", stations: [{ name: "大宮" }, { name: "川越" }, { name: "高麗川" }] },
  "kanto:musashino": { area: "関東", lineName: "武蔵野線", scope: "関東本部", stations: [{ name: "府中本町" }, { name: "西国分寺" }, { name: "新秋津" }, { name: "南浦和" }, { name: "南越谷" }, { name: "南流山" }, { name: "新松戸" }, { name: "西船橋" }] },
  "kanto:joetsu_kanto": { area: "関東", lineName: "上越線", scope: "高崎支社", stations: [{ name: "高崎" }, { name: "新前橋" }, { name: "渋川" }, { name: "沼田" }, { name: "水上" }] },
  "kanto:shinetsu_kanto": { area: "関東", lineName: "信越本線", scope: "高崎支社", stations: [{ name: "高崎" }, { name: "安中" }, { name: "磯部" }, { name: "横川" }] },
  "kanto:agatsuma": { area: "関東", lineName: "吾妻線", scope: "高崎支社", stations: [{ name: "渋川" }, { name: "中之条" }, { name: "長野原草津口" }, { name: "万座・鹿沢口" }, { name: "大前" }] },
  "kanto:karasuyama": { area: "関東", lineName: "烏山線", scope: "大宮支社", stations: [{ name: "宝積寺" }, { name: "烏山" }] },
  "kanto:hachiko": { area: "関東", lineName: "八高線", scope: "八王子支社", stations: [{ name: "八王子" }, { name: "拝島" }, { name: "高麗川" }, { name: "寄居" }, { name: "高崎" }] },
  "kanto:nikko": { area: "関東", lineName: "日光線", scope: "大宮支社", stations: [{ name: "宇都宮" }, { name: "日光" }] },
  "kanto:ryomo": { area: "関東", lineName: "両毛線", scope: "高崎支社", stations: [{ name: "高崎" }, { name: "前橋" }, { name: "桐生" }, { name: "足利" }, { name: "小山" }] },

  "kanto:chuo_rapid": { area: "関東", lineName: "中央線快速電車", scope: "東京支社", stations: [{ name: "東京" }, { name: "神田" }, { name: "御茶ノ水" }, { name: "四ツ谷" }, { name: "新宿" }, { name: "中野" }, { name: "荻窪" }, { name: "吉祥寺" }, { name: "三鷹" }, { name: "国分寺" }, { name: "立川" }, { name: "八王子" }, { name: "西八王子" }, { name: "高尾" }] },
  "kanto:chuo_sobu_local": { area: "関東", lineName: "中央・総武各駅停車", scope: "東京支社", stations: [{ name: "三鷹" }, { name: "中野" }, { name: "新宿" }, { name: "四ツ谷" }, { name: "御茶ノ水" }, { name: "秋葉原" }, { name: "錦糸町" }, { name: "亀戸" }, { name: "平井" }, { name: "新小岩" }, { name: "小岩" }, { name: "市川" }, { name: "本八幡" }, { name: "下総中山" }, { name: "西船橋" }] },
  "kanto:chuo_main": { area: "関東", lineName: "中央本線", scope: "東京支社", stations: [{ name: "新宿" }, { name: "立川" }, { name: "八王子" }, { name: "高尾" }, { name: "大月" }, { name: "甲府" }] },
  "kanto:itsukaichi": { area: "関東", lineName: "五日市線", scope: "八王子支社", stations: [{ name: "拝島" }, { name: "武蔵五日市" }] },
  "kanto:ome": { area: "関東", lineName: "青梅線", scope: "八王子支社", stations: [{ name: "立川" }, { name: "拝島" }, { name: "青梅" }, { name: "奥多摩" }] },
  "kanto:koumi": { area: "関東", lineName: "小海線", scope: "八王子支社", stations: [{ name: "小淵沢" }, { name: "野辺山" }, { name: "小諸" }] },

  "kanto:joban": { area: "関東", lineName: "常磐線", scope: "水戸支社", stations: [{ name: "上野" }, { name: "日暮里" }, { name: "三河島" }, { name: "南千住" }, { name: "北千住" }, { name: "松戸" }, { name: "柏" }, { name: "我孫子" }, { name: "取手" }, { name: "藤代" }, { name: "龍ケ崎市" }, { name: "牛久" }, { name: "ひたち野うしく" }, { name: "荒川沖" }, { name: "土浦" }, { name: "石岡" }, { name: "友部" }, { name: "赤塚" }, { name: "水戸" }] },
  "kanto:joban_rapid": { area: "関東", lineName: "常磐線快速電車", scope: "東京支社", stations: [{ name: "品川" }, { name: "新橋" }, { name: "東京" }, { name: "上野" }, { name: "日暮里" }, { name: "北千住" }, { name: "松戸" }, { name: "柏" }, { name: "我孫子" }, { name: "取手" }] },
  "kanto:joban_local": { area: "関東", lineName: "常磐線各駅停車", scope: "東京支社", stations: [{ name: "綾瀬" }, { name: "亀有" }, { name: "金町" }, { name: "松戸" }, { name: "北松戸" }, { name: "馬橋" }, { name: "新松戸" }, { name: "北小金" }, { name: "南柏" }, { name: "柏" }, { name: "北柏" }, { name: "我孫子" }, { name: "天王台" }, { name: "取手" }] },
  "kanto:suigun": { area: "関東", lineName: "水郡線", scope: "水戸支社", stations: [{ name: "水戸" }, { name: "常陸大子" }, { name: "郡山" }] },
  "kanto:mito": { area: "関東", lineName: "水戸線", scope: "水戸支社", stations: [{ name: "小山" }, { name: "下館" }, { name: "友部" }] },

  "kanto:sobu_rapid": { area: "関東", lineName: "総武快速線", scope: "千葉支社", stations: [{ name: "東京" }, { name: "新橋" }, { name: "品川" }, { name: "錦糸町" }, { name: "新小岩" }, { name: "市川" }, { name: "船橋" }, { name: "津田沼" }, { name: "稲毛" }, { name: "千葉" }] },
  "kanto:sobu_main": { area: "関東", lineName: "総武本線", scope: "千葉支社", stations: [{ name: "千葉" }, { name: "佐倉" }, { name: "成東" }, { name: "八日市場" }, { name: "銚子" }] },
  "kanto:keiyo": { area: "関東", lineName: "京葉線", scope: "千葉支社", stations: [{ name: "東京" }, { name: "八丁堀" }, { name: "新木場" }, { name: "舞浜" }, { name: "新浦安" }, { name: "海浜幕張" }, { name: "蘇我" }] },
  "kanto:uchibo": { area: "関東", lineName: "内房線", scope: "千葉支社", stations: [{ name: "蘇我" }, { name: "浜野" }, { name: "八幡宿" }, { name: "五井" }, { name: "姉ケ崎" }, { name: "木更津" }, { name: "君津" }, { name: "富浦" }, { name: "那古船形" }, { name: "館山" }, { name: "千倉" }, { name: "安房鴨川" }] },
  "kanto:kashima": { area: "関東", lineName: "鹿島線", scope: "千葉支社", stations: [{ name: "佐原" }, { name: "十二橋" }, { name: "潮来" }, { name: "鹿島神宮" }] },
  "kanto:kururi": { area: "関東", lineName: "久留里線", scope: "千葉支社", stations: [{ name: "木更津" }, { name: "横田" }, { name: "久留里" }, { name: "上総亀山" }] },
  "kanto:sotobo": { area: "関東", lineName: "外房線", scope: "千葉支社", stations: [{ name: "千葉" }, { name: "蘇我" }, { name: "鎌取" }, { name: "誉田" }, { name: "土気" }, { name: "大網" }, { name: "茂原" }, { name: "上総一ノ宮" }, { name: "勝浦" }, { name: "安房鴨川" }] },
  "kanto:togane": { area: "関東", lineName: "東金線", scope: "千葉支社", stations: [{ name: "大網" }, { name: "東金" }, { name: "成東" }] },
  "kanto:narita": { area: "関東", lineName: "成田線", scope: "千葉支社", stations: [{ name: "千葉" }, { name: "成田" }, { name: "佐原" }, { name: "銚子" }] },

  "kanto:monorail": { area: "関東", lineName: "東京モノレール線", scope: "東京モノレール", stations: [{ name: "浜松町" }, { name: "天王洲アイル" }, { name: "大井競馬場前" }, { name: "流通センター" }, { name: "羽田空港第1ターミナル" }, { name: "羽田空港第2ターミナル" }] }
});









