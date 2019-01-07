import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

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

// 当我的Home插件以这种形式引入的时候就是一个懒加载,当我用到这个页面的时候在加载这个组件
// 当我们把所有的引入都用这种懒加载的形式的时候,我首次加载页面所需要加载文件内容就很小,就能实现首页更快的加载
// 实现这个懒加载的时候,浏览器会把各个模块所需要的东西进行预加载,就是利用浏览器空闲的时间加载到缓存里面去,当我再想要用这些组件的时候就从缓存里面去拿,就会很快
const Home = () => import('./views/Home');

Vue.use(Router);

// 这里让这个实例传给一个对象,因为我之后要用到这个实例的方法,然后在最下面把他导出
const router =  new Router({

    mode: 'history',
    base: process.env.BASE_URL,
    // 类名的重命名
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact',
    // 把组件加进来
    routes: [
        // 我想让他一进来就是首页
        // 方法一:重定向
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

        // 方法二,路由别名
        {
            // 我想让路径是/的时候显示home组件,但是这样的话,当路径是/home的时候就不好使了
            // path: '/',
            // alias: '/home', // 这样给他起一个别名,当我访问/home路径的时候也能使home组件
            // 但是我这个方法不适用于我这个项目,因为当我访问首页的时候路径里面没有/home则添加不上class类名,则没有选中的样式
            path: '/home',
            name: 'home',
            // 如果我想让这个组件在显示的时候显示多个组件,让这个components变成复数,后面是一个对象,在这里配置好了以后利用多个router-view标签实现
            components: {
                default: Home, // 默认显示Home
                // 'academic': Academic // 还可以显示一个academic组件
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
            // 这里给这个路由配置一个路由源信息
            // 这个信息可以在他自己的这个路径下来取,还可以在他的子组件里面取
            meta:{
                login: false
            },

            // 由于我的这个组件里面还有子路由,所以子路由要在他的这个路由下面配置
            children: [
                {
                    // path: '/community/academic',
                    // 这里我不想写这么一长串路径,就可以直接写一个academic
                    // 我这么写他就会默认我这个路径是跟在我父级路径/community后面的
                    // 但是注意前面不能加/,加了/就会认为他是跟在根目录后面的
                    path: 'academic',
                    name: 'academic',
                    component: Academic,
                    // 路由独享守卫
                    // 这个守卫有一个缺陷,就是我这里控制了这个口的进入,但是这个组件还可能在其他的组件里面有显示,但是这个口就管不到了
                    // 这个时候就可以在这个组件里面写一个组件内守卫
                    // beforeEnter(to, from, next){ // 三个参数和下面的全局守卫意思一样
                    //     // 这里就不用判断路径了,因为直接设置在这个路由里面了
                    //     const answer = confirm('你还没有登录,要登录手才能游览信息,要登录吗');
                    //     if(answer){
                    //         // 如果我点的确定,就跳转到个人中心
                    //         next({name: 'personal'}) // 填个路径也没问题
                    //     }else{
                    //         next(false) // 如果点的取消就不让进
                    //     }
                    // }
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
});

// 导航守卫

// 1.全局守卫
// 这个beforeEach方法里面的参数是一个函数,这个函数有三个参数
// to: 要到哪去 就是我马上要去的地址
// from: 从哪来 和从哪个页面跳转的地址
// router.beforeEach( (to, from, next) => {
//     // next(); // 这样就表示你可以直接进去了
//     // next(false); // 从哪来的都不让进
//
//     // 就可以通过to,和from里面的属性进行条件拦截
//     if(to.path === '/community/academic'){  // 因为在community里面加了一个重定向,去community就相当于去/community/academic
//         // alert('去社区');
//         // confirm是确认对话框,answer里面装的是确定还是否定
//         const answer = confirm('你还没有登录,要登录手才能游览信息,要登录吗');
//         if(answer){
//             // 如果我点的确定,就跳转到个人中心
//             next({name: 'personal'}) // 填个路径也没问题
//         }else{
//             next(false) // 如果点的取消就不让进
//         }
//     }else{
//         next() // 点其他的就直接进去
//     }
// } );

// 但是发现我这个全局守卫就很傻,因为我每进一个组件他都要问一下,其实就只有一个组件需要问一下而已

// 还有一种守卫是路由独享守卫,是放在某一个路由里面的


export default router;