<template>
<div class="home-swiper">
  <swiper>
       <swiper-item v-for="(item,key) in banners" :key="key">
         <a :href="item.link">
            <!-- <div id="swiper-text">{{item.title}}</div> -->
            <img :src="item.image">
         </a>
       </swiper-item>
     </swiper>
</div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js';

export default {
    name:'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default() {
          return []
            }
        }
    },
    components: {
    Swiper,
    SwiperItem
    }
}
</script>

<style>
 /* #swiper-text {
  text-align: center;
  background-color: sandybrown;
  color: red;
 } */
 .home-swiper {
   margin-top: 44px;
 }
</style>