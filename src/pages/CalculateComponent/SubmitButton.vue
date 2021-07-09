<template>
  <div :class="{'col-2': true, disabled: isEmpty}">
    <button
        aria-label="Submit"
        class="btn btn-success"
        type="button"
        value="Submit"
        @click="doScopy(params, actionName, redirectName)"
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
    doScopy(params, actionName, redirectName) {
      this.$bus.$emit("execScopy", params, actionName, redirectName)
    }
  },
  props: {
    actionName: {
      type: String,
      required: true,
      default: "evaluateDruglikeness"
    },
    params: {
      type: Object,
      required: true
    },
    redirectName: {
      type: String,
      required: true,
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