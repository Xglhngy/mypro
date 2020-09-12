<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App',
 
  mounted(){
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
html,body{
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
#app{
  height: 100%;
}
.el-submenu [class^=el-icon-]{
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
}
 .el-tabs__header{
    margin: 0!important;

 }
</style>
