<!--
 * @Author: Kotori Y
 * @Date: 2021-07-06 09:41:02
 * @LastEditTime: 2021-07-06 09:52:56
 * @LastEditors: Kotori Y
 * @Description: The header of homepage
 * @FilePath: /fastscopy_frontend/src/pages/Home/Header.vue
 * @Disclam: I love Megumi forever and ever!!!
-->
<template>
  <header class="bg-dark py-5">
    <div class="container px-5">
      <div class="row gx-5 align-items-center justify-content-center">
        <div class="col-lg-8 col-xl-7 col-xxl-6">
          <div class="my-5 text-center text-xl-start">
            <h1 class="display-5 fw-bolder text-white mb-2">
              Comprehensive screening tools combined with modern frameworks
            </h1>
            <p class="lead fw-normal text-white-50 mb-4">
              An integrated negative design tool designed for screening out undesirable compounds in the early drug discovery. Covering data preparation, screening filters, the calculation of scaffolds and descriptors, and the visualization analysis.
            </p>
            <div
              class="
                d-grid
                gap-3
                d-sm-flex
                justify-content-sm-center justify-content-xl-start
              "
            >
              <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features"
                >Get Started</a
              >
              <a class="btn btn-outline-light btn-lg px-4" href="#!"
                >Learn More</a
              >
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
          <img
            class="img-fluid rounded-3 my-5"
            src="https://dummyimage.com/600x400/343a40/6c757d"
            alt="..."
          />
        </div>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  name: "HomeHeader"
};
</script>