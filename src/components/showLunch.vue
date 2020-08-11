<template>
  <div class="lunch">
    <p v-if="isShowTime" class="time">
      {{lunch}}
    </p>
    <div v-if="!isShowTime">
      <p class="text">{{lunch.text}}</p>
      <div class="lable">踩过的店</div>
      <ul class="shop">
        <li v-for="(item, index) in lunch.shops" :key="index">{{item}}</li>
      </ul>
      <div class="lable">偏好：
        <span class="like">{{getMapItem(lunch.like)}}</span>
      </div>
      <div class="lable">不喜：
         <span class="dislike">{{getMapItem(lunch.dislike)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lunch: {
      type: Array | String,
      default: ''
    }
  },
  computed: {
    isShowTime () {
      return ['string'].includes(typeof this.lunch)
    }
  },
  methods: {
    getMapItem (map) {
      if (!Array.isArray(map) || !map.length) {
        return '暂无~'
      }

      return map.reduce((pre, next) => {
        return pre + ' ' + next
      }, '')
    }
  }
}
</script>

<style scoped>
ul, li {
  margin: 0px;
  padding: 0;
  list-style-type:none;
  list-style: none;
}
.lunch {
  width: 100%;
  height: 330px;
  overflow: hidden;
  overflow-y: auto;
}
.text {
  font-size: 22px;
  text-align: center;
  font-weight: 600;
}
.time {
  font-size: 20px;
  text-align: center;
}
.lable {
  color: burlywood;
  overflow: hidden;
  margin: 15px 0;
  padding-bottom: 5px;
  font-size: 16px;
  font-weight: 500;
}
.lable span{
  color: black;
}
.shop li {
  background: blanchedalmond;
  padding: 5px 0px;
  text-align: center;
  overflow: hidden;
}
.like, .dislike {
  text-align: center;
}
</style>
