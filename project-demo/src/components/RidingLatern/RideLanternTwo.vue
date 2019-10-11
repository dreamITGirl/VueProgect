<template>
    <div class="contaienr">
        <div class="headSty">
            <p v-for="(val,i) in headerList" :key="i" >{{val}}</p>
        </div>
       <vue-seamless-scroll :data="scrollList" class="seamless-warp" :class-option="optionSingleHeightTime">
            <ul class="item">
                <li v-for="(item,i) in scrollList" :key="i" >
                    <p>{{item.name}}</p>
                    <p>{{item.count}}</p>
                    <p>{{item.price}}</p>
                    <p>{{item.totalPrice}}</p>
                </li>
            </ul>
        </vue-seamless-scroll>
    </div>
</template>
<script>
export default {
    name:'rideLanternTwo',
    data(){
        return {
            headerList:['商品','数量（斤）','单价（元）','金额（元）'],
            scrollList:[]
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            this.$http.get('/json/data.json').then((res) => {
                console.log(res,'====');
                this.scrollList = res.data.response
            }).catch((err) => {
                
            });
        }
    },
    computed:{
        optionSingleHeightTime (){
            return {
                step:0.5
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .contaienr{
        padding:5px 10px;
        .headSty{
            padding: 10px;
            width: 15vw;
            height:30px;
            line-height: 30px;
            margin:15vw auto 0 auto;
            display:flex;
            justify-content: space-between;
            background: rgba(34, 167, 240, 0.8);
            border-bottom: 1px solid #dddddd;
            p{
                width:25%;
                text-align:center;
            }
        }
        .seamless-warp{
            padding: 10px;
            width: 15vw;
            height:200px;
            margin:0 auto;
            overflow: hidden;
            background: rgba(34, 167, 240, 0.8);
            li{
                line-height: 30px;
                font-size: 14px;
                color: #212121;
                cursor: pointer;
                display:flex;

                p{
                    width:25%;
                    text-align:center;
                }
            }
        }
    }
</style>