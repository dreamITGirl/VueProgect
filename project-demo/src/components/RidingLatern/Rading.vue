<template>
    <!-- 用于实现文字向上无缝滚动，鼠标移入时滚动暂停，移出后，滚动继续 -->
    <div class="container">
        <vue-seamless-scroll :data="scrollList" class="seamless-warp">
            <ul class="item">
                <li v-for="(item,i) in scrollList" :key="i" >
                    <span v-text="item.content"></span>
                </li>
            </ul>
        </vue-seamless-scroll>
    </div>
</template>
<script>
export default {
    name:'ridingLantern',
    data(){
        return {
            scrollList:[],
            position:null
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            let url = '/json/lantern.json'
            this.$http.get(url).then((res) => {
                console.log(res);//可以输出看一下
                this.scrollList = res.data.response
            })
        },
        
    }
}
</script>
<style lang="scss" scoped>
    // @keyframes moveOne {
    //     0%{
    //         transform: translateY(0)
    //     }
    //     100%{
    //         transform: translateY(-240px)
    //     }
    // }
    ul{
        list-style: none;
        margin:0;
        padding:0;
    }
    .container{
        padding:10px;
        text-align: center;
        .seamless-warp{
            width:400px;
            height:200px;
            margin:15vw auto;
            overflow: hidden;
            background: rgba(34, 167, 240, 0.8);
            li{
                padding: 10px;
                line-height: 2;
                font-size: 14px;
                color: #212121;
                cursor: pointer;
            }
        }
    }
</style>