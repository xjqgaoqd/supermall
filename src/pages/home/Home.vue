<template>
 <div id="home">
   <nav-bar class="home-nav"><div slot="center">龙龙的商店</div></nav-bar>

   <back-top @click.native="backClick" v-show="ishowBackTop"/>

   <scroll class="content" ref="scroll" :probe-type="3" @scroll="contantscroll" :pull-up-load="true" @pullingUp="loadMore">
     <home-swiper :banners="banners"></home-swiper>
     <recommend-view :recommends="recommends"></recommend-view>
     <feature-view/>
     <tab-control :titles="['流行', '新款', '精选']" class="tabctr" @tabClick="tabClick"></tab-control>
     <goods-list :goods="goods[currentType].list">
     </goods-list>
   </scroll>

 </div>
</template>

<script>
import {getHomeMultidata,getHomeGoods} from "network/home.js";

import TabControl from 'components/content/tabControl/TabControl.vue';
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from 'components/common/scroll/Scroll.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';
import BackTop from 'components/content/backtop/BackTop.vue';

import FeatureView from './childComps/FeatureView.vue';
import RecommendView from './childComps/RecommendView.vue';
import HomeSwiper from './childComps/HomeSwiper';

// import Swiper from 'components/common/swiper/Swiper.vue';
// import SwiperItem from 'components/common/swiper/SwiperItem.vue';
//index统一导出


export default {
  name:'Home',
  components: {

    NavBar,
    TabControl,
    GoodsList,

    HomeSwiper,
    RecommendView,
    FeatureView,
    Scroll,
    BackTop,
    
  },
  data() {
    return{
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0,list: []},
        'new': {page: 0,list: []},
        'sell': {page: 0,list: []},
      },
      currentType: 'pop',
      ishowBackTop: false,
    }
  },
  created(){
    //1，请求多个数据
    this.getHomeMultidata()
    //请求商品数据,封装的好处使用方便
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    //事件监听方法
    tabClick(index) {
      // console.log(index);
      switch(index) {
        case 0 :
          this.currentType = 'pop'
          break;
        case 1 :
          this.currentType = 'new'
          break;
        case 2 :
          this.currentType = 'sell'
          break;
      }
    },
     backClick() {
        this.$refs.scroll.backTo(0,0)
      },
      contantscroll(position) {
        // console.log(position);
        this.ishowBackTop = position.y < -1000
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
        console.log('jiazai')
      },


    // 网络请求的方法
    getHomeMultidata() {
          getHomeMultidata().then(
      res =>{
        console.log(res);
        //函数执行完毕会自动销毁，所以必须要将值另外赋出去，使得与服务器的链接不会断
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }
    )
    },
    getHomeGoods(type) {
      //复用方便,为啥用[]?
      const page = this.goods[type].page + 1;

      getHomeGoods(type,page).then(
      res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;

        //finishPullUp
        this.$refs.scroll.scroll.finishPullUp();
      }
    )
    }
  }
}
</script>

<style scoped>
  .home {
   position: relative;
  }
  .home-nav {
    background-color: sandybrown;
    color: white;

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
  .tabctr {
    background-color: #ffffff;
    position: sticky;
    top: 44px;
    z-index: 8;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    overflow: hidden;
  }
</style>
