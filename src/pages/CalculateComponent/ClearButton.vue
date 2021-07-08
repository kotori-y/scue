<template>
  <div :class="{'col-2': true, disabled: isEmpty}">
    <button
        aria-label="Reset"
        class="btn btn-danger"
        type="button"
        value="Reset"
        @click="clearArea"
        :disabled="isEmpty"
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
  },
  props: {
    isEmpty: {
      type: Boolean,
      required: true,
      default: true,
    }
  }
};
</script>

<style scoped>
.btn:focus {
  outline: none;
  box-shadow: none;
  color: aliceblue;
}

.disabled {
  cursor: not-allowed !important;
}
</style>