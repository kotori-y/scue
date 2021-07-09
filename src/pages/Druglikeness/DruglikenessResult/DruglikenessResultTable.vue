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
  <h5>{{ result }}</h5>
</template>

<script>
export default {
  name: "DruglikenessTable",
  computed: {
    result() {
      return sessionStorage.getItem("druglikeness_result")
    }
  }
}
</script>

<style>

</style>