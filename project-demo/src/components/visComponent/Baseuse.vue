<template>
    <div class="container">
        <div ref="mynetwork " id="mynetwork"></div>
    </div>
</template>
<script>
import vis from 'vis-network'
require('vis-network/dist/vis-network.css')
export default {
    name:'baseUse',
    data(){
        return {
            nodes:null,
            edges:null,
            netWork:null,
        }
    },
    methods:{
        initPicture(){
            this.nodes = new vis.DataSet([
                {id: 1, label: 'Node 1'},
                {id: 2, label: 'Node 2'},
                {id: 3, label: 'Node 3'},
                {id: 4, label: 'Node 4'},
                {id: 5, label: 'Node 5'}
            ])
            this.edges = new vis.DataSet([
                {from: 1, to: 3},
                {from: 1, to: 2},
                {from: 2, to: 4},
                {from: 2, to: 5},
                {from: 3, to: 3}
            ]);
            
            var container = document.getElementById('mynetwork')
            let data = {
                nodes:this.nodes,
                edges:this.edges
            }
            let options = {}
            this.netWork = new vis.Network(container,data,options)
        }
    },
    created(){
        this.$nextTick(()=>{
             this.initPicture()
        })
       
    }
}
</script>
<style lang="scss" scoped>
    
    #mynetwork {
        width:600px;
        height:600px;
        margin:auto;
    }
    
</style>
