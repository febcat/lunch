import { randomHexColor } from './tools'

const LUNCH = [
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
    text: '水果捞',
    shops: [
      '切果NOW！'
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
    shops: []
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
  }
]

export const nbMap = [
  '温馨提示：特殊时期忌吃辛辣(⊙o⊙)哦',
  '科学证明：可爱和吃的多少成正比，(ง •_•)ง',
  'O(∩_∩)O貌美肤白从每一餐做起~',
  '不要一直重复选择，泽宝可是个果决的美少女！(。・∀・)ノ',
  '美丽即正义，"胖"即可爱，况且根本不胖哒( ఠൠఠ )ﾉ'
]

export const getLunchMap = () => {
  return LUNCH.map(item => {
    item.color = randomHexColor();
    return item
  })
}
