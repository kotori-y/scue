<template>
  <div class="myContainer">
    <div class="loader"></div>
  </div>

</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped>
.myContainer {
  position: absolute !important;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.22);
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  position: relative;
  top: 30%;
  left: 45%;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>