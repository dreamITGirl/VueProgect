<template>
  <div class="home">
     <p class="title">目录</p>
      <div class="catalog">
          <router-link to="/table" class="catalog-item">基于Element-ui的table组件动态合并行或列</router-link>
          <router-link to="/baseUse"  class="catalog-item">使用vis.js基础拓扑图的渲染一</router-link>
          <router-link to="/baseUseTwo"  class="catalog-item">使用vis.js基础拓扑图的渲染二</router-link>
          <!-- <router-link to="/baseUseTwo"  class="catalog-item">使用vis.js基础拓扑图的渲染二</router-link> -->
          <router-link to="/simple" class="catalog-item">Vue.Draggable的学习一</router-link>
          <router-link to="/room" class="catalog-item">Vue.Draggable的学习二</router-link>
          <router-link to="/UE" class="catalog-item">UE编辑器插件</router-link>
          <router-link to="/ckeditor" class="catalog-item">ckeditor编辑器插件</router-link>
          <router-link to="/ridingLantern" class="catalog-item">文字无缝滚动,鼠标移动上去后移动暂停</router-link>
          <router-link to="/rideLanternTwo" class="catalog-item">flex布局下的文字无缝滚动</router-link>
          <router-link to="/handleTime" class="catalog-item">Dayjs的使用</router-link>
          <router-link to="/bubbleSort" class="catalog-item">js 冒泡排序</router-link>
          <router-link to="/interviewQuestion" class="catalog-item">JS面试题进阶</router-link>
          <router-link to="/fliterViews" class="catalog-item">筛选条件的选择</router-link>
          <router-link to="/map3d" class="catalog-item">3D地图的绘制</router-link>
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