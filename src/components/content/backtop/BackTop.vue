<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" @click="backClick">
  </div>
</template>

<script>
export default {
  name:'BackTop',
  methods : {
      backClick() {
        
      }
  }

}
</script>

<style>
.back-top {
  position: fixed;
  right: 6px;
  bottom: 50px;
  z-index: 10;
}
.back-top img {
  width: 43px;
  height: 43px;
}
</style>