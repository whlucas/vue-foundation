import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入我这个写好的css文件
import './assets/styles/reset.css'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');




// create vue vue-app
// 自己设置预设,选择上bable和Router
// 使用历史模式
// 包放到package.json里面去
// 要保存这个预设.保存为hasRouter

// 在vscode中添加代码片段
// 首先ctrl shift p 搜索configure 点配置用户代码片段,搜索vue,打开vue.json,在里面预设

// 把home组件删一删
// 配置路由router.js
