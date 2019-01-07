<template>
    <div id="app">
        <!--在这个里面写结构-->
        <!--全局的初始化css写在assets文件夹下面的styles文件里面写,写完了在main.js里面引入,每一个组件的样式在组建的内部写-->

        <div class="header">    <!--头部分-->
            <div class="center">  <!--为了居中-->
                <div class="logo">  <!--左边部分-->
                    <img src="./assets/images/logo.png" alt="">
                </div>

                <!--我想让这个导航部分写成ul,li的形式, 需要在router-link标签里面加一个tag属性让他的值是li,这个router-link标签就变成li标签了-->
                <ul class="nav">   <!--右边部分-->
                    <router-link tag="li" to="/home">首页</router-link>
                    <router-link tag="li" to="/learn">课程学习</router-link>
                    <router-link tag="li" to="/student">学员展示</router-link>
                    <router-link tag="li" to="/about">关于</router-link>
                    <router-link tag="li" to="/community">社区</router-link>
                </ul>

            </div>
        </div>
        <router-view class="router-view"/>
        <!--这里可以展示多个组件,没有写name就是默认展示,写name就是展示配置里面配置的组件-->
        <!--<router-view class="router-view" name="academic"/>-->

        <div class="footer"></div>  <!--尾部分-->
    </div>
</template>

<script>
    export default {
        // created() {
        //     this.changeUrl()
        // },
        // methods:{
        //     changeUrl: function(){
        //         // 默认进入首页
        //
        //         // 下面这个会把url分割成["localhost:8080", ""]
        //         // 取出索引1 如果是空字符串就表示这个是默认的启动页面
        //         let hrefSplit = window.location.href.split("/")[3];
        //         console.log(hrefSplit);
        //         if(hrefSplit === ""){
        //             // 如果页面是默认启动页面 就给href加一个后缀home
        //             // location.href就是 http://localhost: 8080/
        //             window.location.href = window.location.href + "home"
        //         }
        //     }
        // }
    }

</script>

<style>
    /*当我点击router-link标签的时候它会给我加上这两个class*/
    /*.router-link-exact-active*/
    /*.router-link-active*/

    /*看看第一个class是什么效果*/
    /*发现点击到router-link标签的时候他就给我加了这么个class,给这个class加样式就可以实现点击的效果变化*/
    /*但是这个class只能添加给一个元素,如果我既想让社区有点击效果,又想让社区里面的某一个router-link有点击效果,这个就不行*/
    /*.router-link-exact-active{*/
        /*border-bottom: 2px solid #fff;*/
    /*}*/

    /*这个首先有一个bug,这个class的实现原理是当前选中的路劲和某一个router-link路劲作比较,他会认为/learn等其他的组件路径是首页/的字路劲,所以首页和其他点击的某一个组件都会被添加上这个样式*/
    /*为了避免这个bug,首页的路径我们不让他是/,改为/home*/
    /*利用这个子路径都会被加上class名的原理,当我们点击community下的子路由的时候二者都会被填上class名*/
    /*也就是说,当我需要父路由和子路由同时都绑上和这个class名的话,子路由的路径必须要是跟着父路由下来的*/
    .active{
        border-bottom: 2px solid #fff;
    }

    /*如果闲这两个类名太长了,可以在router.js里面对这两个类名重命名*/
    /*LinkActiveClass: 'active',*/
    /*LinkExactActiveClass: 'exact',*/


    /*在这个style里面写我这个组件的样式*/
    .header{
        background-color: #000;
        line-height: 70px;
        padding-bottom: 2px;
    }

    .header .center{
        display: flex;
        justify-content: space-between;  /*项目在主轴上的对齐方式*/
        width: 1000px;
        margin: 0 auto;
    }


    .header .center img {
        width: 50px;
        height: 50px;
        vertical-align: middle; /*这个img的对齐方式*/
    }

    .header .center .logo{
        line-height: 70px;
    }

    .header .center ul{
        display: flex;
    }
    
    .header .center ul li {
        color: #fff;
        padding: 0 30px;
        cursor: pointer;
    }
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 150px;
        background-color: #000;
    }
    /*调整组件的样式*/
    .router-view{
        width: 1000px;
        margin: 0 auto;
        padding-top: 40px;
    }
</style>
