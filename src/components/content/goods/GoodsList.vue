<template>
  <div class="goods">
    <goods-list-item v-for="(item,key) in goods"
    :key="key" 
    :goodsitem = "item"/>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem.vue';

export default {
  name:'GoodsList',
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
        type: Array,
        default() {
          return []
        }
    }
  }
}
</script>

<style>
.goods{
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

</style>