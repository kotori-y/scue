<template>
  <div :class="{'col-2': true, disabled: isEmpty}">
    <button
        aria-label="Submit"
        class="btn btn-success"
        type="button"
        value="Submit"
        @click="doScopy(eventName, params)"
        :disabled = "isEmpty"
    >
      Submit
    </button>
  </div>
</template>

<script>
export default {
  name: "SubmitButton",
  methods: {
    doScopy(eventName, params) {
      this.$bus.$emit(eventName, params)
    }
  },
  props: {
    eventName: {
      type: String,
      required: true,
      default: "druglikeness_evaluation"
    },
    params: {
      type: Object,
      required: true
    },
    isEmpty: {
      type: Boolean,
      default: true,
      required: true
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