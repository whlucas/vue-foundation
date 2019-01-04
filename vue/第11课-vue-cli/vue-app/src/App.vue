<template>
  <!--这里注意只能有一个根节点,也就是说我在并列的写一个div就会报错-->
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--这个helloWorld组件的标签也可以写成Hello-world-->
    <!--这里给他的子组件里面传值了-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  // 我在这个组件里面还要使用一个HelloWorld组件,这里把他导入进来
  import HelloWorld from './components/HelloWorld.vue'

  // 这里就是组件的js部分,相当于
  // 定义全局组件时候vue.component('name',{})
  export default {
    name: 'app',
    components: {
      HelloWorld
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
