// 首先引入
import Vue from 'vue'
import Vuex from 'vuex'

// 然后使用Vuex
Vue.use(Vuex);


// 我现在很多功能里面的数据以及方法都是放在一起的,太混乱,怎么样把他们分离开
// 我把关于我这个student组件里面用到的数据和方法都放到我的这个对象里面
const student1 = {
    // 开头要加一个命名空间的设置,要不然用mapState等map的方法找不到,注意s小写
    namespaced: true,
    state:{
        studentList: [],
    },
    getters:{
        // 相当于计算属性
        // 通过数据池里面的某一个值来进行修改然后得到一个新的值
        // 我需要遍历我state里面的studentList,首先要拿到这个值
        // 这个函数里面可以传一个state,通过这个值来拿
        // 他可以接收第二个参数,我可以通过这个第二个参数拿到我在getters里面定义的其他变量
        newStudent (state, getters) {
            // 遍历我拿到的数组,改变值返回一个新的数组
            return state.studentList.map((item,index) => {
                // 通过判断index,来决定我的输出是什么样的
                if(index === 0){
                    return '**' + item + getters.a
                }else if(index < 3){
                    return item + '**'
                }else{
                    return '++' + item + '++'
                }
            })
        },
        // 这里定义好值了以后在studentList组件里面使用
        a() {
            return 111
        }
    },
    mutations:{
        changeStudent(state, {name, number}) {

            state.studentList.push(name + number)


            // 我现在有一个需求是等个1秒再push一下
            // 这样就不行了,因为我这个时候修改state就不是在mutation里面的函数作用域下修改的了,就是在这个setTimeout函数里面修改的了
            // setTimeout( () => {
            //     state.studentList.push(name + number)
            // },1000)
        },
    },
    actions:{
        changeStudent (ctx, {name, number}) {
            // 在这个里面想用异步就可以异步了
            setTimeout(() => {
                // 在这个里面就是这么来触发我mutations里面changeStudent函数,同样需要传参数
                ctx.commit('changeStudent', {name, number})
            },1000)
        }
    }
};

// 在定义一个course组件的对象,里面放course组件里面用到的东西
const course1 = {
    namespaced: true,
    state:{
        courseList: [
            {
                name: 'Web前端开发之JavaScript(Js)精英课堂【渡一教育】',
                price: 9.9,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBsSud06XlZnJACsTWd7OSA5phIFPRTNibFBeuT8jRjy00Jb5ticSEKYUnpUYdBCicH2U/356'
            },
            {
                name: 'Web前端开发之HTML+CSS精英课堂【渡一教育】',
                price: 68,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBDFLdArBwf70PjMrL6bq0OI9LesEsskk1iamJKibriaic0QkBZhINoDuN0DicaojkqyQjk/356'
            },
            {
                name: '淘宝商城项目实战开发【渡一教育】',
                price: 398,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDBpXKL1sgAOKcbSz0Od2abiaqdJibiaDDQWfmrVNBCFrIpbTQKlNyWbPg5Uo1dnT7Znk/356'
            },
            {
                name: '零基础WEB前端入门',
                price: 9.9,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCRlDgtxVbmyclxP9fDUYmnuqAFbN5mYsncrPrVyQbtA3fNfuZ3qicSe1r7Ppt7tICs/356'
            },
            {
                name: 'React顶级企业实战，全流程制作淘票票WebApp【渡一教育】',
                price: 399,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLB2CyXIxsb8iaAUibBB9mzlkSgKNU7GiciaYxG1SicoLjkiahZ3ia54eZWbtCGDkFyvMo0uKk/356'
            },
            {
                name: '原生JS贪吃蛇游戏实战开发【渡一教育】',
                price: 19,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCfsOGnxjhUXFA6SHMOu0fMUicuucRlIVNo9zBnnLiacovMnePD6586QlRj2qvwudbn8/356'
            },
            {
                name: '原生JS扫雷游戏实战开发【渡一教育】',
                price: 38,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDaTljUSVGk2eqS1MCT3DwDqxgs7KhfMf3411SXQkRvmiaicIuz47ydO27zGPWK97wicw/356'
            },
            {
                name: '你不知道的Javascript【渡一教育】',
                price: 55,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCelo2lyibtrxDia7aq7tC0LE1Lcz2LVoDqhQy5tnOHicTzWhLuvPekL35rEmwTdgNuwI/356'
            }
        ]
    },
    mutations:{
        changeCourse(state, {index, name, price}){
            state.courseList[index].name = name;
            state.courseList[index].price = price;
        }
    }
};
// 我把所有的对象都写到这一个文件夹也不好,太多了
// 所以新建一个modules文件夹,里面定义一些js文件用来放这些对象,然后把对象导出,在这里引入就行
import student from '@/modules/student';
import course from '@/modules/course';




