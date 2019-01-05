import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

// 把路由里面用到的子组件引入进来
// 组件名一般大写
import Learn from './views/Learn.vue'
import Student from './views/Student.vue'
import About from './views/About.vue'
import Community from './views/Community.vue'

// 引入community组件里面的组件
import Academic from './components/community/Academic'
import Download from './components/community/Download'
import Personal from './components/community/Personal'

Vue.use(Router);

export default new Router({

    mode: 'history',
    base: process.env.BASE_URL,
    // 类名的重命名
    LinkActiveClass: 'active',
    LinkExactActiveClass: 'exact',
    // 把组件加进来
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/student',
            name: 'student',
            component: Student
        },
        {
            path: '/learn',
            name: 'learn',
            component: Learn
        },
        {
            path: '/community',
            name: 'community',
            component: Community,
            // 由于我的这个组件里面还有子路由,所以子路由要在他的这个路由下面配置
            children: [
                {
                    path: '/community/academic',
                    name: 'academic',
                    component: Academic
                },
                {
                    path: '/community/download',
                    name: 'download',
                    component: Download
                },
                {
                    path: '/community/personal',
                    name: 'personal',
                    component: Personal
                },
            ],
        }
    ]
})
