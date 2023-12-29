// @ts-check

/**
 * @typedef {import('./regions').Name} Name
 */

/** @type {Object.<string, Name>} */
export const dict = {
  japan: {
    ja: '日本',
    furigana: ['に', 'ほん'],
    en: 'Japan',
  },
  mapOfJapan: {
    ja: '日本の地図',
    furigana: ['に', 'ほん', '', 'ち', 'ず'],
    en: 'Map of Japan',
  },
  toolTip: {
    ja: '地域を選んで、次に都道府県または市を選んでください。',
    furigana: ['ち', 'いき', '', 'えら', '', '', '', 'つぎ', '', 'と', 'どう', 'ふ', 'けん', '', '', '', 'し', '', 'えら', '', '', '', '', '', '', ''],
    en: 'Select Region, then Prefecture or City.',
  },
  wikipedia: {
    ja: 'ウィキペディア',
    en: 'Wikipedia',
  },
  reportAnIssue: {
    ja: '問題を報告する',
    furigana: ['もん', 'だい', '', 'ほう', 'こく', '', '', ''],
    en: 'Report an Issue',
  },
}

/** @type {Object.<string, Name>} */
export const layers = {
  capital: {
    ja: '県庁',
    furigana: ['けん', 'ちょう'],
    en: 'Capitals',
  },
  prefecture: {
    ja: '都道府県',
    furigana: ['と', 'どう', 'ふ', 'けん'],
    en: 'Prefectures',
  },
  favorite: {
    ja: 'お気に',
    furigana: ['', 'き', 'に'],
    en: 'Favorites',
  },
  tokyo: {
    ja: '東京都',
    furigana: ['とう', 'きょう', 'と'],
    en: 'Tokyo',
  },
}

/** @type {Object.<string, Name>} */
export const fillmode = {
  color: {
    ja: '色',
    furigana: ['いろ'],
    en: 'Color',
  },
  pattern: {
    ja: '模様',
    furigana: ['も', 'よう'],
    en: 'Pattern',
  },
}

/** @type {Object.<string, Name>} */
export const directions = {
  east: {
    ja: '東',
    furigana: ['ひがし'],
    en: 'East',
  },
  west: {
    ja: '西',
    furigana: ['にし'],
    en: 'West',
  },
  south: {
    ja: '南',
    furigana: ['みなみ'],
    en: 'South',
  },
  north: {
    ja: '北',
    furigana: ['きた'],
    en: 'North',
  },
}
