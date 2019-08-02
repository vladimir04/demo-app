<template>
  <ul>
    <li v-for="item in items" :key="item.name">
      <a :href="item.link" target="_blank" rel="noopener">{{item.name}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "VpBasicList",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="less">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 @--spacing-base;
}
</style>
