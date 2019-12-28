<template>
    <div class="container">
        <div class=""></div>
        <el-link v-for="(item,i) in category" :key="i" class="typeStyle" :underline="false" @click="selectType(item)">{{item.name}}</el-link>
        <div class="main">
            <el-checkbox-group v-model="chooseItem" v-show="chooseItemList.length>0">
                <el-checkbox v-for="(item,i) in chooseItemList" :key="i" :label="item.name" :value="item.id"></el-checkbox>
            </el-checkbox-group>
        </div>
        <ul></ul>
    </div>
</template>
<script>
const apiOne = 'http://jsonplaceholder.typicode.com/comments'
export default {
    name:'filterViews',
    data(){
        return {
            category:[
                {id:0,name:'大类一'},
                {id:1,name:'大类二'},
                {id:2,name:'大类三'},
                {id:3,name:'大类四'},
                {id:4,name:'大类五'},
                {id:5,name:'大类六'}
            ],
            chooseItemList:[],
            chooseItem:[]
        }
    },
    created(){
        this.getAllCategory()
    },
    methods:{
        selectType(params){
            console.log(params,'params==');
        },
        getAllCategory(){
            this.$http.get(apiOne).then((res) => {
                this.category = res.data.splice(0,20)
            })
        },
        getGroupData(data){
            // for (let i = 0; i < data.length; i++) {
                
            // }
            let tempArr = []
            tempArr = data.map((postId)=>{
                
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    *{
        margin:0;
        padding:0;
        list-style: none;
    }
    .container{
        padding:20px;
        .typeStyle{
            margin:0 20px;
        }
        .main{
            margin:20px;
        }
    }
</style>