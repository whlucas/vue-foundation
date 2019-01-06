import Vue from 'vue'
import App from './App.vue'
// 我不引入我配置好的router.js,我自己配置
import router from './router'

Vue.config.productionTip = false;

// 不用我自己配置的这个,从./router.js引入路由的配置

// // 我从包里面引入路由
// import Router from 'vue-router'
// // 导入Home组件,这里可以不写后缀
// import Home from './views/Home'
// import About from './views/About'
//
// Vue.use(Router); //让vue使用这个路由
//
// // 配置路由
// const myRouter = new Router({
//     // 路径
//     routes: [
//         {
//             path: '/',  // /代表根目录localhost/#/   如果他不是/ 是/aaa,那么我只有输入localhost/#/aaa他才能显示这个组件
//             component: Home, // 定义一个路径,就得写一个对应路径下需要显示的组件
//             name: 'home' // 这个路由还有一个属性name,还可以通过这个name值来进行跳转
//         },
//         {
//             path: '/about', // /about代表localhost/#/
//             component: About,
//             name: 'about'
//         }
//     ],
//     // 为了让路径里面没有#/,这里要配置一下
//     mode: 'history' // 这样路径里面就没有#/
// });

new Vue({
    router,
    // router: myRouter,  // 配置好了需要让vue使用这个路由
    render: h => h(App)
}).$mount('#app');


// router  路由 即页面跳转
// 创建一个项目vue-app
// 使用这个路由就要先安装一下
// cli2 用的是 npm install vue-router -S
// 现在用vue add router 也是直接在cmd里面输入这个安装
// 他问我这个Use history mode for router 选择no

// 安装好之后多出来一个views文件夹,和router.js文件
// npm run serve 运行一下,发现在最上面多出来一个home和about,点这个可以切换组件,切换的组件放到views文件夹里面
// router.js就是关于路由的配置
// main.js里面多了一样引入路由

// 我在这里不用我router.js文件里面配置好的东西,我在这里自己配置,配置好了去App.vue里面使用,这里配置是给主页面配置的,主页面用的就是我这个App.vue这个组件


