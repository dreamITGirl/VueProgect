<template>
    <div class="container">

    </div>
</template>
<script>
export default {
    name:'interviewQuestion',
    data(){
        return {

        }
    },
    created(){
        this.qesOne()
    },
    methods:{
        qesOne(){
            const shape = {
                radius:10,
                diameter(){
                    return this.radius * 2
                },
                perimeter:()=>2*Math.PI * this.radius
            }
            console.log(shape.diameter());
            console.log(shape.perimeter());
            
        }
    }
}
</script>