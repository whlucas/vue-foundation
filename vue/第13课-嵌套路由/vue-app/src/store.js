// 首先引入
import Vue from 'vue'
import Vuex from 'vuex'

// 然后使用Vuex
Vue.use(Vuex);

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
        studentList: []
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
    }
})
