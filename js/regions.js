// @ts-check

export const cityType = {
  regionCapital: 'regionCapital',
  major: 'major',
  favorite: 'favorite',
}

export const regions = [
  {
    code: 'HOK',
    name: {
      en: 'Hokkaidō',
      ja: ['北', '海', '道'],
      furigana: ['ほっ', 'かい', 'どう']
    },
    prefectures: [
      {
        code: '01',
        name: {
          en: 'Hokkaidō',
          ja: ['北', '海', '道'],
          furigana: ['ほっ', 'かい', 'どう']
        },
        location: { lat: 43.2203266, lng: 142.8634737 },
        cities: [
          {
            name: {
              en: 'Sapporo',
              ja: ['札', '幌', '市'],
            },
            furigana: ['さっ', 'ぽろ', 'し'],
            types: [cityType.regionCapital, cityType.favorite],
            location: { lat: 43.0617713, lng: 141.3544506 },
          }
        ],
      }
    ],
  },
  {
    code: 'TOH',
    name: {
      en: 'Tōhoku',
      ja: ['東', '北'],
      furigana: ['とう', 'ほく']
    },
    prefectures: [
      {
        code: '02',
        name: {
          en: 'Aomori',
          ja: ['青', '森', '県'],
          furigana: ['あお', 'もり', 'けん']
        },
        location: { lat: 40.7657077, lng: 140.9175879 },
      },
      {
        code: '03',
        name: {
          en: 'Iwate',
          ja: ['岩', '手', '県'],
          furigana: ['いわ', 'て', 'けん']
        },
        location: { lat: 39.5832989, lng: 141.2534574 },
      },
      {
        code: '04',
        name: {
          en: 'Miyagi',
          ja: ['宮', '城', '県'],
          furigana: ['みや', 'ぎ', 'けん']
        },
        location: { lat: 38.630612, lng: 141.1193048 },
      },
      {
        code: '05',
        name: {
          en: 'Akita',
          ja: ['秋', '田', '県'],
          furigana: ['あき', 'た', 'けん']
        },
        location: { lat: 40.1376293, lng: 140.334341 },
      },
      {
        code: '06',
        name: {
          en: 'Yamagata',
          ja: ['山', '形', '県'],
          furigana: ['やま', 'がた', 'けん']
        },
        location: { lat: 38.5370564, lng: 140.1435198 },
        cities: [
          {
            name: {
              en: 'Sendai',
              ja: ['仙', '台', '市'],
            },
            furigana: ['せん', 'だい', 'し'],
            types: [cityType.regionCapital],
            location: { lat: 38.268195, lng: 140.869418 },
          }
        ],
      },
      {
        code: '07',
        name: {
          en: 'Fukushima',
          ja: ['福', '島', '県'],
          furigana: ['ふく', 'しま', 'けん']
        },
        location: { lat: 37.3834373, lng: 140.1832516 },
      }
    ]
  },
  {
    code: 'KAN',
    name: {
      en: 'Kantō',
      ja: ['関', '東'],
      furigana: ['かん', 'とう']
    },
    prefectures: [
      {
        code: '08',
        name: {
          en: 'Ibaraki',
          ja: ['茨', '城', '県'],
          furigana: ['いば', 'らき', 'けん']
        },
        location: { lat: 36.2193571, lng: 140.1832516 },
      },
      {
        code: '09',
        name: {
          en: 'Tochigi',
          ja: ['栃', '木', '県'],
          furigana: ['とち', 'ぎ', 'けん']
        },
        location: { lat: 36.6714739, lng: 139.8547266 },
      },
      {
        code: '10',
        name: {
          en: 'Gunma',
          ja: ['群', '馬', '県'],
          furigana: ['ぐん', 'ま', 'けん']
        },
        location: { lat: 36.5605388, lng: 138.8799972 },
      },
      {
        code: '11',
        name: {
          en: 'Saitama',
          ja: ['埼', '玉', '県'],
          furigana: ['さい', 'たま', 'けん']
        },
        location: { lat: 35.9962513, lng: 139.4466005 },
      },
      {
        code: '12',
        name: {
          en: 'Chiba',
          ja: ['千', '葉', '県'],
          furigana: ['ちば']
        },
        location: { lat: 35.3354155, lng: 140.1832516 },
      },
      {
        code: '13',
        name: {
          en: 'Tōkyo',
          ja: ['東', '京都'],
          furigana: ['とう', 'きょう']
        },
        location: { lat: 35.6764225, lng: 139.650027 },
        cities: [
          {
            name: {
              en: 'Tōkyō',
              ja: ['東', '京都'],
            },
            furigana: ['とう', 'きょう', 'と'],
            types: [cityType.regionCapital],
            location: { lat: 35.6764225, lng: 139.650027 },
          }
        ],
      },
      {
        code: '14',
        name: {
          en: 'Kanagawa',
          ja: ['神', '奈川', '県'],
          furigana: ['かな', 'がわ', 'けん']
        },
        location: { lat: 35.4913535, lng: 139.284143 },
      }
    ]
  },
  {
    code: 'CHU',
    name: {
      en: 'Chūbu',
      ja: ['中', '部'],
      furigana: ['ちゅう', 'ぶ']
    },
    prefectures: [
      {
        code: '15',
        name: {
          en: 'Niigata',
          ja: ['新', '潟', '県'],
          furigana: ['にい', 'がた', 'けん']
        },
        location: { lat: 37.5178386, lng: 138.9269794 },
      },
      {
        code: '16',
        name: {
          en: 'Toyama',
          ja: ['富', '山', '県'],
          furigana: ['とや', 'ま', 'けん']
        },
        location: { lat: 36.6958266, lng: 137.2137071 },
      },
      {
        code: '17',
        name: {
          en: 'Ishikawa',
          ja: ['石', '川', '県'],
          furigana: ['いし', 'かわ', 'けん']
        },
        location: { lat: 36.3260317, lng: 136.5289653 },
      },
      {
        code: '18',
        name: {
          en: 'Fukui',
          ja: ['福', '井', '県'],
          furigana: ['ふく', 'い', 'けん']
        },
        location: { lat: 35.896227, lng: 136.2111579 },
      },
      {
        code: '19',
        name: {
          en: 'Yamanashi',
          ja: ['山', '梨', '県'],
          furigana: ['やま', 'なし', 'けん']
        },
        location: { lat: 35.6635113, lng: 138.6388879 },
        cities: [
          {
            name: {
              en: 'Nagoya',
              ja: ['名', '古', '屋', '市'],
            },
            furigana: ['な', 'ご', 'や', 'し'],
            types: [cityType.regionCapital],
            location: { lat: 35.18145060000001, lng: 136.9065571 },
          }
        ],
      },
      {
        code: '20',
        name: {
          en: 'Nagano',
          ja: ['長', '野', '県'],
          furigana: ['なが', 'の', 'けん']
        },
        location: { lat: 36.1543941, lng: 137.9218204 },
        cities: [
          {
            name: {
              en: 'Nagano',
              ja: ['長', '野', '市'],
            },
            furigana: ['なが', 'の', 'し'],
            types: [cityType.favorite],
            location: { lat: 36.6485258, lng: 138.1950371 },

          }
        ]
      },
      {
        code: '21',
        name: {
          en: 'Gifu',
          ja: ['岐', '阜', '県'],
          furigana: ['ぎ', 'ふ', 'けん']
        },
        location: { lat: 35.7437491, lng: 136.9805103 },
      },
      {
        code: '22',
        name: {
          en: 'Shizuoka',
          ja: ['静', '岡', '県'],
          furigana: ['しず', 'おか', 'けん']
        },
        location: { lat: 35.0929397, lng: 138.3190276 },
        cities: [
          {
            name: {
              en: 'Shimoda',
              ja: ['下', '田', '市'],
            },
            furigana: ['しも', 'だ', 'し'],
            types: [cityType.favorite],
            location: { lat: 34.6796171, lng: 138.9451459 },

          }
        ]
      },
      {
        code: '23',
        name: {
          en: 'Aichi',
          ja: ['愛', '知', '県'],
          furigana: ['あい', 'ち']
        },
        location: { lat: 35.0182505, lng: 137.2923893 },
      }
    ]
  },
  {
    code: 'KAN',
    name: {
      en: 'Kansai',
      ja: ['関', '西'],
      furigana: ['かん', 'さい']
    },
    prefectures: [
      {
        code: '24',
        name: {
          en: 'Mie',
          ja: ['三', '重', '県'],
          furigana: ['み', 'え', 'けん']
        },
        location: { lat: 33.8143901, lng: 136.0487047 },
      },
      {
        code: '25',
        name: {
          en: 'Shiga',
          ja: ['滋', '賀', '県'],
          furigana: ['し', 'が', 'けん']
        },
        location: { lat: 35.3292014, lng: 136.0563212 },
      },
      {
        code: '26',
        name: {
          en: 'Kyōto',
          ja: ['京', '都', '府'],
          furigana: ['きょう', 'と', 'ふ']
        },
        location: { lat: 35.1566609, lng: 135.5251982 },
        cities: [
          {
            name: {
              en: 'Kyōto',
              ja: ['京', '都', '府'],
            },
            furigana: ['きょう', 'と', 'ふ'],
            types: [cityType.regionCapital, cityType.favorite],
            location: { lat: 35.1566609, lng: 135.5251982 },

          }
        ],
      },
      {
        code: '27',
        name: {
          en: 'Osaka',
          ja: ['大', '阪', '府'],
          furigana: ['おお', 'さか', 'ふ']
        },
        location: { lat: 34.6413315, lng: 135.5629394 },
        cities: [
          {
            name: {
              en: 'Ōsaka',
              ja: ['大', '阪', '府'],
            },
            furigana: ['おお', 'さか', 'ふ'],
            types: [cityType.major, cityType.favorite],
            location: { lat: 34.6413315, lng: 135.5629394 },

          }
        ],
      },
      {
        code: '28',
        name: {
          en: 'Hyōgo',
          ja: ['兵', '庫', '県'],
          furigana: ['ひょう', 'ご', 'けん']
        },
        location: { lat: 34.8579518, lng: 134.5453787 },
      },
      {
        code: '29',
        name: {
          en: 'Nara',
          ja: ['奈', '良', '県'],
          furigana: ['な', 'ら', 'けん']
        },
        location: { lat: 34.2975528, lng: 135.8279734 },
      },
      {
        code: '30',
        name: {
          en: 'Wakayama',
          ja: ['和', '歌', '山', '県'],
          furigana: ['わか', 'やま', 'けん']
        },
        location: { lat: 33.9480914, lng: 135.3745358 },
      }
    ]
  },
  {
    code: 'CHU',
    name: {
      en: 'Chūgoku',
      ja: ['中', '国'],
      furigana: ['ちゅう', 'ごく']
    },
    prefectures: [
      {
        code: '31',
        name: {
          en: 'Tottori',
          ja: ['鳥', '取', '県'],
          furigana: ['とっ', 'とり', 'けん']
        },
        location: { lat: 35.3573161, lng: 133.4066618 },
      },
      {
        code: '32',
        name: {
          en: 'Shimane',
          ja: ['島', '根', '県'],
          furigana: ['しま', 'ね', 'けん']
        },
        location: { lat: 35.1244094, lng: 132.6293446 },
      },
      {
        code: '33',
        name: {
          en: 'Okayama',
          ja: ['岡', '山', '県'],
          furigana: ['おか', 'やま', 'けん']
        },
        location: { lat: 34.8963407, lng: 133.6375314 },
      },
      {
        code: '34',
        name: {
          en: 'Hiroshima',
          ja: ['広', '島', '県'],
          furigana: ['ひろ', 'しま', 'けん']
        },
        location: { lat: 34.8823408, lng: 133.0194897 },
        cities: [
          {
            name: {
              en: 'Hiroshima',
              ja: ['広', '島', '市'],
            },
            furigana: ['ひろ', 'しま', 'し'],
            types: [cityType.regionCapital],
            location: { lat: 34.3852894, lng: 132.4553055 },

          }]
      },
      {
        code: '35',
        name: {
          en: 'Yamaguchi',
          ja: ['山', '口', '県'],
          furigana: ['やま', 'ぐち', 'けん']
        },
        location: { lat: 34.2796769, lng: 131.5212742 },
      }
    ]
  },
  {
    code: 'SHIK',
    name: {
      en: 'Shikoku',
      ja: ['四', '国'],
      furigana: ['し', 'こく']
    },
    prefectures: [
      {
        code: '36',
        name: {
          en: 'Tokushima',
          ja: ['徳', '島', '県'],
          furigana: ['とく', 'しま', 'けん']
        },
        location: { lat: 33.9419655, lng: 134.3236557 },
        cities: [
          {
            name: {
              en: 'Takamatsu',
              ja: ['高', '松', '市'],
            },
            furigana: ['たか', 'まつ', 'し'],
            types: [cityType.regionCapital],
            location: { lat: 34.342542, lng: 134.0465405 },
          }
        ],
      },
      {
        code: '37',
        name: {
          en: 'Kagawa',
          ja: ['香', '川', '県'],
          furigana: ['か', 'がわ', 'けん']
        },
        location: { lat: 34.2225915, lng: 134.0199152 },
      },
      {
        code: '38',
        name: {
          en: 'Ehime',
          ja: ['愛', '媛', '県'],
          furigana: ['え', 'ひめ', 'けん']
        },
        location: { lat: 33.6025306, lng: 132.7857583 },
      },
      {
        code: '39',
        name: {
          en: 'Kochi',
          ja: ['高', '知', '県'],
          furigana: ['こう', 'ち', 'けん']
        },
        location: { lat: 33.5481246, lng: 133.2521507 },
      }
    ]
  },
  {
    code: 'KYU',
    name: {
      en: 'Kyūshū',
      ja: ['九', '州'],
      furigana: ['きゅう', 'しゅう']
    },
    prefectures: [
      {
        code: '40',
        name: {
          en: 'Fukuoka',
          ja: ['福', '岡', '県'],
          furigana: ['ふく', 'おか', 'けん']
        },
        location: { lat: 33.56625590000001, lng: 130.715857 },
        cities: [
          {
            name: {
              en: 'Fukuoka',
              ja: ['福', '岡', '市'],
            },
            furigana: ['ふく', 'おか', 'し'],
            types: [cityType.regionCapital],
            location: { lat: 33.5901838, lng: 130.4016888 },

          }
        ]
      },
      {
        code: '41',
        name: {
          en: 'Saga',
          ja: ['佐', '賀', '県'],
          furigana: ['さ', 'が', 'けん']
        },
        location: { lat: 33.3078371, lng: 130.2271243 },
      },
      {
        code: '42',
        name: {
          en: 'Nagasaki',
          ja: ['長', '崎', '県'],
          furigana: ['なが', 'さき', 'けん']
        },
        location: { lat: 33.2488525, lng: 129.6930912 },
      },
      {
        code: '43',
        name: {
          en: 'Kumamoto',
          ja: ['熊', '本', '県'],
          furigana: ['くま', 'もと', 'けん']
        },
        location: { lat: 32.8594427, lng: 130.7969149 },
      },
      {
        code: '44',
        name: {
          en: 'Oita',
          ja: ['大', '分', '県'],
          furigana: ['おお', 'いた', 'けん']
        },
        location: { lat: 33.1589299, lng: 131.3611121 },
      },
      {
        code: '45',
        name: {
          en: 'Miyazaki',
          ja: ['宮', '崎', '県'],
          furigana: ['みや', 'ざき', 'けん']
        },
        location: { lat: 32.6036022, lng: 131.441251 },
      },
      {
        code: '46',
        name: {
          en: 'Kagoshima',
          ja: ['鹿', '児', '島', '県'],
          furigana: ['か', 'ご', 'しま', 'けん']
        },
        location: { lat: 31.3911958, lng: 130.8778586 },
        cities: [
          {
            name: {
              en: 'Kagoshima',
              ja: ['鹿', '児', '島', '市'],
            },
            furigana: ['か', 'ご', 'しま', 'し'],
            types: [cityType.favorite],
            location: { lat: 31.5968539, lng: 130.5571392 },
          }
        ],
      },
      {
        code: '47',
        name: {
          en: 'Okinawa',
          ja: ['沖', '縄', '県'],
          furigana: ['おき', 'なわ', 'けん']
        },
        location: { lat: 26.1201911, lng: 127.7025012 },
      }
    ]
  }
]
