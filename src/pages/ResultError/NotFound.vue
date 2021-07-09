<template>
  <div class="myContainer">
    <span class="face">:(</span>
    <p>The page you visited was not found.<br>
      After <span> {{ s }}</span> seconds, you will be redirected to the homepage of the website,
      where you can try to find the information you need. <br>
      <span class="tips">If you want more information,
        you can search for this error online later. (Forget it, don't search...</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "NotFound.vue",
  data() {
    return {
      s: 8
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
}
</script>

<style scoped>
.myContainer {
  background-color: #0099CC;
  color: #FFFFFF;
  font-family: Microsoft Yahei, "Helvetica Neue", Helvetica, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
  height: 100vh;
  width: 100%;
}

.face {
  font-size: 100px;
}

p {
  font-size: 24px;
  padding: 8px;
  line-height: 40px;
}

.tips {
  font-size: 16px
}

p, .face{
  margin-left: 50px;
}

@media screen and (max-width: 600px) {
  .myContainer {
    margin: 0 10px;
  }

  p {
    font-size: 18px;
    line-height: 30px;
  }

  .tips {
    display: inline-block;
    padding-top: 10px;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>