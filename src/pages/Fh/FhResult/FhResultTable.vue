<template>
  <h5>{{ res }}</h5>
</template>

<script>
import {getCookie} from "../../../../public/js/scripts";
import axios from "axios";

export default {
  name: "FhTable",
  data() {
    return {
      uuid: this.$store.state.filterFH || getCookie("filterFH"),
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