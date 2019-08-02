<template>
  <div id="app">
    <VpContainer>
      <VpNavbar />
      <notifications />
      <router-view :key="$route.fullPath" />
    </VpContainer>
  </div>
</template>

<script>
import VpContainer from "@/components/layout/VpContainer.vue";
import VpNavbar from "@/components/layout/VpNavbar.vue";
export default {
  components: {
    VpContainer,
    VpNavbar
  }
};
</script>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
