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
    methods:{
        selectType(params){
            console.log(params,'params==');
            switch (params.id) {
                case 0: this.chooseItemList = [
                            {id:0,name:'大类一种的小类1'},
                            {id:1,name:'大类一种的小类2'},
                            {id:2,name:'大类一种的小类3'},
                            {id:3,name:'大类一种的小类4'},
                            {id:4,name:'大类一种的小类5'},
                            {id:5,name:'大类一种的小类6'}
                        ]
                    break;
                case 1:this.chooseItemList = [
                            {id:0,name:'大类二中的小类1'},
                            {id:1,name:'大类二中的小类2'},
                            {id:2,name:'大类二中的小类3'},
                            {id:3,name:'大类二中的小类4'},
                            {id:4,name:'大类二中的小类5'},
                            {id:5,name:'大类二中的小类6'}
                        ]
                    break;
                case 2: this.chooseItemList = [
                            {id:0,name:'大类三中的小类1'},
                            {id:1,name:'大类三中的小类2'},
                            {id:2,name:'大类三中的小类3'},
                            {id:3,name:'大类三中的小类4'},
                            {id:4,name:'大类三中的小类5'},
                            {id:5,name:'大类三中的小类6'}
                        ]
                    break;
                case 3: this.chooseItemList = [
                            {id:0,name:'大类四中的小类1'},
                            {id:1,name:'大类四中的小类2'},
                            {id:2,name:'大类四中的小类3'},
                            {id:3,name:'大类四中的小类4'},
                            {id:4,name:'大类四中的小类5'},
                            {id:5,name:'大类四中的小类6'}
                        ]
                    break;
                case 4:this.chooseItemList = [
                            {id:0,name:'大类五中的小类1'},
                            {id:1,name:'大类五中的小类2'},
                            {id:2,name:'大类五中的小类3'},
                            {id:3,name:'大类五中的小类4'},
                            {id:4,name:'大类五中的小类5'},
                            {id:5,name:'大类五中的小类6'}
                        ]
                    break;
                case 5:this.chooseItemList = [
                            {id:0,name:'大类六中的小类1'},
                            {id:1,name:'大类六中的小类2'},
                            {id:2,name:'大类六中的小类3'},
                            {id:3,name:'大类六中的小类4'},
                            {id:4,name:'大类六中的小类5'},
                            {id:5,name:'大类六中的小类6'}
                        ]
                break;
            }
            
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