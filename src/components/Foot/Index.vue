<!--
 * @Author: Kotori Y
 * @Date: 2021-07-06 09:59:55
 * @LastEditTime: 2021-07-06 10:15:04
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/components/Foot/DruglikenessMain.vue
 * @Disclam: I love Megumi forever and ever!!!
-->
<template>
  <footer class="bg-dark py-4 mt-auto">
    <div class="container px-5">
      <div
        class="
          row
          align-items-center
          justify-content-between
          flex-column flex-sm-row
        "
      >
        <div class="col-auto">
          <div class="small m-0 text-white">
            Copyright &copy; Korori Yang 2021
          </div>
        </div>
        <div class="col-auto">
          <p>DEV TOOLS</p>
<!--          <a class="link-light small" href="#!">Privacy</a>-->
<!--          <span class="text-white mx-1">&middot;</span>-->
<!--          <a class="link-light small" href="#!">Terms</a>-->
<!--          <span class="text-white mx-1">&middot;</span>-->
<!--          <a class="link-light small" href="#!">Contact</a>-->
        </div>
      </div>
    </div>
    <div class="container px-5">
      <div
        class="
          row
          align-items-center
          justify-content-between
          flex-column flex-sm-row
        "
      >
        <div class="col-auto">
          <div class="small m-0 text-white">
            <i>"No paper, just for fun"</i>
          </div>
        </div>
        <div class="col-auto">
          <a v-for="img in imgs" :href="img.href" target="_blank" :key="img.key">
            <img
              class="img-thumbnail"
              :src="img.src"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      imgs: [
        {src: "/imgs/scopy.png", href: "https://github.com/kotori-y/Scopy", key: 322},
        {src: "/imgs/vue.svg", href: "https://github.com/vuejs/vue", key: 503},
        {src: "/imgs/fastapi.svg", href: "https://github.com/tiangolo/fastapi", key: 312}
      ]
    }
  }
};
</script>

<style lang="css" scoped>
  img {
    width: 70px;
    background-color: transparent;
    border: none !important;
  }

  p {
    color: #de86fe;
    font-size: 27px;
    margin-right: 60px;
  }

</style>
