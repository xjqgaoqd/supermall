<template>
  <h2>购物车</h2>
</template>

<script>
export default {
 name:"Cart"
}
new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('aaaa')
  }, 1000);
}).then((res) => {
  console.log(res,'第一层');
  return res+'111'
}).then((res) => {
  console.log(res,"的二层");
  return res + '222'
}).then((res) => {
  console.log(res,"地三层");
  return res + '333'
})
</script>

<style>

</style>