<template>
    <ul>
        <!--这里设置动态路由,需要在:to后面在加一个属性是param,把id加上,这个id的属性值就是拼接在地址后面的数字-->
        <router-link v-for="item in questionList"
                     :key="item.questionId"
                     tag="li"
                     :to="{name: 'question', params:{id: item.questionId}}">

                     {{item.title}}
        </router-link>
    </ul>
</template>

<script>
    export default {
        // 在这个组件里面定义一个数据用于布局
        data() {
            return {
                questionList: [
                    {
                        questionId: 201801,
                        title: '到底什么是es6中的class（类）？怎么实现class（类）？'
                    },
                    {
                        questionId: 201802,
                        title: '什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？'
                    },
                    {
                        questionId: 201803,
                        title: '什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    ul{
        margin-top: 20px;
    }
    li{
        line-height: 30px;
    }
</style>