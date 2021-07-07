<!--
 * @Author: kotori Y
 * @Date: 2021-07-05 12:47:04
 * @LastEditTime: 2021-07-07 10:37:09
 * @LastEditors: Kotori Y
 * @Description: In User Settings Edit
 * @FilePath: /fastscopy_frontend/src/App.vue
-->
<template>
  <div>
    <Navi />
    <router-view></router-view>
    <Foot />
  </div>
  <!-- <Navi /> -->
</template>

<script>
import Navi from "./components/Navi/Index";
import Foot from "./components/Foot/Index"

export default {
  name: "App",
  components: {
    Navi,
    Foot,
    // Home
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
