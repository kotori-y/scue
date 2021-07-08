<template>
  <div>
    <div class="form-group text-left">
    <textarea
        v-model="smiles"
        class="form-control"
        datatype="Require"
        name="smiles-list"
        placeholder="Enter SMILES"
        rows="15"
    ></textarea>
    </div>
    <input name="method" type="hidden" value="2"/>
  </div>
</template>

<script>
export default {
  name: "InputArea",
  data() {
    return {
      smiles: "",
    };
  },
  methods: {
    fillExample(smiles) {
      this.smiles = smiles;
    },
    clearArea() {
      this.smiles = "";
    },
    async evaluateDruglikeness(params) {
      params.smiles = this.smiles.split(/\W+/)
      this.smiles = ""
      this.$bus.$emit("changeBusyStatus")
      await this.$store.dispatch("evaluateDruglikeness", params);
      this.$bus.$emit("changeBusyStatus")
      await this.$router.push({name: "DruglikenessResult"});
    }
  },
  watch: {
    smiles: {
      immediate: true,
      handler(value) {
        this.$emit('contentChanged', value)
      }
    }
  },
  mounted() {
    this.$bus.$on("clearArea", this.clearArea)
    this.$bus.$on("fillExample", this.fillExample)
    this.$bus.$on("evaluateDruglikeness", this.evaluateDruglikeness)
  },
  beforeCreate() {
    this.$bus.$off("evaluateDruglikeness")
  }
};
</script>

<style lang="css" scoped>

textarea {
  overflow: scroll;
  resize: none; /* Remove this if you want the user to resize the textarea */
  white-space: nowrap;
}

textarea {
  margin: 10px auto;
}

</style>