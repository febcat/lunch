<template>
  <div class="select">
    <div
      v-for="(item, index) in lunchType"
      :key="index"
      @click="selectLunchType(item.type)">
      {{item.text}}
    </div>
    <p class="tool">选定点击跳转哦</p>
  </div>
</template>

<script>

const TYPE = [
  { text: '正餐', type: 'big' },
  { text: '轻食', type: 'small' },
  { text: '饮品', type: 'drinks' }
]

export default {
  data () {
    return {
      lunchType: TYPE
    }
  },
  methods: {
    selectLunchType (lunchType) {
      this.$router.push({
        name: 'lunch',
        params: {
          lunchType
        }
      })
    }
  }
}
</script>

<style scoped>
.select {
  box-sizing: border-box;
  padding: 20px;
}
.select > div {
  background:beige;
  width: 100%;
  font-size: 26px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  margin: 15px 0;
  border-radius: 8px;
  color: darksalmon;
}
.tool {
  width: 100%;
  text-align: center;
  margin: 100px 0;
  font-size: 18px;
  color: burlywood;
}
</style>
