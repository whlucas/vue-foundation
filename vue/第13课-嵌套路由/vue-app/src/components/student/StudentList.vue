<template>
    <div>
        学生列表: <!--{{this.$store.state.name}}-->
        <ul>
            <!--利用我父级传过来的值循环这个li-->
            <li v-for="(item, index) in student"
                :key="index + item">
                {{index}}-{{item}}
            </li>
        </ul>
    </div>
</template>

<script>

    import {mapState, mapGetters} from 'vuex'


    export default {
        // 接收我父级传过来的变量
        // props: ['student-list']

        // 事件总线的方法
        // 来一个数据
        data () {
            return{
                // studentList:[]
            }
        },

        // 通过计算属性来拿到我数据池里面值
        computed: {
            // ...mapState(['studentList']),

            // 取到我store.js里面归类到student的数据
            ...mapState('student',['studentList']),

            // 拿到我getters里面对studentList修改之后的属性
            // 之后让li遍历我的newStudent数组就可以实现对每一项进行修改然后显示
            // newStudent() {
            //     return this.$store.getters.newStudent
            // }

            // 既然有mapState就肯定有mapGetters来解决我引入数据的麻烦
            // 也是首先要引入
            // 传入数组的形式
            // ...mapGetters(['newStudent'])

            // 他也可以传入对象,传入对象可以改名字,但是和mapState有些不同,key是我起的名字,value直接写在getters里面定义的变量名就可以
            // 最后在li里面传入student
            // ...mapGetters({
            //     student: 'newStudent'
            // })

            // 取到我store.js里面归类到student的数据
            ...mapGetters('student',{
                student: 'newStudent'
            })
        },

        // 在生命周期函数里面监听我别的地方用emit触发的方法
        created () {
            // 用这个on方法来来监听我别的地方用emit触发的add方法,第二个参数是一个函数,里面的参数是我传过来的值,函数内容就是怎么处理
            this.bus.$on('add', name => {
                this.studentList.push(name);
            })
        }
        // 这种方式,当我有很多个组件同时去监听一个组件传值的时候,我每一个组件都要写这么一个监听方法,也很麻烦

        // 那怎么办,就出现了vuex
        // vuex就是一个仓库,有很多个组件都共享着这个仓库的其中某一个数据,当我其中一个组件对这一个数据进行更改的时候,我其他的组件也能立刻获得我更改后的值

        // 我要用vuex就得先安装它
        // 直接在文件目录的命令行敲 vue add vuex就行
        // 发现新出来一个store.js
    }
</script>

<style scoped>

</style>