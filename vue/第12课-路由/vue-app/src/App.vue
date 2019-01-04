<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->

    <!--在这里不用他的写的,自己写一个使用我配置好的路由-->
    <!--<a href="/">Home</a>-->
    <!--<a href="/about">About</a>-->
    <!--光写a标签只能实现跳转,显示不了组件-->
    <!--这个router-view标签就是显示我路由里面配置的组件,组件就显示在这个标签的位置-->
    <!--<router-view></router-view>-->

    <!--但是我这么做我没点一次a标签页面就刷新一次,我不想这样怎么办,想要页面没变点击也不刷新-->
    <!--就要用到路由给我们提供的标签router-link,作用和a标签差不多,点击它就会实现跳转,to属性里面放的就是跳转的路径-->
    <!--这个to里面的数据也可以放到data里面-->
    <router-link :to="homeLink">Home</router-link>
    <router-link to="/About">About</router-link>
    <!--利用路由中配置的name属性完成跳转,注意一旦要在字符串里面使用js的表达式,前面就得加:-->
    <router-link :to="{name: 'home'}">About</router-link>
    <!--还的配合着router-view标签使用-->
    <router-view></router-view>
  </div>
</template>

<!--在这里写一个script标签-->
<script>
    export default {
        // 组件的data是一个函数
        data() {
            // 要返回一个对象
            return {
                homeLink: '/'
            }
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
