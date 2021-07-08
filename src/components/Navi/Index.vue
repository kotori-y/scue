<!--
 * @Author: Kotori Y
 * @Date: 2021-07-05 21:07:48
 * @LastEditTime: 2021-07-06 11:38:28
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/components/Navi/index.vue
 * @Disclaim: I love Megumi forever and ever!!!
-->

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container px-5">
      <img alt="" class="d-inline-block justify-content-center align-items-center mr-2" height="8%"
           src="../../../public/imgs/logo.svg" width="8%">
      <router-link class="navbar-brand HHH" to="/">{{ ProjectName }}</router-link>
      <NaviItems/>
    </div>
  </nav>
</template>

<script>
import NaviItems from "./NaviItems.vue";

export default {
  name: "Navi",
  data() {
    return {
      ProjectName: "Scopy meets Vue",
    };
  },
  components: {NaviItems},
};
</script>

<style scoped>
.HHH {
  font-family: "Fira Code",sans-serif;
  font-size: 24px;
}

img {
  margin-top: 5px;
}

nav {
  background-color: #1c1919 !important;
}

</style>