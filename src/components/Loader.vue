<template>
  <div class="container-center">
    <img class="amm-logo" src="/public/amm.png" />
    <div class="loader"></div>
    <h5 class="amm-title">Angkatan Muda Muhammadiyah</h5>
  </div>
</template>
<style scoped>
.amm-logo {
  /* position center */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
}
.loader {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: #0b3f24;
  margin: 0 auto;
  position: relative;
  animation: rotating 2s infinite ease;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  border-radius: 100px 100px;
  border: 5px solid transparent;
}
.loader:before {
  top: 5px;
  left: 5px;
  width: 180px;
  height: 180px;
  border-top-color: #bca116;
  animation: rotating 2s infinite ease;
}
.loader:after {
  top: 15px;
  left: 15px;
  width: 160px;
  height: 160px;
  border-top-color: #056636;
  animation: rotating 1.5s infinite ease;
}
@keyframes rotating {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
