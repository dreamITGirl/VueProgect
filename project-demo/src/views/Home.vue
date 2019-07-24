<template>
  <div class="home">
     <p class="title">目录</p>
      <div class="catalog">
          <router-link to="/table" class="catalog-item">基于Element-ui的table组件动态合并行或列</router-link>
          <router-link to="/baseUse"  class="catalog-item">使用vis.js基础拓扑图的渲染一</router-link>
          <router-link to="/baseUseTwo"  class="catalog-item">使用vis.js基础拓扑图的渲染二</router-link>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss" scoped>
    .title{
      font-size: 22px;
      text-align: center;
    }
    .catalog{
      text-align: left;
      box-sizing: border-box;
      padding: 10px;
      a{
        color:#111;
        line-height: 2;
      }

    }
    .catalog-item{
      display: block;
    }
</style>