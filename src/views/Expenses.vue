<template>
  <main>
    <VpTitle :title="'Expenses'" />
    <VpFilteredList :loading="loading[loadingType]" :items="expenses">
      <template v-slot="{ item }">
        <VpExpenseItem :expense="item">
          <template #actions>
            <VpButton
              class="flex ml-2"
              @click="removeListItem(item.id)"
              :loading="loading[`${loadingType}_${item.id}`]"
            >
              <VpIcon type="times" size="12px" />
            </VpButton>
          </template>
        </VpExpenseItem>
      </template>
    </VpFilteredList>
    <div class="flex justify-end">
      <router-link :to="{ name: 'expenseAdd', params: { expenseId: 'new' }}">Add Expense</router-link>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import VpFilteredList from "@/components/VpFilteredList";
import VpExpenseItem from "@/components/VpExpenseItem";
import VpIcon from "@/components/VpIcon";
import VpButton from "@/components/VpButton";
import VpBadge from "@/components/VpBadge";
import VpCurrency from "@/components/VpCurrency";
import expensesService from "@/services/ExpensesService";

export default {
  name: "expenses",
  components: {
    VpFilteredList,
    VpIcon,
    VpButton,
    VpBadge,
    VpCurrency,
    VpExpenseItem
  },
  data() {
    return {
      loadingType: "expenses"
    };
  },
  computed: {
    ...mapState({
      expenses: state => state.expenses.expenses,
      loading: state => state.loading.loading
    })
  },
  created() {
    this.$store.dispatch("getExpenses", this.loadingType);
  },
  methods: {
    removeListItem(expenseId) {
      this.$store.dispatch("deleteExpense", {
        expenseId,
        loadingType: `${this.loadingType}_${expenseId}`
      });
    }
  }
};
</script>
