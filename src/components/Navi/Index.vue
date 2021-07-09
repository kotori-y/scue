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
  <main class="flex-shrink-0">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img alt="" class="d-inline-block justify-content-center align-items-center mr-2" height="6%"
           src="../../../public/imgs/logo.svg" width="6%">
      <div class="container px-12">
        <!--        <img alt="" class="d-inline-block justify-content-center align-items-center mr-2" height="8%"-->
        <!--             src="../../../public/imgs/logo.svg" width="8%">-->
        <router-link class="navbar-brand HHH" to="/">{{ ProjectName }}</router-link>
        <NaviItems/>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </main>

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
  font-family: "Times New Roman", sans-serif;
  font-size: 28px;
}

img {
  margin-top: 5px;
  margin-left: 60px;
}

nav {
  background-color: #1c1919 !important;
}

</style>