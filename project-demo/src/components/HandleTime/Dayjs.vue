<template>
    <div class="container">
        <p>当前时间 : {{$d()}}</p>
        <p>格式化后的当前时间 : {{$d().format('YYYY-MM-DD HH:mm:ss')}}</p>
        <p>时间字符串 {{$d('2019-10-05')}}</p>
        <p>Date对象 {{$d(new Date(2019,10,15))}}</p>
        <p>Date对象格式化 : {{$d(new Date(2019,10,15)).format('YYYY-MM-DD')}}</p>
        <p>Unix时间戳(毫秒)： {{$d(currentTime)}}</p>
        <p>自定义时间格式 {{$d().format('YYYY-MM-DD')}}，{{$d().format('DD-MM-YYYY')}}</p>
        <p>复制时间 {{$d().clone()}}</p>
        <p>验证时间 $d().isValid()==>{{$d().isValid()}} 或者 $d('2019-10-22').isValid() ==>{{$d('2019-10-22').isValid()}}</p>
        <h4>获取和设置时间</h4>
        <p>获取年份:{{$d().year()}}  设置年份:{{$d().year(2020)}}</p>
        <p>获取月份:{{$d().month()}} 设置月份:{{$d().month(2).format('YYYY-MM-DD')}}</p>
        <p>设置时间:dayjs().set(unit : String, value : Int);{{$d().set('date',20).format('YYYY-MM-DD')}}</p>
    </div>
</template>
<script>
export default {
    name:'handleTime',
    data(){
        return {
            currentTime: new Date().getTime()
        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
    .container{
        padding:20px;
        font-size: 14px;
        line-height: 2;
    }
</style>