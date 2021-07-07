<!--
 * @Author: Kotori Y
 * @Date: 2021-07-06 13:52:07
 * @LastEditTime: 2021-07-07 10:28:29
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/pages/Druglikeness/DruglikenessMain/DruglikenessMainInput.vue
 * @Disclam: I love Megumi forever and ever!!!
-->
<template>
  <form class="border p-3 border-top-0">
    <input type="hidden" />
    <label for="exampleFormControlTextarea1"
      >SMILES(MAX <span class="text-danger">20,000</span>)
      <button type="button" class="btn btn-info" @click="fillExample">
        Example
      </button>
    </label>

    <div class="form-group text-left">
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="15"
        name="smiles-list"
        datatype="Require"
        msg="This field is required!"
        placeholder="Enter SMILES"
        v-model="smiles"
      ></textarea>
    </div>
    <input type="hidden" value="2" name="method" />
    <DruglikenessMainButton />
  </form>
</template>

<script>
import DruglikenessMainButton from "./DruglikenessMainButton.vue";
import axios from "axios";
export default {
  name: "DruglikenessInput",
  components: { DruglikenessMainButton },
  data() {
    return {
      smiles: "",
    };
  },
  methods: {
    fillExample() {
      this.smiles = "c1ccccc1\nc1ccccc1";
    },
    clearArea() {
      this.smiles = "";
    },
    calProps() {
      if (this.smiles.trim()) {
        // let smiles = this.smiles.split(/\W+/);
        console.log(this.smiles.split(/\W+/));
        axios({
          method: "post",
          url: "http://127.0.0.1:5555/cal",
          data: {
            smiles: this.smiles.split(/\W+/),
            showSmiles: false,
          },
        })
          .then((resp) => {
            this.$store.dispatch("updateResult", resp.data);
          })
          .then(() => {
            this.$router.push({ name: "DruglikenessResult" });
          })
          .then(() => {
            this.clearArea()
          });
      }
    },
  },
  mounted() {
    this.$bus.$on("clearArea", this.clearArea);
    this.$bus.$on("calProps", this.calProps);
  },
};
</script>

<style lang="css" scoped>
form {
  margin: 30px auto;
  /* border: 0.5px solid sandybrown !important; */
  box-shadow: 1px 1px 5px grey;
  border-radius: 5px;
}

textarea {
  overflow: scroll;
  resize: none; /* Remove this if you want the user to resize the textarea */
  white-space: nowrap;
}

textarea {
  margin: 10px auto;
}

.btn:focus {
  outline: none !important;
  box-shadow: none !important;
}
</style>
