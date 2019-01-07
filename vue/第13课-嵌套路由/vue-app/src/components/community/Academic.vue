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
        // 在这里写一个组件内守卫用于控制这个组件的进出
        beforeRouteEnter(to, from, next) {
            // const answer = confirm('你还没有登录,要登录手才能游览信息,要登录吗');
            // if(answer){
            //     // 如果我点的确定,就跳转到个人中心
            //     next({name: 'personal'}) // 填个路径也没问题
            // }else{
            //     next(false) // 如果点的取消就不让进
            // }

            // 通过路由源信息判断让不让进
            // 这个beforeRouteEnter里面是有没有this信息的,因为执行这个函数的时候我还没有进去这个组件,但是传进来的这个to里面有
            // 这么写有一个问题,就是我的首页也用了我的这个组件,但是我的这个源信息是在communicate组件里面设置的,我to的这个首页里面找不到我的这个信息,只有父子之间才能找,所以这个我们实现不了了,所以就首页就不要使用我们的这个组件了
            const isLogin = to.matched[0].meta.login;

            if(isLogin){
                next();
                return;
            }

            const answer = confirm('你还没有登录,要登录手才能游览信息,要登录吗');
            if(answer){
                // 如果我点的确定,就跳转到个人中心
                next({name: 'personal'}) // 填个路径也没问题
            }else{
                next(false) // 如果点的取消就不让进
            }
        },

        // 写一个在离开这个组件之前执行的函数
        beforeRouteLeave(to, from, next) {
            // 离开的时候问一下是不是要离开, 是就离开
            const answer = confirm('确定要离开吗');
            if(answer) {
                next();
            }else {
                next(false);
            }
        },

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