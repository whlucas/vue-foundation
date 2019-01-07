<template>
    <!--button里面的值通过我拿到的这个路由源信息进行切换的-->
    <button @click="handleClick">{{ loginFlag ? '退出' : '登录'}}</button>
</template>

<script>
    export default {
        // 写一个数据放这个源信息的值
        data() {
            return {
                loginFlag: false
            }
        },

        created() { // 写一个声明周期函数
            // 我们在这个创建好的子组件里面可以拿到他父级里面的路由源信息,利用这个信息来做文章
            // 通过打印this可以看出来这个matched的第0项是父级的信息,第一项就是这个组件的信息了,通过找到父级,拿到里面路由源信息
            console.log(this.$route.matched[0].meta.login);
            this.loginFlag = this.$route.matched[0].meta.login;
        },

        methods: {
            handleClick() {
                // 点击按钮的时候切换路由源信息
                this.loginFlag = !this.loginFlag;
                this.$route.matched[0].meta.login = this.loginFlag;
            }
        }
    }
</script>

<style scoped>

</style>