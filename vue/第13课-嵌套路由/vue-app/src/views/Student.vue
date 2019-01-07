<template>
    <!--这个组件里面要实现一个非父子组件传值的功能-->
    <div>
        <!--学员展示-->
        <!--第一种方式-->
        <!--原理是我这个组件给父级传值,然后父级再给他的另一个组件传值-->
        <!--这个add就是我子组件为了传值触发父级的add事件-->
        <!--<add-student @add="add"></add-student>-->
        <!--把我接收过来的值放到一个数组里面传到下面这个组件里面-->
        <!--<student-list :student-list="studentList"></student-list>-->
        <!--但是这种方式,有一个缺点,当子集很多,层级很深的时候会非常麻烦-->

        <!--所以就有了第二种方法:事件总线,该方法直接调用,不用父级传值-->
        <!--这个事件总线需要在main.js里面定义-->
        <add-student></add-student>
        <student-list></student-list>
    </div>
</template>

<script>
    // 本来是可以这么import
    // import AddStudent from '../components/student/AddStudent'
    // 这里可以使用@代表drc文件夹,然后继续往下写
    import AddStudent from '@/components/student/AddStudent'
    import StudentList from '@/components/student/StudentList'
    // 这里只需要引入,具体组件里面啥样在相应的子组件里面写
    export default {
        // 我要是用组件的有一个components,里面加载我需要的组件
        components: {
            AddStudent,
            StudentList
        },
        data() {
            return {
                studentList: [] // 储存传过来的值的数组
            }
        },
        methods: {
            // 这个name就是我子组件传过来的这个参数
            add(name) {
                // 执行这个add事件就往数组里面添加我传过来的值
                this.studentList.push(name);
            }
        }
    }
</script>

<style scoped>

</style>