// 创建一个vuex的实例 注意创建实例的时候要Vuex.Store
export default new Vuex.Store({
    // 当我整一个开启严格模式的时候发现就报错了,因为我在组件外面修改了我这个数据池里面的值
    strict: true,

    state: {
        // 这是一个公共数据池,组件里面都可以用到这个数据池的内容,一个组件对数据进行修改,其他组件都会相应这数据的修改
        // 这个里面定义一个name值
        name: 'shanshan',
        age: 18,
        look: 'beautiful',

        // 用这个vuex实现组件之间的的传值
        studentList: [],

        // 课程列表数据
        courseList: [
            {
                name: 'Web前端开发之JavaScript(Js)精英课堂【渡一教育】',
                price: 9.9,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBsSud06XlZnJACsTWd7OSA5phIFPRTNibFBeuT8jRjy00Jb5ticSEKYUnpUYdBCicH2U/356'
            },
            {
                name: 'Web前端开发之HTML+CSS精英课堂【渡一教育】',
                price: 68,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBDFLdArBwf70PjMrL6bq0OI9LesEsskk1iamJKibriaic0QkBZhINoDuN0DicaojkqyQjk/356'
            },
            {
                name: '淘宝商城项目实战开发【渡一教育】',
                price: 398,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDBpXKL1sgAOKcbSz0Od2abiaqdJibiaDDQWfmrVNBCFrIpbTQKlNyWbPg5Uo1dnT7Znk/356'
            },
            {
                name: '零基础WEB前端入门',
                price: 9.9,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCRlDgtxVbmyclxP9fDUYmnuqAFbN5mYsncrPrVyQbtA3fNfuZ3qicSe1r7Ppt7tICs/356'
            },
            {
                name: 'React顶级企业实战，全流程制作淘票票WebApp【渡一教育】',
                price: 399,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLB2CyXIxsb8iaAUibBB9mzlkSgKNU7GiciaYxG1SicoLjkiahZ3ia54eZWbtCGDkFyvMo0uKk/356'
            },
            {
                name: '原生JS贪吃蛇游戏实战开发【渡一教育】',
                price: 19,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCfsOGnxjhUXFA6SHMOu0fMUicuucRlIVNo9zBnnLiacovMnePD6586QlRj2qvwudbn8/356'
            },
            {
                name: '原生JS扫雷游戏实战开发【渡一教育】',
                price: 38,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDaTljUSVGk2eqS1MCT3DwDqxgs7KhfMf3411SXQkRvmiaicIuz47ydO27zGPWK97wicw/356'
            },
            {
                name: '你不知道的Javascript【渡一教育】',
                price: 55,
                poster: 'https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCelo2lyibtrxDia7aq7tC0LE1Lcz2LVoDqhQy5tnOHicTzWhLuvPekL35rEmwTdgNuwI/356'
            }
        ]
    },

    getters: {
        // 相当于计算属性
        // 通过数据池里面的某一个值来进行修改然后得到一个新的值
        // 我需要遍历我state里面的studentList,首先要拿到这个值
        // 这个函数里面可以传一个state,通过这个值来拿
        // 他可以接收第二个参数,我可以通过这个第二个参数拿到我在getters里面定义的其他变量
        newStudent (state, getters) {
            // 遍历我拿到的数组,改变值返回一个新的数组
            return state.studentList.map((item,index) => {
                // 通过判断index,来决定我的输出是什么样的
                if(index === 0){
                    return '**' + item + getters.a
                }else if(index < 3){
                    return item + '**'
                }else{
                    return '++' + item + '++'
                }
            })
        },
        // 这里定义好值了以后在studentList组件里面使用
        a() {
            return 111
        }
    },

    // 严格模式要求,修改我这个数据池里面的值必须要在下面的这个mutation里面修改
    mutations: {
        // 我在这个里面定义一个函数,通过这个函数修改我state里面的值
        // 通过这个函数里面传的第一个参数state来得到我数据池里面的值
        // 第二个参数,接收外面给他传的参
        // 想接收多个参数就把第二个参数写成一个对象
        changeStudent(state, {name, number}) {

            state.studentList.push(name + number)


            // 我现在有一个需求是等个1秒再push一下
            // 这样就不行了,因为我这个时候修改state就不是在mutation里面的函数作用域下修改的了,就是在这个setTimeout函数里面修改的了
            // setTimeout( () => {
            //     state.studentList.push(name + number)
            // },1000)
        },


        // 课程列表组件里面修改数据的函数
        changeCourse(state, {index, name, price}){
            state.courseList[index].name = name;
            state.courseList[index].price = price;
        }
    },

    // 一旦涉及到异步触发我mutation里面的函数,就要写在这个actions里面
    // 这个里面也是一个一个的函数
    actions: {
        // 这个传的参ctx可以把它看成一个store对象,这个在外面触发这个store里面的函数是$store.commit(),在这个里面就直接用第一个参数调用就好了
        // 第二个参数传参
        changeStudent (ctx, {name, number}) {
            // 在这个里面想用异步就可以异步了
            setTimeout(() => {
                // 在这个里面就是这么来触发我mutations里面changeStudent函数,同样需要传参数
                ctx.commit('changeStudent', {name, number})
            },1000)
        }
    },
    // 为了把不同功能的东西分离开,在上面定义了对象,把不同的功能放到不同的对象里面去
    // 在这个里面写一个这个属性
    modules:{
        // 怕看不明白就没简写
        // 这里面申明的对象就可以像store一样使用了
        course: course,
        student: student
    }


})



