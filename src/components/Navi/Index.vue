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
      <router-link class="navbar-brand" to="/">{{ ProjectName }}</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <NaviItems />
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
  components: { NaviItems },
};
</script>