<template>
    <div class="container">
        <div id="bjMap" ref="bjMap"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
import 'echarts/map/js/province/beijing'
import 'echarts-gl'
import bjData from '../../data/beijing.json'
console.log(bjData,'bjData');
// import 
export default {
    name:'map3d',
    data(){
        return {
            bjMap:null,
            mapData: [],
            // options:{
            //     series:[
            //         {
            //             type:'map3D',
            //             name:'北京',
            //             selectedMode:'single',//地图高亮单选
            //             boxDepth:90,//地图倾斜度
            //             regionHeight:8,//地图高度
            //             map:'北京',
            //             viewControl:{
            //                 distance:150,//地图视角，控制初始大小
            //                 rotateSensitivity:0,//禁止旋转
            //                 zoomSensitivity:0,//禁止缩放
            //             },
            //             label:{
            //                 show: true,//是否显示市
            //                 textStyle:{
            //                     color:'#0a1640',
            //                     fontSize:12,
            //                     backgroundColor:'rgba(0,0,0,0)',//透明度0清空文字背景
            //                 }
            //             },
            //             itemStyle:{
            //                 color:'#81d0f1',//地图的颜色
            //                 borderWidth:0.5,//分界线的宽度
            //                 borderColor:"#459bca",//分界线的颜色
            //             },
            //             emphasis:{
            //                 label:{
            //                     show:true,//是否高亮
            //                     textStyle:{
            //                         color:'#fff',//高亮时文字颜色
            //                     }
            //                 },
            //                 itemStyle:{
            //                     color:'#0489d6'//高亮时地图的颜色
            //                 }
            //             }
            //         }
            //     ]
            // }
        }
    },
    mounted(){
        this.renderMap2()
    },
    beforeDestory(){
        // if (!this.bjMap) {
        //     return
        // }
        // this.bjMap.dispose()
        // this.bjMap = null
    },
    methods:{
        renderMap(){
            this.bjMap = echarts.init(document.getElementById('bjMap'))
            this.bjMap.setOption(this.options)
            window.onresize - this.bjMap.resize()
            this.bjMap.on('click',function(e){
                console.log(e,'=====');
            })
        },
        renderMpByJson(){
            this.bjMap = echarts.init(document.getElementById('bjMap'))
            echarts.registerMap('beijing', bjData)
            let option = {
                title:{
                    text:'北京市3d地图',
                },
                series:[
                    {
                        type:'map3D',
                        name:'北京3D',
                        map:'beijing',
                        environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 配置为垂直渐变的背景
                            offset: 0,
                            color: '#00aaff' // 天空颜色           
                        }, {
                            offset: 0.7,
                            color: '#998866' // 地面颜色
                        }, {
                            offset: 1,
                            color: '#998866' // 地面颜色
                        }], false),
                        label:{
                            show:true
                        }
                    }
                ]
            }
            this.bjMap.setOption(option)
        },
        renderMap2(){
            this.bjMap = echarts.init(document.getElementById('bjMap'))
            echarts.registerMap('beijing', bjData)
            const subList = bjData.features
            // for (var i = 0, l = subList.length; i < l; i++) {
            //   var name = subList[i].properties.name
            //   var cityCode = subList[i].properties.adcode
            //   this.mapData.push({
            //     name: name,
            //     value: Math.round(Math.random() * 100),
            //     cityCode: cityCode
            //   })
            // }
            // this.loopRender('beijing', bjData)
            let option = {
                visualMap: {
                    type: 'piecewise',
                    pieces: [{ color: '#1c428a' }],
                    color: '#333',
                    textStyle: {
                    color: '#333'
                    },
                    show: false,
                    visibility: 'off'
                },

                series: [
                    {
                    name: '数据名称',
                    type: 'map3D',
                    map: 'beijing',
                    top: 15,
                    // roam: false,
                    selectedMode: 'single',
                    showLegendSymbol: false,
                    visibility: 'off',
                    itemStyle: {
                        normal: {
                        color: '#ccc',
                        areaColor: '#333',
                        borderColor: '#32a3e1',
                        borderWidth: 1,
                        label: {
                            show: true,
                            formatter: '{b}\n', // {c}
                            textStyle: {
                            color: 'rgb(249, 249, 249)'
                            }
                        },
                        value: {
                            show: true,
                            textStyle: {
                            color: 'rgb(249, 249, 249)'
                            }
                        }
                        },
                        emphasis: {
                        areaColor: false,
                        borderColor: '#fff',
                        areaStyle: {
                            color: '#fff'
                        },
                        label: {
                            show: true,
                            textStyle: {
                            color: 'rgb(249, 249, 249)'
                            }
                        }
                        }
                    },
                    data: this.mapData // this.mapData
                    }
                ]
            }
            this.bjMap.setOption(option)
        },
        loopRender(mapName, data){
            let option = {
                visualMap: {
                    type: 'piecewise',
                    pieces: [{ color: '#1c428a' }],
                    color: '#333',
                    textStyle: {
                    color: '#333'
                    },
                    show: false,
                    visibility: 'off'
                },

                series: [
                    {
                    name: '数据名称',
                    type: 'map3D',
                    map: 'huangshan',
                    top: 15,
                    roam: false,
                    mapType: 'huangshan',
                    selectedMode: 'single',
                    showLegendSymbol: false,
                    visibility: 'off',
                    itemStyle: {
                        normal: {
                        color: '#ccc',
                        areaColor: '#333',
                        borderColor: '#32a3e1',
                        borderWidth: 1,
                        label: {
                            show: true,
                            formatter: '{b}\n', // {c}
                            textStyle: {
                            color: 'rgb(249, 249, 249)'
                            }
                        },
                        value: {
                            show: true,
                            textStyle: {
                            color: 'rgb(249, 249, 249)'
                            }
                        }
                        },
                        emphasis: {
                        areaColor: false,
                        borderColor: '#fff',
                        areaStyle: {
                            color: '#fff'
                        },
                        label: {
                            show: true,
                            textStyle: {
                            color: 'rgb(249, 249, 249)'
                            }
                        }
                        }
                    },
                    data: this.mapData // this.mapData
                    }
                ]
            }
            this.bjMap.setOption(option)
        
        }
    }
}
</script>
<style scoped >
    .container{
        padding:20px;
    }
    #bjMap{
        width:1000px;
        height:1000px;
    }
</style>