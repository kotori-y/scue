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
  watch: {
    s: {
      immediate: true,
      handler(value) {
        if (value < 0) {
          this.$router.push({name: "home"})
        }
      }
    }
  },
  methods: {
    countDown() {
      this.task = setInterval(()=> {
        this.s--
      }, 1000)
    }
  },
  mounted() {
    setTimeout(() => {
      this.countDown()
    }, 100)
  },
  beforeDestroy() {
    clearInterval(this.task)
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