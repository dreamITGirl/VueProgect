<template>
    <div class="container">
        <label>关键词：<input v-model="keyword"></label>
        <baidu-map class="bm-view mapBox"  :center="center" 
                    :zoom="zoom" @ready="handler" 
                    :scroll-wheel-zoom="true"
                    ak="UKogin7QhzYZEhKg1aGHZ7PWbRhXHpDC">
            <bm-geolocation anchor="BMAP_ANCHOR_TOP_LEFT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <bm-local-search :keyword="keyword" :auto-viewport="true" ></bm-local-search>
        </baidu-map>
    </div>
</template>
<script>
import {BaiduMap , BmGeolocation , BmLocalSearch} from 'vue-baidu-map'
export default {
    name:'mapBaidu',
    components:{
       BaiduMap,
       BmGeolocation,
       BmLocalSearch
    },
    data(){
        return {
            center:{
                lng:0,
                lat:0
            },
            zoom:3,
            keyword:null
        }
    },
    methods:{
        handler({BMap,map}){
            this.center.lng = 116.404
            this.center.lat = 39.915
            this.zoom = 14
        },
        locationSuccess({point, AddressComponent, marker}){
            console.log(point, AddressComponent, marker);
        }
    }
}
</script>
<style lang="scss" scoped>
    .container{
        .mapBox{
            width:60%;
            height:600px;
            margin:10px auto;
        }
    }
</style>