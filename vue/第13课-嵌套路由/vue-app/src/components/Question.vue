<template>
    <div>
        问题:{{question}}
    </div>
</template>

<script>
    export default {
        // 生命周期函数里面
        created() {
            const questionId = this.$route.params.id;
            // 找到我传进来的地址对应的数据
            const index = this.questionList.findIndex(item => item.questionId === questionId);

            // 排除一下bug,如果没找到数据的话怎么处理
            if(index === -1){
                // 如果没找到,跳转
                // 用这个go函数跳转,如果填-1,就是跳转到上一个页面,如果填-2就是再上一个页面,0就是刷新
                // this.$router.go(-1); // 让他跳回到上一个页面,但是这个用户体验不好

                // 还有一个方法是repalce方法,参数里面传要去到的页面地址
                // this.$router.replace('/err.html')
                // 还可以根据name值来写这个跳转
                this.$router.replace({name: 'err'});

                // repalce方法的原理: 原来的页面加载顺序是[a,b,c,d],现在我把最新的d换成了e,变成[a,b,c,e],这样返回上一个页面返回的是c

                // 还有一个方式跳转this.$router.push()
                // 这个方法也能实现跳转,但是我点浏览器的回退的时候发现回不去了,点不动了
                // this.$router.push({name: 'err'})

                // push方法的原理
                // 原来是[a, b, c, d],现在是[a, b, c, d, e]
                // 所以他不能回退的原因是从e回退到d,还要走一遍if判断,所以又变成e,造成无法回退的假象
            }else{
                // 给我的数据question赋值
                this.question = this.questionList[index].title;
            }


        },
        // 定义一个对象
        data() {
            return{
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
                ],
                question: ''
            }
        }
    }
</script>

<style scoped>

</style>