import { randomHexColor } from './tools'

const BIG = [
  {
    text: '可乐炸鸡',
    shops: [
      '偶霸韩味炸鸡(汉堡)'
    ],
    like: [
      '翅包饭'
    ],
    dislike: []
  },
  {
    text: '烤鸭面饼',
    shops: [
      '阿果木烤鸭'
    ],
    like: [],
    dislike: []
  },
  {
    text: '麻辣香锅',
    shops: [
      '川小厨麻辣香锅'
    ],
    like: ['波波肠', '鸡软骨', '油条'],
    dislike: ['鱼豆腐', '虾饺']
  },
  {
    text: '烧烤炸串',
    shops: [
      '大尚龙虾'
    ],
    like: [],
    dislike: []
  },
  {
    text: '脆皮鸡饭',
    shops: [],
    like: [],
    dislike: []
  },
  {
    text: '梅菜扣肉',
    shops: [
      '知味小厨（饿了么）'
    ]
  },
  {
    text: '嫩牛五方',
    shops: [
      '小胖牛*嫩牛五方'
    ],
    like: [],
    dislike: []
  },
  {
    text: '肉夹馍',
    shops: [
      '卓氏肉夹馍'
    ],
    like: [],
    dislike: []
  },
  {
    text: '水煮肉',
    shops: [
      '知味小厨（饿了么）'
    ],
    like: [],
    dislike: []
  },
  {
    text: '口水鸡',
    shops: [
      '太享元气饭'
    ],
    like: [
      '各种鸡'
    ],
    dislike: []
  }
];

const SMALL = [
  {
    text: '水果捞',
    shops: [
      '切果NOW！'
    ],
    like: [],
    dislike: []
  },
  {
    text: '甜点',
    shops: [
      '森点',
      '7cake榴莲千层蛋糕'
    ],
    like: ['黑森林蛋糕（森点）', '巧克力泡芙（森点）'],
    dislike: []
  }
]

const DRINKS = [
  {
    text: '挑选新杯',
    shops: [
      '沪上阿姨'
    ]
  },
  {
    text: '芝士葡萄奶盖',
    shops: [
      '沪上阿姨'
    ],
    like: [
      ''
    ],
    dislike: []
  },
  {
    text: '芝士草莓奶盖',
    shops: [
      '沪上阿姨'
    ],
    like: [
      '厚芋泥',
      '小芋圆'
    ],
    dislike: []
  },
  {
    text: '冰火两重天',
    shops: [
      '逅座十二茶'
    ],
    like: [
      '黑糖珍珠',
      '七彩芋圆'
    ],
    dislike: []
  },
  {
    text: '霉春色染',
    shops: [
      '沪上阿姨'
    ],
    like: [
      '厚芋泥',
      '小芋圆'
    ],
    dislike: ['七彩芋圆']
  },
  {
    text: '自力更生',
    shops: [
      '逅座十二茶'
    ]
  }
]

const lunchMap = {
  big: BIG,
  small: SMALL,
  drinks: DRINKS
}

export const nbMap = [
  '温馨提示：特殊时期忌吃辛辣(⊙o⊙)哦',
  '科学证明：可爱和吃的多少成正比，(ง •_•)ง',
  'O(∩_∩)O貌美肤白从每一餐做起~',
  '不要一直重复选择，泽宝可是个果决的美少女！(。・∀・)ノ',
  '美丽即正义，"胖"即可爱，况且根本不胖哒( ఠൠఠ )ﾉ'
]

export const getLunchMap = type => {
  return lunchMap[type].map(item => {
    item.color = randomHexColor();
    return item
  })
}
