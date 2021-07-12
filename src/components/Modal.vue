<template>
  <div class="col-2">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
            @click="getCode">
      I am Human
    </button>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
         aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Enter the characters in the picture</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img :src="verifyCodeImg" alt="captcha" @click="getCode">
            <input class="ansInput" type="text" v-model="ans" @focus="refreshCode">
            <label style="color: red" v-show="error">miss matched</label>
            <label style="color: red" v-show="timeout">timeout</label>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="checkCode">OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {setCookie} from "../../public/js/scripts";
import { v4 as uuidv4 } from 'uuid';
export default {
  name: "Modal",
  data() {
    return {
      verifyCodeImg: "",
      ans: null,
      error: false,
      timeout: false,
      token: uuidv4()
    }
  },
  watch: {
    ans: {
      handler(val, oldVal) {
        this.error = (this.error && oldVal)
      }
    },
    verifyCodeImg: {
      handler() {
        this.task = setTimeout(()=>{
          this.error = false
          this.timeout = true
          this.ans = ""
          const input_ = document.querySelector(".ansInput")
          if (input_) {input_.blur()}
        },10 * 1000)
      }
    }
  },
  methods: {
    getCode() {
      this.timeout = false
      clearTimeout(this.task)
      axios({
        method: "post",
        url: "http://192.168.1.128:8000/getCode",
        headers: {"x-token": this.token},
      }).then(resp => {
        this.verifyCodeImg = resp.data
      }).catch(e => {
        console.log(e)
      })
    },
    checkCode() {
      axios({
        method: "get",
        url: `http://192.168.1.128:8000/checkCode/${this.ans}`,
        headers: {"x-token": this.token}
      }).then(resp => {
        this.error = !resp.data
        if (this.error) {
          this.ans = ""
          this.getCode()
          return;
        }
        setCookie("x-token", this.token)
        this.$emit("isHuman")
        const modal = document.querySelector(".modal-backdrop")
        modal.remove()
      }).catch(e => {
        console.log(e)
      })
    },
    refreshCode() {
      if (this.timeout) {
        this.getCode()
      }
    }
  },
}
</script>

<style scoped>
input {
  margin-left: 30px;
}

img {
  cursor: pointer !important;
}

label {
  margin-left: 20px;
}

</style>