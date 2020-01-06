<template>
    <div class="container">
        <div id="charts"></div>
    </div>
</template>
<script>
var echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
    name:'barCharts',
    data(){
        return {
            charts:null,
            chartsData:[
                {
                    name:'A菜场',
                    price:120,
                    percent:20,
                    color:'#E8A61F'
                },
                {
                    name:'B菜场',
                    price:260,
                    percent:60,
                    color:'#E67C26'
                },
                {
                    name:'C菜场',
                    price:120,
                    percent:20,
                    color:'#0CD8A7'
                }
            ]
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.initCharts()
        })
    },
    methods:{
        getLegendName(data){
            let tempArr = []
            for (let i = 0; i < data.length; i++) {
                let obj = {
                    name: data[i].name
                }
                tempArr.push(obj)
            }
            return tempArr
        },
        getSeriesData(data){
            let tempArr = []
            for (let i = 0; i < data.length; i++) {
                let obj = {
                    name:data[i].name,
                    type:'bar',
                    barWidth:16,
                    stack: '菜场销量对比',
                    label: {
                        normal: {
                            borderWidth: 10,
                            distance: 20,
                            align: 'center',
                            verticalAlign: 'middle',
                            borderRadius: 1,
                            borderColor: data[i].color,
                            backgroundColor: data[i].color,
                            show: true,
                            position: 'top',
                            formatter: '{c}%',
                            color: '#000'
                        }
                    },
                    itemStyle: {
                        color:data[i].color[0]
                    },
                    data:[{
                        value:data[i].percent,
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'bar',
                                    colorStops: [{
                                        offset: 0,
                                        color:data[i].color// 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: data[i].color// 100% 处的颜色
                                    }],
                                    globalCoord: false, // 缺省为 false
                                }
                            }
                        }
                    }]
                }
                let objTriangle = {
                    name:data[i].name,
                    type:'line',
                    barWidth:0,
                    markPoint: {
                        symbol:'triangle',
                        symbolRotate:'180',
                        itemStyle:{
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: '#E8A61F' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#E8A61F' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }  
                        },
                        symbolSize:[6,5],// 容器大小
                        symbolOffset:[0,-15],//位置偏移
                        data:[{
                            coord: [data[i].number/2]
                        }],
                        label: {
                            normal: {
                                show: false
                            },
                            offset: [0, 0],
                        }
                    }
                }
                tempArr.push(obj)
                tempArr.push(objTriangle)
            }
            return tempArr
        },
        initCharts(){
            this.charts = echarts.init(document.getElementById('charts'))
            let option = {
                backgroundColor:'#000E1B',
                title:{
                    text:'本市菜场销量占比',
                    textStyle:{
                        color:'#FFFFFF'  
                    },
                    left:'center',
                    top: '200'
                },
                tooltip:{
                    // show:false,
                    formatter:"{a} {b} <br> {c}%"
                },
                legend:{
                    icon:"circle",
                    bottom: '40%',
                    left:'10%',
                    itemWidth: 7,
                    itemHeight: 7,
                    itemGap: 100,
                    textStyle:{
                        color:'#89A7AF',
                    },
                    data:this.getLegendName(this.chartsData)
                },
                xAxis: [{
                    type :'value',
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                    }
                }],
                yAxis: [{
                    data: [''],
                    axisTick: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                        }
                    }
            
                }],
                series: this.getSeriesData(this.chartsData)
            }
            this.charts.setOption(option,true)
        }
    }
}
</script>
<style scoped>
    #charts{
        width:60%;
        height:800px;
        margin:0 auto;
    }
</style>