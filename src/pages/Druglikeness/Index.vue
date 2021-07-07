<!--
 * @Author: Kotori Y
 * @Date: 2021-07-06 10:21:51
 * @LastEditTime: 2021-07-07 09:42:53
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/pages/Druglikeness/Index.vue
 * @Disclaim: I love Megumi forever and ever!!!
-->
<template>
  <div class="container">
    <DruglikenessNavi />  
    <router-view></router-view>
  </div>
</template>

<script>
import DruglikenessNavi from "./DruglikenessNavi";
export default {
  name: "Druglikeness",
  components: { DruglikenessNavi }
};
</script>

<style lang="css" scoped>
.container {
  max-width: 80%;
}
</style>