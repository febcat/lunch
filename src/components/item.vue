<template>
  <span :class="isSelected ? 'item selected' : 'item default'" :style="{background: color}">
    {{text}}
  </span>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#fff'
    },
    text: {
      type: String,
      default: '暂无内容'
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style rel="stylesheet/sass">
.item {
  padding: 10px;
  margin: 10px;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  border-radius: 6px;
  box-shadow: 10px 10px 10px rgba(0,0,0,0.9);
}
.item.default {
  color: rgb(60, 99, 99);
}
.item.selected {
  color: aliceblue;
;
}
</style>
