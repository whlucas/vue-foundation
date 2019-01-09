<template>
    <ul id="course-list">
        <li v-for="item in courseList"
            :key="item.name"
            class="course"
        >
            <img :src="item.poster" alt="" class="poster">
            <p class="title">{{item.name}}</p>
            <div class="course-info">
                <div class="price" v-if="item.price > 0">￥{{item.price}}</div>
                <div class="price free" v-else>免费</div>
                <div class="institution">渡一教育</div>
            </div>
        </li>
    </ul>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        computed: {
            // 用mapState的方式引入数据池里面的数据
            // ...mapState(['courseList']),

            // 当我在store.js里面把数据都分成模块了,再想取到里面的数据
            // 传统方式的这么写,在state后面加一个我这个模块的名字
            // courseList(){
            //     return this.$store.state.course.courseList
            // },
            // 用mapState的方式要这么写,如果不写前面模块的名字,找的就是根store里面的数据
            ...mapState('course',['courseList'])
        }
    }
</script>

<style scoped>
    #course-list{
        display: flex;
        flex-wrap: wrap; /*换行*/
        justify-content: space-between; /*弹性盒子布局*/
        font-size: 14px;
    }
    .course {
        width: 220px;
        padding: 10px;
        border: 1px solid transparent; /*这里先给他一个border设置为透明,然后hover的时候给他一个颜色,如果hover的时候直接给他一个border的话会出现闪动*/
        margin-bottom: 20px;
    }

    .course:hover{
        border-color: #ddd;
        box-shadow: 1px 1px 2px 1px #ECECEC
    }

    .poster{
        width: 220px;
        height: 124px;
    }

    .title{
        color: #333;
        margin: 5px 0;
        min-height: 40px; /*这里设置一个min-height是因为我想要让这个title一行和两行占用的高度是一样的,如果没有这个min-height当title是一行的时候下面那一行就会窜上去,使li的高度不一致,我们要保持li高度的一致*/
    }
    .title:hover{
        color: #63b4f7;
    }

    .course-info{
        display: flex;
        justify-content: space-between; /*两边对齐*/
    }
    .price{
        color: #e85308
    }
    .price.free{
        color: #5fb41b;
    }
    institution{
        color: #999;
    }

</style>