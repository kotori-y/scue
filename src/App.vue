<!--
 * @Author: kotori Y
 * @Date: 2021-07-05 12:47:04
 * @LastEditTime: 2021-07-07 10:37:09
 * @LastEditors: Kotori Y
 * @Description: In User Settings Edit
 * @FilePath: /fastscopy_frontend/src/App.vue
-->
<template>
  <div class="myContainer">
    <div>
      <Navi v-if="!isNotFound"/>
      <router-view></router-view>
      <Foot v-if="!isNotFound"/>
    </div>
    <Loader v-if="isBusy"></Loader>
  </div>
</template>

<script>
import Navi from "./components/Navi/Index";
import Foot from "./components/Foot/Index"
import Loader from "@/components/Loader";

export default {
  name: "App",
  data() {
    return {
      isBusy: false,
    }
  },
  components: {
    Navi,
    Foot,
    Loader
  },
  computed: {
    isNotFound() {
      return this.$route.name === "404"
    }
  },
  mounted() {
    this.$bus.$on("changeBusyStatus", () => this.isBusy = !this.isBusy)
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.myContainer {
  position: relative;
}

</style>