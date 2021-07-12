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
import { v4 as uuidv4 } from 'uuid';
import {getCookie} from "../../../public/js/scripts";
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
    async doScopy(params, actionName, redirectName) {
      params.smiles = this.smiles.split(/\s+/)
      params.uuid = getCookie(actionName)
      this.smiles = ""
      this.$bus.$emit("changeBusyStatus")
      params["uuid"] = sessionStorage.getItem(actionName) || uuidv4()
      await this.$store.dispatch(actionName, params);
      this.$bus.$emit("changeBusyStatus")
      await this.$router.push({name: redirectName});
    },
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
    this.$bus.$on("execScopy", this.doScopy)
  },
  beforeDestroy() {
    this.$bus.$off("execScopy")
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