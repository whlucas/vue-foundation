<template>
    <div>
        <!--使用数据池里面的数据的时候可以直接{{storeName}}-->
        <!--还可以这样{{store.state.name}}-->
        添加学生: <!--{{storeName}} {{storeAge}} {{storeLook}} {{a}}-->
        <input type="text" v-model="name">
        <button @click="newStudents({name, number: 1})">确认添加</button>
    </div>
</template>


<script>
    // 引入mapState方法
    // 这个方法有一个返回值,返回值是一个对象
    // 这个对象里面key的value都是函数
    import {mapState, mapActions} from 'vuex'


    export default {
        data() {
            return {
                name: '',
                // 在这里写一个调用vuex中数据池的数据
                // 但是这么定义这个数据池里面的值变化了,这个storeName的值不会变,要用computed定义
                // storeName: this.$store.state.name

                // 我现在有一个需求,当我加入第一条数据的时候怎么显示,加入第二条数据的时候怎么显示,第三条数据的时候怎么显示
                // 实现方法1; 我可以在我这个数据里面定义一个index,添加数据的时候通过条件判断这个index是几来添加不同的数据这样来实现
                // 我这个方法有个缺点就是我改变的数据池里面东西,别的组件还想用就不对了

                // 实现方法二,我在studentList数组里面拿到我这个studentList,然后遍历这个数组,让他生成一个新的数组,然后用这个新的数组来渲染li
                // 这个方法的缺点是,我拿到池里面的东西,改变了,改变之后的数据不在池里面,别的组件拿不到

                // 一般这种情况就是用计算属性来做,那么vuex里面也有类似计算属性的东西getters,这个要在store.js里面设置
            }
        },
        // computed:{
        //     // 用computed来定义变量,让变量值等于我数据池里面的值,就可以实现监听变化的效果
        //     storeName () {
        //         return this.$store.state.name
        //     },
        //     storeAge () {
        //         return this.$store.state.age
        //     },
        //     storeLook() {
        //         return this.$store.state.look
        //     }
        // },

        // 但是我这种方式,三个变量还能写如果太多变量了,且每个组件都要这么写,就很麻烦
        // 有一个mapState的东西
        // 首先需要在上面引入
        // 让这个computed直接就等于我这个方法
        // 这个方法传值传一个数组,数组里面就是我要是用的数据池里面数据名,且在computed里面该数据的数据名也是传到数组里面的值,也就是使用的时候直接{{name}}{{age}}就可以用了,但是传数组有风险,因为当computed里面的数据名和data里面的数据名冲突的时候,data的优先级高
        // computed: mapState(['name', 'age', 'look']),

        // 所以需要改名,要传对象进去
        // computed: mapState({
        //     // 这个key值就是计算属性里面的属性值, value值是一个函数的返回值,函数的参数是state,返回一个state.name
        //     storeName: state => state.name,
        //     storeAge: state => state.age,
        //     storeLook: state => state.look
        // }),
        // 但是我这么写,如果我这个computed要有别的非数据池里面属性怎么办

        // 实现这个conputed里面有些值是从数据池里面拿到的,有些值是自己定义的就得这么写
        computed:{
            // 用扩展运算符把mapState函数返回的对象解构了,就变成了上面的storeName () {
            //         return this.$store.state.name
            //     }这种形式,只不过es6的简写而已,结构了就不是简写的效果,但是是一样的
            ...mapState({
                storeName: state => state.name,
                storeAge: state => state.age,
                storeLook: state => state.look
            }),

            // 这样我就可以继续写别的计算属性了
            a() {
                return 111
            }
        },

        methods: {
            add() {
                // 我这个add函数的功能是给父级传值,传值的方法是触发父级的自定义事件add
                // 由于是双向数据绑定,点击的时候这个name已经有值了,就可以把它传给父级的这个add事件
                // this.$emit('add', this.name);


                // 事件总线的方式
                // 我在Vue的原型上面加了一个bus属性,在这个组件里面的this中可以拿到我的这个属性
                // 当我点击这个按钮的时候触发我这个bus实例的一个事件add
                // this.bus.$emit('add', this.name)

                // vuex的方式
                // 我点击按钮的时候改变我的数据池的这个数据,发现我StudentList里面的视图改了,但是这个组件里面的视图没改
                // 因为我在data里面是将数据池里面的值赋给了storeName,之后这个池的值变化就和storeName没什么关系了,所以这里不能用data绑定,用computed绑定
                // this.$store.state.name = 'shanshan +1'

                // 用vuex实现值的传递
                // 点击的时候改变我数据池里面的值, 往数据池里面的studentList里面添加name值
                // 点击的时候这个name值里面有啥就添加进去
                // this.$store.state.studentList.push(this.name);


                // 但是我这么写是不符合要求的,因为我在外面修改了我数据池里面的值,严格模式要求,修改数据池里面的值只能通过store.js中的mutation
                // 这里通过调用我写在mutation里面的函数实现数据池里面函数的修改
                // 通过commit函数调用,函数里面的参数就是我写在mutation函数里面的名字
                // 第二个参数就是给我这个一个参数指定的函数传参
                // 想传多个参数就把第二个参数写成一个对象
                // this.$store.commit('changeStudent', {name: this.name, number: 1})


                // 为了实现异步的改变数据,需要调用我actions里面的函数
                // this.$store.dispatch('changeStudent', {name: this.name, number: 1})
                // 这个调用可以简写,简写需要调用mapActions,这个mapActions就要独立写在methods下面了
            },
            // 这样写在methods下面就意为着我这个methods下面有一个changeStudent函数,可以直接被标签上面的事件调用,在调用的时候传参,如果我想改名字就传对象
            // ...mapActions(['changeStudent'])
            // ...mapActions({
            //     newStudents: 'changeStudent'
            // }),
            // 同样还有一个mapMutataions,用法和上面的这个...mapActions让自己试试,传参怎么传呢

            // 调用我store.js里面归到students里面的方法
            ...mapActions('student',{
                newStudents: 'changeStudent'
            })
        }
    }
</script>

<style scoped>
    button {
        margin-left: 20px;
        line-height: 25px;
        width: 80px;
    }
</style>