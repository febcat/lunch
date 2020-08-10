import { randomHexColor } from './tools'

const LUNCH = [
  '可乐炸鸡',
  '烤鸭面饼',
  '麻辣香锅',
  '烧烤炸串',
  '水果捞',
  '酸菜鱼'
]

export const getLunchMap = () => {
  return LUNCH.map(item => ({
    color: randomHexColor(),
    text: item
  }))
}
