<template>
  <div class="col-3 text-center">
    <button
        aria-label="Reset"
        class="btn btn-danger"
        type="button"
        value="Reset"
        @click="clearArea"
    >
      Reset
    </button>
  </div>
</template>

<script>
export default {
  name: "ClearButton",
  methods: {
    clearArea() {
      this.$bus.$emit("clearArea")
    },
  }
};
</script>

<style scoped>

.btn:focus {
  outline: none;
  box-shadow: none;
  color: aliceblue;
}
</style>