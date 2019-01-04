// 从包里面引入vue
import Vue from 'vue'

// 引入App这个组件
import App from './App.vue'

Vue.config.productionTip = false

// 创建一个vue实例,把他挂到主页面的那个div#app上面
new Vue({
    // 这里使用es6写的
    // render: h => h(App),

    // 把他转成es5方便理解
    render: function (h) {
       // 把这个组件传到render接收的这个h函数里面进行渲染
       return h(App);
    }
}).$mount('#app');
