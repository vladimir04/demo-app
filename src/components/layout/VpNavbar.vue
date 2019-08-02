<template>
  <nav class="navbar">
    <router-link :to="{ name: 'home' }" class="navbar__logo">
      <VpIcon type="logo" />
    </router-link>
    <router-link :to="{ name: 'expenses' }">Expenses</router-link>|
    <router-link :to="{ name: 'expenseAdd', params: { expenseId: 'new' }}">Add Expense</router-link>|
    <router-link :to="{ name: 'expensesStats' }">Stats</router-link>
  </nav>
</template>

<script>
import VpIcon from "@/components/VpIcon";
export default {
  name: "VpNavbar",
  components: { VpIcon }
};
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  padding: @--spacing-base*2 0;
  .navbar__logo {
    margin-right: auto;
    display: flex;
    flex: 0 0 @--spacing-base*4;
  }
  a {
    padding: 0 @--spacing-base / 2;
    color: @--color-secondary;
    font-weight: bold;
    &.router-link-exact-active {
      color: @--color-primary;
      text-decoration: underline;
    }
  }
}
</style>
