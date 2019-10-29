<template>
    <div class="container">
        <ul class="list">
            <li class="item" v-for="(item,i) in dataList" :key="i">
                <p>name是{{item.name}}</p>
                <p>按照这个从小到大的顺序排列的{{item.airport}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'bubbleSort',
    data(){
        return {
            dataList:[
                {
                    "airport": "port19",
                    "name": "172.20.8.2",
                    "type": "h3c_s6800",
                    "traffic": 1658569432,
                    "timestamp": "2019-10-25T18:08:17"
                }, {
                    "airport": "port20",
                    "name": "172.20.8.6",
                    "type": "h3c_s6800",
                    "traffic": 2932417608,
                    "timestamp": "2019-10-25T18:08:17"
                }, {
                    "airport": "port21",
                    "name": "172.20.8.10",
                    "type": "h3c_s6800",
                    "traffic": 1012432360,
                    "timestamp": "2019-10-25T18:08:16"
                }, {
                    "airport": "port13",
                    "name": "172.20.6.2",
                    "type": "h3c_s6800",
                    "traffic": 202090704,
                    "timestamp": "2019-10-25T18:08:17"
                }, {
                    "airport": "port14",
                    "name": "172.20.6.6",
                    "type": "h3c_s6800",
                    "traffic": 470777512,
                    "timestamp": "2019-10-25T18:08:17"
                }, {
                    "airport": "port15",
                    "name": "172.20.6.10",
                    "type": "h3c_s6800",
                    "traffic": 426010824,
                    "timestamp": "2019-10-25T18:08:16"
                }, {
                    "airport": "port16",
                    "name": "172.20.7.2",
                    "type": "h3c_s6800",
                    "traffic": 58514448,
                    "timestamp": "2019-10-25T18:08:16"
                }, {
                    "airport": "port17",
                    "name": "172.20.7.6",
                    "type": "h3c_s6800",
                    "traffic": 146125912,
                    "timestamp": "2019-10-25T18:08:15"
                }, {
                    "airport": "port18",
                    "name": "172.20.7.9",
                    "type": "h3c_s6800",
                    "traffic": 105089696,
                    "timestamp": "2019-10-25T18:08:16"
                }, {
                    "airport": "port7",
                    "name": "172.20.3.5",
                    "type": "h3c_s6800",
                    "traffic": 160393064,
                    "timestamp": "2019-10-25T18:08:16"
                }, {
                    "airport": "port8",
                    "name": "172.20.3.11",
                    "type": "h3c_s6800",
                    "traffic": 73806536,
                    "timestamp": "2019-10-25T18:08:14"
                }, {
                    "airport": "port9",
                    "name": "172.20.4.5",
                    "type": "h3c_s6800",
                    "traffic": 92208240,
                    "timestamp": "2019-10-25T18:08:15"
                }, {
                    "airport": "port10",
                    "name": "172.20.5.2",
                    "type": "h3c_s6800",
                    "traffic": 7400,
                    "timestamp": "2019-10-25T18:08:17"
                }, {
                    "airport": "port11",
                    "name": "172.20.5.6",
                    "type": "h3c_s6800",
                    "traffic": 5896,
                    "timestamp": "2019-10-25T18:08:16"
                }, {
                    "airport": "port12",
                    "name": "172.20.5.10",
                    "type": "h3c_s6800",
                    "traffic": 6408,
                    "timestamp": "2019-10-25T18:08:14"
                }, {
                    "airport": "port1",
                    "name": "172.20.1.2",
                    "type": "h3c_s6800",
                    "traffic": 7512,
                    "timestamp": "2019-10-25T18:08:17"
                }, {
                    "airport": "port2",
                    "name": "172.20.1.6",
                    "type": "h3c_s6800",
                    "traffic": 8144,
                    "timestamp": "2019-10-25T18:08:17"
                }, {
                    "airport": "port3",
                    "name": "172.20.1.10",
                    "type": "h3c_s6800",
                    "traffic": 6568,
                    "timestamp": "2019-10-25T18:08:17"
                }, {
                    "airport": "port4",
                    "name": "172.20.2.2",
                    "type": "h3c_s6800",
                    "traffic": 6544,
                    "timestamp": "2019-10-25T18:08:16"
                }, {
                    "airport": "port5",
                    "name": "172.20.2.6",
                    "type": "h3c_s6800",
                    "traffic": 7056,
                    "timestamp": "2019-10-25T18:08:17"
                }, {
                    "airport": "port6",
                    "name": "172.20.2.10",
                    "type": "h3c_s6800",
                    "traffic": 5176,
                    "timestamp": "2019-10-25T18:08:17"
                }
            ]
        }
    },
    created(){
        this.matchData(this.dataList)
        this.bubbleSort(this.dataList)
    },
    methods:{
        matchData(data){
            for (let i = 0; i < data.length; i++) {
                let index = data[i].airport.match(/[0-9]/).index
                data[i].position = Number(data[i].airport.substr(index,))
            }
        },
        bubbleSort(data){
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data.length -1 -i; j++) {
                    if (data[j].position > data[j+1].position ) {
                        let temp = data[j]
                        data[j] = data[j+1]
                        data[j+1] = temp
                    }
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        padding:10px;
        .item{
            line-height: 2;
            border-bottom: 1px solid #dddddd;
            p{
                font-size: 14px;
            }
        }
    }
</style>