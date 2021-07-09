<!--
 * @Author: Kotori Y
 * @Disclaim: I love Megumi forever and ever!!!
-->
<template>
  <div class="container">
    <form class="border p-3 border-top-0">
      <FillButton :smiles="exampleSmiles"/>
      <Input v-on:contentChanged="contentChanged"/>
      <div class="row">
        <clear-button :isEmpty="isEmpty"/>
        <submit-button :actionName="actionName" :isEmpty="isEmpty" :params="params" :redirectName="redirectName"
                       Name="eventName"/>
      </div>
    </form>
  </div>
</template>

<script>
import Input from "@/pages/CalculateComponent/InputArea";
import FillButton from "@/pages/CalculateComponent/FillButton";
import ClearButton from "@/pages/CalculateComponent/ClearButton";
import SubmitButton from "@/pages/CalculateComponent/SubmitButton";

export default {
  name: "FHMain",
  data() {
    return {
      exampleSmiles: "O=c1cc(-c2ccc(O)c(O)c2)oc2cc(O)cc(O)c12",
      actionName: "filterFH",
      redirectName: "FhResult",
      isEmpty: true,
      params: {}
    }
  },
  methods: {
    contentChanged(value) {
      this.isEmpty = !value
    }
  },
  components: {
    SubmitButton,
    ClearButton,
    FillButton,
    Input,
  },
};
</script>

<style scoped>
form {
  margin: 30px auto;
  /* border: 0.5px solid sandybrown !important; */
  box-shadow: 1px 1px 5px grey;
  border-radius: 5px;
}

.row {
  display: flex;
  justify-content: space-around;
}
</style>