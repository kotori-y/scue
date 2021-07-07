<!--
 * @Author: Kotori Y
 * @Date: 2021-07-06 17:27:27
 * @LastEditTime: 2021-07-07 09:08:17
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/pages/Druglikeness/DruglikenessMain/Index.vue
 * @Disclaim: I love Megumi forever and ever!!!
-->
<template>
  <div class="container">
    <DruglikenessMainInput />
  </div>
</template>

<script>
import DruglikenessMainInput from "./DruglikenessMainInput.vue";

export default {
  name: "DruglikenessMain",
  components: {
    DruglikenessMainInput,
  },
};
</script>