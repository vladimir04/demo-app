<template>
  <section v-if="!loading">
    <div v-for="item in items" :key="item.id" :item="item">
      <slot :item="item" />
    </div>
  </section>
  <VpLoading v-else />
</template>

<script>
import VpLoading from "@/components/VpLoading";
import expensesService from "@/services/ExpensesService";

export default {
  name: "VpFilteredList",
  components: { VpLoading },
  props: {
    items: {
      type: [Object, Array],
      default: () => []
    },
    loading: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped lang="less">
a {
  color: @--color-secondary;
  &:hover {
    text-decoration: none;
  }
}
</style>