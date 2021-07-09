<template>
  <div class="error">
    <h1>
      You shouldn't be here at this moment<br/>
      You will return to calculate page after {{ s }}s
    </h1>
    <img alt="" src="../../../public/imgs/YouShallNotPass.jpg" srcset=""/>
  </div>
</template>

<script>
export default {
  name: "EarlyVisit",
  data() {
    return {
      s: 3
    }
  },
  methods: {
    countDown() {
      async function interval(callback, delay) {
        return new Promise((resolve) => {
          let id = setInterval(() => {
            callback(resolve, id);
          }, delay);
        });
      }
      interval((resolve, id) => {
        this.s--
        if (this.s < 0) {
          clearInterval(id)
          this.$router.push({name: "home"})
        }
        resolve()
      }, 1000)
    }
  },
  mounted() {
    setTimeout(() => {
      this.countDown()
    }, 100)
  },
  beforeDestroy() {
    console.log("go back!")
  }
};
</script>

<style scoped>
h1 {
  margin: 100px auto 10px auto;
}

.error {
  text-align: center;
}

img {
  width: 50%;
  -webkit-transform: scale(0.5); /* Saf3.1+, Chrome */
  -moz-transform: scale(0.5); /* FF3.5+ */
  -ms-transform: scale(0.5); /* IE9 */
  -o-transform: scale(0.5); /* Opera 10.5+ */
  transform: scale(0.5);
}
</style>