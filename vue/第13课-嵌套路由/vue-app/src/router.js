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

// 引入动态路由
import Question from './components/Question'

// 引入一个出错的页面
import Err from './components/Error'

Vue.use(Router);

export default new Router({

    mode: 'history',
    base: process.env.BASE_URL,
    // 类名的重命名
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact',
    // 把组件加进来
    routes: [
        // 我想让他一进来就是首页
        {
            path: '*', // 任何我没写过的页面都跳转
            // redirect: '/home',
            // 这个重定向redirect还可以是一个函数
            redirect(to){ // 这个to是一个对象,里面有很多属性
                if(to.path === '/'){ // to.path就是我输入的路径
                    return '/home' // 如果这个路径是/ 就重定向到/home
                }else{
                    return{name: 'err'} // 如果是乱输入的就重定向到错误提示页面
                }
            }
        },
        {
            path: '/home',
            name: 'home',
            // 如果我想让这个组件在显示的时候显示多个组件,让这个components变成复数,后面是一个对象,在这里配置好了以后利用多个router-view标签实现
            components: {
                default: Home, // 默认显示Home
                'academic': Academic // 还可以显示一个academic组件
            }
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
            // 这个是重定向属性,当我访问/community的时候,就直接访问这个里面我定义的属性
            redirect: '/community/academic',
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
        },

        // 这里配置一个动态路由
        {
            // 加了:id之后只要question/后面加了数字,就会跳到我这个组件下
            // 这里为什么之前的Community组件没了,是和路径有关系
            path: '/question/:id',
            name: 'question',
            component: Question
        },

        // 配置一个出错显示的页面
        // 直接让路径是err.html,这样就让别人以为是进入了一个别的网站,骗个人
        {
            path: '/err.html',
            name: 'err',
            component: Err
        }
    ]
})
