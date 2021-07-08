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
            Copyright &copy; Your Website 2021
          </div>
        </div>
        <div class="col-auto">
          <a class="link-light small" href="#!">Privacy</a>
          <span class="text-white mx-1">&middot;</span>
          <a class="link-light small" href="#!">Terms</a>
          <span class="text-white mx-1">&middot;</span>
          <a class="link-light small" href="#!">Contact</a>
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
          <a href="https://www.python.org/" target="_blank">
            <img
              class="img-thumbnail"
              src="/imgs/scopy.png"
              alt=""
            />
          </a>
          <a href="https://www.python.org/" target="_blank">
            <img
              class="img-thumbnail"
              src="/static/common/footer/imgs/python-logo.png"
              alt=""
            />
          </a>
          <a href="https://www.python.org/" target="_blank">
            <img
              class="img-thumbnail"
              src="/static/common/footer/imgs/python-logo.png"
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
};
</script>

<style lang="css" scoped>
  img {
    width: 150px;
  }
</style>
