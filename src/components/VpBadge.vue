<template>
  <span class="badge">
    <slot />
  </span>
</template>

<script>
export default {
  name: "VpBadge"
};
</script>

<style scoped lang="less">
.badge {
  display: inline-block;
  padding: @--spacing-base / 4 @--spacing-base / 2;
  color: #fff;
  background-color: @--color-dark;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: @--spacing-base / 4;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &--primary {
    background-color: @--color-primary;
  }
  &--secondary {
    background-color: @--color-secondary;
  }
  &--disabled {
    background-color: @--color-light;
  }
}
</style>
