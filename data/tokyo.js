/**
 * @typedef {Object} Municipality
 * @property {Name} name
 * @property {Object} type
 * @property {string} subprefecture
 * @property {string} population
 * @property {string} code
*/

export const municipalityType = {
  ku: {
    name: {
      en: 'Special-Ward',
      ja: ['区'],
      furigana: ['く'],
    },
    color: '#DCB6F2',
  },
  shi: {
    name: {
      en: 'City',
      ja: ['市'],
      furigana: ['し'],
    },
    color: '#F6BAD3',
  },
  machi: {
    name: {
      en: 'Town',
      ja: ['町'],
      furigana: ['まち'],
    },
    color: '#ECE3B4',
  },
  mura: {
    name: {
      en: 'Village',
      ja: ['村'],
      furigana: ['むら'],
    },
    color: '#B6F2DC',
  },
}

const { ku, shi, machi, mura } = municipalityType;

/* @type {Municipality[]} */
export const tokyo = [
  {
    name: {
      en: 'Chiyoda',
      ja: ['千', '代', '田', '区'],
      furigana: ['ち', 'よ', 'だ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '59.441',
    code: '13101'
  },
  {
    name: {
      en: 'Chūō',
      ja: ['中', '央', '区'],
      furigana: ['ちゅう', 'おう', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '147.62',
    code: '13102'
  },
  {
    name: {
      en: 'Minato',
      ja: ['港', '区'],
      furigana: ['みなと', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '248.071',
    code: '13103'
  },
  {
    name: {
      en: 'Shinjuku',
      ja: ['新', '宿', '区'],
      furigana: ['しん', 'じゅく', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '339.211',
    code: '13104'
  },
  {
    name: {
      en: 'Bunkyō',
      ja: ['文', '京', '区'],
      furigana: ['ぶん', 'きょう', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '223.389',
    code: '13105'
  },
  {
    name: {
      en: 'Taitō',
      ja: ['台', '東', '区'],
      furigana: ['たい', 'とう', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '200.486',
    code: '13106'
  },
  {
    name: {
      en: 'Sumida',
      ja: ['墨', '田', '区'],
      furigana: ['すみ', 'だ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '260.358',
    code: '13107'
  },
  {
    name: {
      en: 'Kōtō',
      ja: ['江', '東', '区'],
      furigana: ['こう', 'とう', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '502.579',
    code: '13108'
  },
  {
    name: {
      en: 'Shinagawa',
      ja: ['品', '川', '区'],
      furigana: ['しな', 'がわ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '392.492',
    code: '13109'
  },
  {
    name: {
      en: 'Meguro',
      ja: ['目', '黒', '区'],
      furigana: ['め', 'ぐろ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '280.283',
    code: '13110'
  },
  {
    name: {
      en: 'Ōta',
      ja: ['大', '田', '区'],
      furigana: ['おお', 'た', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '722.608',
    code: '13111'
  },
  {
    name: {
      en: 'Setagaya',
      ja: ['世', '田', '谷', '区'],
      furigana: ['せ', 'た', 'がや', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '910.868',
    code: '13112'
  },
  {
    name: {
      en: 'Shibuya',
      ja: ['渋', '谷', '区'],
      furigana: ['しぶ', 'や', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '227.85',
    code: '13113'
  },
  {
    name: {
      en: 'Nakano',
      ja: ['中', '野', '区'],
      furigana: ['なか', 'の', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '332.902',
    code: '13114'
  },
  {
    name: {
      en: 'Suginami',
      ja: ['杉', '並', '区'],
      furigana: ['すぎ', 'なみ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '570.483',
    code: '13115'
  },
  {
    name: {
      en: 'Toshima',
      ja: ['豊', '島', '区'],
      furigana: ['とし', 'ま', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '294.673',
    code: '13116'
  },
  {
    name: {
      en: 'Kita',
      ja: ['北', '区'],
      furigana: ['きた', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '345.063',
    code: '13117'
  },
  {
    name: {
      en: 'Arakawa',
      ja: ['荒', '川', '区'],
      furigana: ['あら', 'かわ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '213.648',
    code: '13118'
  },
  {
    name: {
      en: 'Itabashi',
      ja: ['板', '橋', '区'],
      furigana: ['いた', 'ばし', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '569.225',
    code: '13119'
  },
  {
    name: {
      en: 'Nerima',
      ja: ['練', '馬', '区'],
      furigana: ['ねり', 'ま', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '726.748',
    code: '13120'
  },
  {
    name: {
      en: 'Adachi',
      ja: ['足', '立', '区'],
      furigana: ['あだ', 'ち', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '674.067',
    code: '13121'
  },
  {
    name: {
      en: 'Katsushika',
      ja: ['葛', '飾', '区'],
      furigana: ['かつ', 'しか', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '447.14',
    code: '13122'
  },
  {
    name: {
      en: 'Edogawa',
      ja: ['江', '戸川', '区'],
      furigana: ['え', 'ど', 'がわ', 'く'],
    },
    type: ku,
    subprefecture: '—',
    population: '685.899',
    code: '13123'
  },
  {
    name: {
      en: 'Hachiōji',
      ja: ['八', '王', '子', '市'],
      furigana: ['はち', 'おう', 'じ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '579.33',
    code: '13201'
  },
  {
    name: {
      en: 'Tachikawa',
      ja: ['立', '川', '市'],
      furigana: ['たち', 'かわ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '184.183',
    code: '13202'
  },
  {
    name: {
      en: 'Musashino',
      ja: ['武', '蔵', '野', '市'],
      furigana: [' む', 'さし', 'の', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '143.686',
    code: '13203'
  },
  {
    name: {
      en: 'Mitaka',
      ja: ['三', '鷹', '市'],
      furigana: ['み', 'たか', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '189.168',
    code: '13204'
  },
  {
    name: {
      en: 'Ōme',
      ja: ['青', '梅', '市'],
      furigana: ['おう', 'め', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '136.071',
    code: '13205'
  },
  {
    name: {
      en: 'Fuchū',
      ja: ['府', '中', '市'],
      furigana: ['ふ', 'ちゅう', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '260.891',
    code: '13206'
  },
  {
    name: {
      en: 'Akishima',
      ja: ['昭', '島', '市'],
      furigana: ['あき', 'しま', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '111.449',
    code: '13207'
  },
  {
    name: {
      en: 'Chōfu',
      ja: ['調', '布', '市'],
      furigana: ['ちょう', 'ふ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '240.668',
    code: '13208'
  },
  {
    name: {
      en: 'Machida',
      ja: ['町', '田', '市'],
      furigana: ['まち', 'だ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '429.04',
    code: '13209'
  },
  {
    name: {
      en: 'Koganei',
      ja: ['小', '金', '井', '市'],
      furigana: ['こ', 'がね', 'い', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '121.516',
    code: '13210'
  },
  {
    name: {
      en: 'Kodaira',
      ja: ['小', '平', '市'],
      furigana: ['こ', 'だい', 'ら', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '194.757',
    code: '13211'
  },
  {
    name: {
      en: 'Hino',
      ja: ['日', '野', '市'],
      furigana: ['ひ', 'の', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '185.133',
    code: '13212'
  },
  {
    name: {
      en: 'Higashimurayama',
      ja: ['東', '村山', '市'],
      furigana: ['ひがし', 'む', 'ら', 'やま', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '150.984',
    code: '13213'
  },
  {
    name: {
      en: 'Kokubunji',
      ja: ['国', '分寺', '市'],
      furigana: ['こく', 'ぶん', 'じ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '122.787',
    code: '13214'
  },
  {
    name: {
      en: 'Kunitachi',
      ja: ['国', '立', '市'],
      furigana: ['くに', 'たち', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '75.867',
    code: '13215'
  },
  {
    name: {
      en: 'Fussa',
      ja: ['福', '生', '市'],
      furigana: ['ふっ', 'さ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '58.393',
    code: '13218'
  },
  {
    name: {
      en: 'Komae',
      ja: ['狛', '江', '市'],
      furigana: ['こ', 'まえ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '81.671',
    code: '13219'
  },
  {
    name: {
      en: 'Higashiyamato',
      ja: ['東', '大和', '市'],
      furigana: ['ひがし', 'やま', 'と', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '85.229',
    code: '13220'
  },
  {
    name: {
      en: 'Kiyose',
      ja: ['清', '瀬', '市'],
      furigana: ['きよ', 'せ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '74.495',
    code: '13221'
  },
  {
    name: {
      en: 'Higashikurume',
      ja: ['東', '久', '留', '米', '市'],
      furigana: ['ひがし', 'くる', 'め', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '116.869',
    code: '13222'
  },
  {
    name: {
      en: 'Musashimurayama',
      ja: ['武', '蔵', '村', '山', '市'],
      furigana: ['むさし', 'む', 'ら', 'やま', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '70.649',
    code: '13223'
  },
  {
    name: {
      en: 'Tama',
      ja: ['多', '摩', '市'],
      furigana: ['た', 'ま', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '147.953',
    code: '13224'
  },
  {
    name: {
      en: 'Inagi',
      ja: ['稲', '城', '市'],
      furigana: ['いな', 'ぎ', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '87.927',
    code: '13225'
  },
  {
    name: {
      en: 'Hamura',
      ja: ['羽', '村', '市'],
      furigana: ['は', 'むら', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '55.596',
    code: '13227'
  },
  {
    name: {
      en: 'Akiruno',
      ja: ['あ', 'き', 'る', '野', '市'],
      furigana: ['', '', '', 'の', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '80.464',
    code: '13228'
  },
  {
    name: {
      en: 'Nishitokyo',
      ja: ['西', '東京', '市'],
      furigana: ['にし', 'とう', 'きょう', 'し'],
    },
    type: shi,
    subprefecture: '—',
    population: '200.102',
    code: '13229'
  },
  {
    name: {
      en: 'Mizuho',
      ja: ['瑞', '穂', '町'],
      furigana: ['みず', 'ほ', 'まち'],
    },
    type: machi,
    subprefecture: 'Nishi-Tama',
    population: '33.117',
    code: '13303'
  },
  {
    name: {
      en: 'Hinode',
      ja: ['日', 'の', '出', '町'],
      furigana: ['ひ', '', 'で', 'まち'],
    },
    type: machi,
    subprefecture: 'Nishi-Tama',
    population: '17.141',
    code: '13305'
  },
  {
    name: {
      en: 'Hinohara',
      ja: ['檜', '原', '村'],
      furigana: ['ひの', 'はら', 'むら'],
    },
    type: mura,
    subprefecture: 'Nishi-Tama',
    population: '2.194',
    code: '13307'
  },
  {
    name: {
      en: 'Okutama',
      ja: ['奥', '多摩', '町'],
      furigana: ['おく', 'た', 'まち'],
    },
    type: machi,
    subprefecture: 'Nishi-Tama',
    population: '5.177',
    code: '13308'
  },
  {
    name: {
      en: 'Ōshima',
      ja: ['大', '島', '町'],
      furigana: ['おお', 'しま', 'まち'],
    },
    type: machi,
    subprefecture: 'Ōshima',
    population: '7.762',
    code: '13361'
  },
  {
    name: {
      en: 'To-shima',
      ja: ['利', '島', '村'],
      furigana: ['と', 'しま', 'むら'],
    },
    type: mura,
    subprefecture: 'Ōshima',
    population: '309',
    code: '13362'
  },
  {
    name: {
      en: 'Niijima',
      ja: ['新', '島', '村'],
      furigana: ['にい', 'じま', 'むら'],
    },
    type: mura,
    subprefecture: 'Ōshima',
    population: '2.697',
    code: '13363'
  },
  {
    name: {
      en: 'Kōzushima',
      ja: ['神', '津', '島', '村'],
      furigana: ['こう', 'ず', 'しま', 'むら'],
    },
    type: mura,
    subprefecture: 'Ōshima',
    population: '1.856',
    code: '13364'
  },
  {
    name: {
      en: 'Miyake',
      ja: ['三', '宅', '村'],
      furigana: ['みや', 'け', 'むら'],
    },
    type: mura,
    subprefecture: 'Miyake',
    population: '2.451',
    code: '13381'
  },
  {
    name: {
      en: 'Mikurajima',
      ja: ['御', '蔵', '島', '村'],
      furigana: ['みく', 'ら', 'じま', 'むら'],
    },
    type: mura,
    subprefecture: 'Miyake',
    population: '328',
    code: '13382'
  },
  {
    name: {
      en: 'Hachijō',
      ja: ['八', '丈', '町'],
      furigana: ['はち', 'じょう', 'まち'],
    },
    type: machi,
    subprefecture: 'Hachijō',
    population: '7.516',
    code: '13401'
  },
  {
    name: {
      en: 'Aogashima',
      ja: ['青', 'ヶ', '島', '村'],
      furigana: ['あお', 'が', 'しま', 'むら'],
    },
    type: mura,
    subprefecture: 'Hachijō',
    population: '169',
    code: '13402'
  },
  {
    name: {
      en: 'Ogasawara',
      ja: ['小', '笠', '原', '村'],
      furigana: ['お', 'がさ', 'わら', 'むら'],
    },
    type: mura,
    subprefecture: 'Ogasawara',
    population: '3.029',
    code: '13421'
  },
]
