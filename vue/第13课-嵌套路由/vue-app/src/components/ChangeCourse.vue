<template>
    <div>
        <div class="change-area" v-if="isChanging">
            <div class="box">
                <label for="">课程名称:</label>
                <input type="text" v-model="title">
            </div>
            <div class="box">
                <label for="">课程价格:</label>
                <input type="text" v-model="price">
            </div>
            <button class="confirm-btn"
                    @click="confirm"
            >
                提交修改
            </button>
        </div>

        <template v-else> <!--这个标签不会显示在结构里面-->
            <ul class="course-area">
                <li v-for="(item, index) in courseList"
                    :key="item.name"
                    class="course"
                >
                    {{item.name}} {{item.price}}
                    <button class="change-button"
                            @click="change(index)"
                    >
                        点击修改
                    </button>
                </li>
            </ul>

            <!--这里由于已经配置过learn组件的路由了,就可以直接让他跳转到learn,不用配置了-->
            <router-link tag="button"
                         class="change-over"
                         :to="{name: 'learn'}"
            >
                已全部修改完成
            </router-link>
        </template>

    </div>


</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data(){
            return{
                // 用这个数据来控制两块结构的显示与隐藏
                isChanging: false,
                // 用双向数据绑定实现input框里面的值跟随我点击的那条数据变化
                title: '',
                price: 0,
                // 存放我点击时候的index
                index: 0
            }
        },
        computed: {
            // ...mapState(['courseList'])
            // 取到我store.js里面归类到course的数据
            ...mapState('course',['courseList'])
        },
        methods:{
            // 利用我点击的时候传回来的index,修改这个组件里面的数据的值,从而改变input框里面的值
            change(index){
                this.isChanging = true; // 切换视图
                // 我的这个courseList数据是用mapState里面取的
                const course = this.courseList[index];
                this.title = course.name;
                this.price = course.price;
                this.index = index;
            },

            // 提交修改,改变数据池里面的值
            confirm() {
                const name = this.title;
                const price = this.price;
                const index = this.index;
                // this.$store.commit('changeCourse', {index, name, price});
                // 调用我store.js里面归到course里面的方法
                this.$store.commit('course/changeCourse', {index, name, price});
                this.isChanging = false; // 然后切换视图
            }
        }
    }
</script>

<style scoped>
    .course-area{
        margin-bottom: 20px;
    }
    .course{
        max-width: 600px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
    }
    .course:last-of-type{ /*取消最后一个的下划线*/
        border: none;
    }
    .change-button{
        background-color: #000;
        color: #fff;
        font-size: 12px;
        padding: 5px;
        margin-left: 10px;
    }
    .change-area {
        display: inline-block;
    }
    .change-area .box{
        margin-bottom: 10px;
    }
    .change-area input{
        width: 528px;
        padding: 4px;
        border: 1px solid #e5e5e5;
    }
    .change-area input:hover{
        border-color: #9a9a9a;
    }
    .confirm-btn{
        display: block;
        margin: 0 auto;
        width: 200px;
        line-height: 30px;
        background-color: #000;
        color: #fff;
    }
    .change-over{
        background-color: #000;
        color: #fff;
        padding: 10px 20px;
    }
</style>