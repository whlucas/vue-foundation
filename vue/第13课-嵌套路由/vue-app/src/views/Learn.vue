<template>
    <div>
        <!--课程学习-->
        <course-list></course-list>

        <!--加一个点击跳转按钮-->
        <router-link :to="{name:'changeCourse'}"
                      tag="button"
                      class="change-course-button"
        >
        修改课程
        </router-link>
    </div>
</template>

<script>
    // 引入子组件
    import CourseList from '@/components/learn/CourseList'
    export default {
        // 使用我引入的插件
        components: {
            CourseList
        }
    }
</script>

<style scoped>
    .change-course-button{
        display: block;
        margin: 20px auto;
        width: 200px;
        line-height: 40px;
        background-color: #000;
        color: #fff;
    }
</style>