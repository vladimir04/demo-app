<template>
  <h2 class="mb-8">{{ title }}</h2>
</template>

<script>
export default {
  name: "VpTitle",
  props: {
    title: {
      type: String,
      default: "Looking for a title"
    }
  }
};
</script>
