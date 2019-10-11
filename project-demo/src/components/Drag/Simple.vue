<template>
    <div class="cotainer">
        <draggable v-model="list" tag="ul" class="listSty">
            <li class="item" v-for="(item,i) in list" :key="i">
                {{item.name}}
            </li>
        </draggable>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
    name:'simple',
    components:{
        draggable
    },
    data(){
        return {
           list:[
               {
                   id:'1',
                   name:'userOne'
               },
               {
                   id:'2',
                   name:'userTwo'
               },
               {
                   id:'3',
                   name:'userThree'
               },
               {
                   id:'4',
                   name:'userFour'
               }
           ] 
        }
    }
}
</script>
<style lang="scss" scoped>
    .listSty{
        width:100px;
        box-shadow: 0 0 3px 3px rgba(0,0,0,0.2);
        margin:20px auto;
    }
    .item{
       
        height:50px;
        line-height: 50px;
        border-bottom:1px solid #f4f4f4;
        color: #111;
        text-align: center;
    }
</style>
