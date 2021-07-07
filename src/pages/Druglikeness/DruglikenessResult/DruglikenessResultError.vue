<!--
 * @Author: Kotori Y
 * @Date: 2021-07-07 09:34:42
 * @LastEditTime: 2021-07-07 09:47:31
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/pages/Druglikeness/DruglikenessResult/DruglikenessResultError.vue
 * @Disclaim: I love Megumi forever and ever!!!
-->
<template>
  <div class="error">
    <h1>
      You shouldn't be here at this time<br />
      You will return to calculate page after {{ s }}s
    </h1>
    <img src="../../../../public/imgs/YouShallNotPass.jpg" alt="" srcset="" />
  </div>
</template>

<script>
export default {
  name: "DruglikenessResultError",
  data(){
    return {
      s: 3
    }
  },
};
</script>

<style scoped>
h1 {
  margin: 100px auto 10px auto;
}

.error {
  text-align: center;
}

img {
  width: 50%;
  -webkit-transform: scale(0.5); /* Saf3.1+, Chrome */
  -moz-transform: scale(0.5); /* FF3.5+ */
  -ms-transform: scale(0.5); /* IE9 */
  -o-transform: scale(0.5); /* Opera 10.5+ */
  transform: scale(0.5);
}
</style>