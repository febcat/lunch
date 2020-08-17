<template>
  <div class="lunch">
    <Item
      v-for="(item, index) in lunchMap"
      :key="index"
      :color="item.color"
      :text="item.text"
      :isSelected="index === selectedIndex"
    />
    <ShowLunch :lunch="showLunch" />
    <div class="buttons">
      <span class="run" @click="run">
        吃点啥
      </span>
      <span class="goback" @click="goback">
        返回
      </span>
    </div>
  </div>
</template>

<script>
import { getRandom } from '../../utils/tools'
import Item from '@/components/item'
import ShowLunch from '@/components/showlunch'
import { getLunchMap, nbMap } from '../../utils/conf'

const TIME = 6

export default {
  name: 'lunch',
  porps: {
    lunchType: String
  },
  data () {
    return {
      selectedIndex: -1,
      nbIndex: -1,
      lunchMap: [],
      time: TIME,
      timerA: null,
      timerB: null,
      timeC: null
    }
  },
  created () {
    const lunchType = this.$route.params.lunchType

    if (!lunchType) {
      this.$router.go(-1)
    }

    this.lunchMap = getLunchMap(lunchType)
    this.nbIndex = getRandom(1, nbMap.length)
  },
  computed: {
    showLunch () {
      return this.time === 0 ? this.lunchMap[this.selectedIndex] : this.sayNb()
    }
  },
  methods: {
    sayNb (index) {
      return nbMap[index || this.nbIndex]
    },
    run () {
      if (this.timerA) {
        return
      }

      this.time = TIME

      this.timerA = setInterval(() => {
        let l = this.lunchMap.length
        let randomNum = getRandom(0, l)

        if (randomNum === this.selectedIndex) {
          randomNum++
        }

        if (randomNum === l) {
          randomNum = 0
        }

        this.selectedIndex = randomNum
      }, 100)

      this.timerB = setInterval(() => {
        this.time--

        if (this.time === 0) {
          clearInterval(this.timerA)
          clearInterval(this.timerB)
          clearInterval(this.timeC)
          this.timerA = null
          this.timerB = null
          this.timeC = null
        }
      }, 1000)

      this.timeC = setInterval(() => {
        let l = nbMap.length
        let randomNum = getRandom(1, l)

        if (randomNum === this.nbIndex) {
          randomNum = randomNum === l - 1 ? 0 : randomNum + 1
        }

        this.nbIndex = randomNum
      }, 2000)
    },
    goback () {
      this.$router.go(-1)
    }
  },
  components: {
    'ShowLunch': ShowLunch,
    'Item': Item
  }
}
</script>

<style scoped>
.lunch {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0px 10px 30px;
}

.lunch > span {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
.buttons {
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.buttons > span{
  height: 35px;
  line-height: 35px;
  padding: 3px 20px;
  background: cornflowerblue;
  border-radius: 6px;
  color: antiquewhite;
}
</style>
