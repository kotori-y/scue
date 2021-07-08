<!--
 * @Author: Kotori Y
 * @Date: 2021-07-06 17:27:27
 * @LastEditTime: 2021-07-07 09:08:17
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/pages/Druglikeness/DruglikenessMain/DruglikenessMain.vue
 * @Disclaim: I love Megumi forever and ever!!!
-->
<template>
  <div class="container">
    <form class="border p-3 border-top-0">
      <FillButton :smiles="exampleSmiles"/>
      <Input/>
      <div class="row">
        <clear-button/>
        <submit-button :eventName="eventName" :params="params"/>
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
  name: "DruglikenessMain",
  data() {
    return {
      exampleSmiles: "c1ccccc1\nCCCCCC",
      eventName: "evaluateDruglikeness",
      params: {showSmiles: true}
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
  justify-content: space-between;
}
</style>