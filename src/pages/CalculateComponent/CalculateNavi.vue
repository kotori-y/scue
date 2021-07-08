<template>
  <div class="container">
    <nav aria-label="breadcrumb" class="mt-2">
      <slot></slot>
    </nav>
  </div>
</template>

<script>
export default {
  name: "CalNavi",
};
</script>

<style lang="css" scoped>

nav {
  background-color: rgb(236, 236, 211);
  border-radius: 10px;
  height: 50px;
  align-items: center;
  line-height: 50px;
  text-align: center;
  vertical-align: middle;
  font-size: 20px;
}

</style>