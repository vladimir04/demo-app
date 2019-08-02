<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "VpContainer"
};
</script>

<style lang="less" scoped>
.container {
  display: block;
  max-width: @--layout-width;
  margin: 0 auto;
}
</style>

