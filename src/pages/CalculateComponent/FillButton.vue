<template>
  <div>
    <input type="hidden"/>
    <label>
      SMILES(MAX <span class="text-danger">20,000</span>)
      <button class="btn btn-info" type="button" @click="fillExample(smiles)">
        Example
      </button>
    </label>
  </div>
</template>

<script>
export default {
  name: "FillButton",
  methods: {
    fillExample(smiles) {
      this.$bus.$emit("fillExample", smiles)
    }
  },
  props: {
    smiles: {
      type: String,
      required: true,
      default: ""
    }
  }
}
</script>

<style scoped>

</style>