<template>
  <h5>{{ result }}</h5>
</template>

<script>
export default {
  name: "FhTable",
  computed: {
    result() {
      return sessionStorage.getItem("fh_result")
    }
  }
}
</script>

<style>

</style>