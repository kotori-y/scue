<!--
 * @Author: Kotori Y
 * @Date: 2021-07-06 08:56:26
 * @LastEditTime: 2021-07-06 09:58:30
 * @LastEditors: Kotori Y
 * @Description: 
 * @FilePath: /fastscopy_frontend/src/pages/Home/index.vue
 * @Disclaim: I love Megumi forever and ever!!!
-->

<template>
  <div>
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from "./Header";
import Body from "./Body";
export default {
  name: "Home",
  components: {
    Header,
    Body,
  },
};
</script>