<template>
    <div>
        添加学生:
        <input type="text" v-model="name">
        <button @click="add">确认添加</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name: ''
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
                this.bus.$emit('add', this.name)
            }
        }
    }
</script>

<style scoped>
    button{
        margin-left: 20px;
        line-height: 25px;
        width: 80px;
    }
</style>