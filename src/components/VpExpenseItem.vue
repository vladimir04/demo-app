<template>
  <article class="mb-2">
    <div class="flex">
      <router-link :to="{ name: 'expenseAdd', params: { expenseId: expense.id } }">
        <h6>{{ expense.name }}</h6>
      </router-link>
      <VpBadge class="self-center mx-2">{{ expense.category }}</VpBadge>
      <VpCurrency :amount="expense.amount" class="ml-auto" />
      <slot name="actions"></slot>
    </div>
  </article>
</template>

<script>
import VpBadge from "@/components/VpBadge";
import VpCurrency from "@/components/VpCurrency";

export default {
  name: "VpExpenseItem",
  components: { VpBadge, VpCurrency },
  props: {
    expense: {
      type: Object,
      required: true
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