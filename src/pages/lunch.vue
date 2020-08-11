<template>
  <div class="lunch">
    <Item
      v-for="(item, index) in lunchMap"
      :key="index"
      :color="item.color"
      :text="item.text"
      :isSelected="index === selectedIndex"
    />
    <div class="time">
      {{showLunch}}
    </div>
    <span class="run" @click="run">
      吃点啥
    </span>
  </div>
</template>

<script>
import { getRandom } from '../../utils/tools'
import Item from '@/components/item'
import { getLunchMap } from '../../utils/conf'

const TIME = 5

export default {
  name: 'lunch',
  data () {
    return {
      selectedIndex: -1,
      lunchMap: [],
      time: TIME,
      timerA: null,
      timerB: null
    }
  },
  created () {
    this.lunchMap = getLunchMap()
  },
  computed: {
    showLunch () {
      return this.time === 0 ? this.lunchMap[this.selectedIndex].text : this.time
    }
  },
  methods: {
    run () {
      if (this.timerA) {
        return
      }

      this.time = TIME

      this.timerA = setInterval(() => {
        let l = this.lunchMap.length
        let randomNum = getRandom(1, l)

        if (randomNum === this.selectedIndex) {
          randomNum = randomNum === l - 1 ? 0 : randomNum + 1
        }

        this.selectedIndex = randomNum
      }, 100)

      this.timerB = setInterval(() => {
        this.time--

        if (this.time === 0) {
          clearInterval(this.timerA)
          clearInterval(this.timerB)
          this.timerA = null
          this.timerB = null
        }
      }, 1000)
    }
  },
  components: {
    'Item': Item
  }
}
</script>

<style rel="stylesheet/sass" scoped>
.lunch {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 30px 10px;
}

.lunch > span {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
.time {
  margin-top: 100px;
  width: 100%;
  height: 100px;
  font-size: 60px;
  text-align: center;
  color: #000;
}
.run {
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 35px;
  line-height: 35px;
  padding: 3px 20px;
  background: cornflowerblue;
  border-radius: 6px;
  color: antiquewhite;
}
</style>
