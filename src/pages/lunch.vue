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
      {{time}}
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

export default {
  name: 'lunch',
  data () {
    return {
      selectedIndex: -1,
      lunchMap: [],
      time: 5,
      thimer: null
    }
  },
  created () {
    this.lunchMap = getLunchMap()
  },
  methods: {
    run () {
      if (this.thimer) {
        return
      }

      this.time = 5

      this.thimer = setInterval(() => {
        this.selectedIndex = getRandom(1, this.lunchMap.length)
        this.time--

        if (this.time === 0) {
          this.time = this.lunchMap[this.selectedIndex].text
          clearInterval(this.thimer)
          this.thimer = null
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
