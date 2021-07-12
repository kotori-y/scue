<!--
 * @Author: Kotori Y
 * @Date: 2021-07-06 17:08:04
 * @LastEditTime: 2021-07-07 14:21:37
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/pages/Druglikeness/DruglikenessResult/DruglikenessResultTable.vue
 * @Disclaim: I love Megumi forever and ever!!!
-->
<template>
  <h5>{{ res }}</h5>
</template>

<script>
import {getCookie} from "../../../../public/js/scripts";
import axios from "axios";

export default {
  name: "DruglikenessTable",
  data() {
    return {
      uuid: this.$store.state.evaluateDruglikeness || getCookie("evaluateDruglikeness"),
      res: {}
    }
  },
  mounted() {
    if (this.uuid.split(/\W+/).length === 1) {
      this.res = {"msg": "You are bad"}
      return;
    }
    axios({
      method: "get",
      url: `http://192.168.1.128:8000/res/${this.uuid}`,
    }).then(resp => {
      this.res = resp.data
    })
  }
}
</script>

<style>

</style>