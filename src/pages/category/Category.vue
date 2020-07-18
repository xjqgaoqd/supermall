<template>
<div class="wrapper">
  <h2>分类</h2>
  <ul>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
    <li>分类列表</li>
  </ul>
</div>
</template>

<script>

import BScroll from 'better-scroll';


export default {
  name:'Category',
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector('.wrapper'),{
      probeType:3
    })
  }
  
}


// new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('hello')
//   }, 1000)
// }).then((data)=> {
//   //100行代码
//   console.log(data);
//   console.log(data);
//   console.log(data);
//   return new Promise((resolve,reject) => {-
//     setTimeout(() => {
//       // resolve("aaa")
//       reject('error')
//     }, 1000);
//   }).then((data) => {
//     console.log(data);
//     console.log(data);
//     console.log(data);
//   }).catch((err) => {
//     console.log(err)
//   })
// })

</script>

<style>
.wrapper {
  height: 160px;
  background-color: red;
  /* overflow: hidden; */
  overflow-y: scroll;
}
</style>