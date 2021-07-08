<template>
  <div class="col-3">
    <button
        aria-label="Submit"
        class="btn btn-success"
        type="button"
        value="Submit"
        @click="doScopy(eventName, params)"
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

</style>