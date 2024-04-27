<template>
  <keep-alive>
    <component :is="routedComponent"></component>
  </keep-alive>
</template>

<script>
import Home from "./pages/index.vue";
import LaporanBaksos from "./pages/laporan-baksos.vue";
const routes = {
  "/": Home,
  "/laporan-baksos-2024": LaporanBaksos,
};

export default {
  data() {
    return { current: window.location.pathname };
  },
  computed: {
    routedComponent() {
      const pages = routes[this.current];
      if (!pages) return Home;
      return pages;
    },
  },
};
</script>
