<!--
 * @Author: Kotori Y
 * @Date: 2021-07-06 14:28:54
 * @LastEditTime: 2021-07-07 09:00:24
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/pages/Druglikeness/DruglikenessMain/DruglikenessMainButton.vue
 * @Disclaim: I love Megumi forever and ever!!!
-->
<template>
  <div class="row">
    <div class="col-3 text-center">
      <button
        class="btn btn-danger"
        type="button"
        aria-label="Reset"
        value="Reset"
        @click="clearArea"
      >
        Reset
      </button>
    </div>
    <div class="col-3">
      <button
        class="btn btn-success"
        type="button"
        aria-label="Submit"
        value="Submit"
        @click="calProps"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DruglikessMainButton",
  methods: {
    clearArea() {
      this.$bus.$emit("clearArea")
    },
    calProps() {
      this.$bus.$emit("calProps")
    }
  }
};
</script>

<style>

.btn:focus {
  outline: none;
  box-shadow: none;
  color: aliceblue;
}

.row {
  display: flex;
  justify-content: space-between;
}
</style>