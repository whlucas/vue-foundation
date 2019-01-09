export default {
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