<template>
    <div class="container">
        <div id="myNetwork" ref="myNetwork" ></div>
    </div>
</template>
<script>
import vis from 'vis-network';
require('vis-network/dist/vis-network.css')
export default {
    name:'baseUseTwo',
    data(){
        return {
            options:{
                autoResize:true,//自动调整大小
                locale: 'zh',
                clickToUse:true,//是否启用点击事件（默认false）
                nodes:{
                    borderWidth: 1,
                    borderWidthSelected: 2,
                    chosen: true,
                    color: {
                        border: '#2B7CE9',
                        background: '#97C2FC',
                        highlight: {
                            border: '#2B7CE9',
                            background: '#D2E5FF'
                        },
                        hover: {
                            border: '#2B7CE9',
                            background: '#D2E5FF'
                        }
                    },
                    fixed: {
                        x:true,
                        y:true
                    },
                    font: {
                        color: '#343434',
                        size: 14, // px
                        face: 'arial',
                        background: 'none',
                        strokeWidth: 0, // px
                        strokeColor: '#ffffff',
                        align: 'center',
                        multi: false,
                        vadjust: 0,
                        bold: {
                            color: '#343434',
                            size: 14, // px
                            face: 'arial',
                            vadjust: 0,
                            mod: 'bold'
                        },
                        ital: {
                            color: '#343434',
                            size: 14, // px
                            face: 'arial',
                            vadjust: 0,
                            mod: 'italic',
                        },
                        boldital: {
                            color: '#343434',
                            size: 14, // px
                            face: 'arial',
                            vadjust: 0,
                            mod: 'bold italic'
                        },
                        mono: {
                            color: '#343434',
                            size: 15, // px
                            face: 'courier new',
                            vadjust: 2,
                            mod: ''
                        }
                    },
                    heightConstraint: false,
                    hidden: false,
                    icon: {
                        face: 'FontAwesome',
                        size: 50,  //50,
                        color:'#2B7CE9'
                    },
                    labelHighlightBold: true,
                    chosen:{
                        node:function(params){
                            params.borderColor ="red"
                            params.color = '#fff'
                            params.borderWidth = 2 //节点的边框宽度
                            params.shadow = true
                        },
                        label:function(params){
                        }
                    },
                    mass: 1,
                    physics: true,
                    scaling: {
                        min: 10,
                        max: 30,
                        label: {
                            enabled: false,
                            min: 14,
                            max: 30,
                            maxVisible: 30,
                            drawThreshold: 5
                        },
                        customScalingFunction: function (min,max,total,value) {
                            if (max === min) {
                                return 0.5;
                            }
                            else {
                                let scale = 1 / (max - min);
                                return Math.max(0,(value - min)*scale);
                            }
                        }
                    },
                    shadow:{
                        enabled: false,
                        color: 'rgba(0,0,0,0.5)',
                        size:10,
                        x:5,
                        y:5
                    },
                    shape: 'ellipse',//节点的外观
                    shapeProperties: {
                        borderDashes: false, // only for borders
                        borderRadius: 6,     // only for box shape
                        interpolation: false,  // only for image and circularImage shapes
                        useImageSize: false,  // only for image and circularImage shapes
                        useBorderWithImage: false  // only for image shape
                    },
                    size: 25
                },//节点的配置
                edges:{
                    arrows: {
                        to:     {enabled: true, scaleFactor:1, type:'arrow'},
                        middle: {enabled: false, scaleFactor:1, type:'arrow'},
                        from:   {enabled: true, scaleFactor:1, type:'arrow'}
                    },
                    arrowStrikethrough: true,
                    chosen: {
                        edge:function(params){
                            params.color = '#2e6da4'
                            params.shadow = true
                            params.shadowColor = 'rgba(0,0,0,0.2)'
                            params.shadowX = 3
                            params.shadowY = 3
                        }
                    },
                    length:200,
                    color: {
                        color:'#848484',
                        highlight:'#848484',
                        hover: '#848484',
                        inherit: 'from',
                        opacity:1.0,
                    },
                    dashes: false,
                    font: {
                        color: '#343434',
                        size: 14, // px
                        face: 'arial',
                        background: 'none',
                        strokeWidth: 2, // px
                        strokeColor: '#ffffff',
                        align: 'horizontal',
                        multi: false,
                        vadjust: 0,
                        bold: {
                            color: 'red',
                            size: 14, // px
                            face: 'arial',
                            vadjust: 0,
                            mod: 'bold'
                        },
                        ital: {
                            color: 'blue',
                            size: 14, // px
                            face: 'arial',
                            vadjust: 0,
                            mod: 'normal',
                        },
                        boldital: {
                            color: '#343434',
                            size: 14, // px
                            face: 'arial',
                            vadjust: 0,
                            mod: 'bold italic'
                        },
                        mono: {
                            color: '#343434',
                            size: 15, // px
                            face: 'courier new',
                            vadjust: 2,
                            mod: ''
                        }
                    },
                    hidden: false,
                    hoverWidth: 1.5,
                    labelHighlightBold: true,
                    physics: true,
                    scaling:{
                    min: 1,
                    max: 15,
                    label: {
                        enabled: true,
                        min: 14,
                        max: 30,
                        maxVisible: 30,
                        drawThreshold: 5
                    },
                    customScalingFunction: function (min,max,total,value) {
                        if (max === min) {
                            return 0.5;
                        }
                        else {
                            var scale = 1 / (max - min);
                            return Math.max(0,(value - min)*scale);
                        }
                    }
                    },
                    selectionWidth: 1,
                    selfReferenceSize:20,
                    shadow:{
                        enabled: false,
                        color: 'rgba(0,0,0,0.5)',
                        size:10,
                        x:5,
                        y:5
                    },
                    smooth: {
                        enabled: true,
                        type: "dynamic",
                        roundness: 0.5
                    },
                    width: 2,//连接线的宽度
                    widthConstraint: false
                },//连接线的配置
                layout:{
                   hierarchical:{
                       enabled:false,//垂直排列
                       direction:'LR',
                       nodeSpacing:500,
                       treeSpacing:300 
                   }
                },
                
            },
            nodes:[
                {id: 1, label: '机房01'},
                {id: 2, label: '机房02'},
                {id: 3, label: '机房03'},
                {id: 4, label: '机房04'},
                {id: 5, label: '机房05'},

                {id: 11, label: '机房11'},
                {id: 12, label: '机房12'},
                {id: 13, label: '机房13'},
                {id: 14, label: '机房14'},
                {id: 33, label: '机房33'},
                {id: 41, label: '机房41'},
            ],
            edges:[
                {from: 1, to: 2},
                {from: 1, to: 11},
                {from: 1, to: 13},
                {from: 2, to: 22},
                {from: 2, to: 24},
                {from: 3, to: 4},
                {from: 3, to: 11},
                {from: 3, to: 13},
                {from: 4, to: 12},
                {from: 4, to: 14},
                {from: 5, to: 11},
                {from: 5, to: 13},
                {from: 5, to: 14},
                {from: 11, to: 12},
                {from: 11, to: 41},
                {from: 11, to: 33},
                {from: 11, to: 13}
            ],
            netWork:null
        }
    },
    methods:{
        initPicture(){
            let nodeData = new vis.DataSet(this.nodes)
            let edgeData = new vis.DataSet(this.edges)
            let container = document.getElementById('myNetwork')
            let data = {
                nodes:nodeData,
                edges:edgeData
            }
            this.netWork = new vis.Network(container,data,this.options)
            this.netWork.on('click',function(params){
                // console.log(params);
            })
           
        },
        
           
        
    },
    created(){
        this.$nextTick(()=>{
            this.initPicture()
        })
        
    }
}
</script>
<style lang="scss" scoped>
    
    #myNetwork{
        width:100%;
        height: 600px;
    }
</style>
