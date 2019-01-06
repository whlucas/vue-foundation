<template>
    <div class="home">
        <!--之前home组件删一删-->
        <!--home里面用的子组件也删了-->
        首页
    </div>
</template>

<script>


    export default {

    }
</script>

<style scoped>
    /*给这个组件的结构添加样式*/
    /*我如果这样直接给这个div加了颜色,发现其他组件的颜色也变了*/
    /*我想让我添加的样式只能用于我的home组件,在这个style标签上面写一个scoped就行了*/
    div{
        color: red;
    }
</style>
