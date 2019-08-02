<template>
  <img :style="{ width: size }" :src="require(`@/assets/${type}.svg`)" />
</template>

<script>
export default {
  name: "VpIcon",
  props: {
    type: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "100%"
    }
  }
};
</script>
