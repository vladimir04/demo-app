<template>
  <main>
    <VpTitle :title="pageTitle" />
    <VpLoading v-if="loading[loadingTypeGet]" />
    <form @submit.prevent="submitExpense" class="flex flex-col" v-else>
      <input
        :value="expense.name"
        @input="updateField($event);"
        type="text"
        name="name"
        placeholder="Name"
        required
        minlength="2"
      />
      <input
        :value="expense.amount"
        @input="updateField($event);"
        type="number"
        name="amount"
        placeholder="Amount"
        required
        min="0"
      />
      <select :value="expense.category" @input="updateField($event);" name="category" required>
        <option value>Choose category</option>
        <option
          v-for="category in categories"
          :key="category.name"
          :value="category.name"
        >{{ category.name }}</option>
      </select>
      <input
        :value="expense.date"
        @input="updateField($event);"
        type="date"
        name="date"
        placeholder="Date"
        required
      />
      <VpButton class="flex justify-center" :type="'submit'" :loading="loading[loadingTypeAdd]">Save</VpButton>
    </form>
  </main>
</template>

<script>
import { mapState } from "vuex";
import router from "@/router";
import VpButton from "@/components/VpButton";
import VpLoading from "@/components/VpLoading";

export default {
  components: { VpButton, VpLoading },
  props: ["expenseId"],
  data() {
    return {
      loadingTypeAdd: "expenseAdd",
      loadingTypeGet: "expenseGet"
    };
  },
  computed: {
    pageTitle() {
      return this.expenseId === "new"
        ? "Add expense"
        : `Edit ${this.expenseId}`;
    },
    ...mapState({
      categories: state => state.categories.categories,
      expense: state => state.expense.expense,
      loading: state => state.loading.loading
    })
  },
  created() {
    this.$store.dispatch("resetExpense");
    this.$store.dispatch("getCategories");
    if (this.expenseId !== "new") {
      this.$store.dispatch("getExpense", {
        expenseId: this.expenseId,
        loadingType: this.loadingTypeGet
      });
    }
  },
  methods: {
    updateField(event) {
      this.$store.dispatch("updateExpense", {
        name: event.target.name,
        value: event.target.value
      });
    },
    submitExpense() {
      if (this.expenseId === "new") {
        this.addExpense();
      } else {
        this.editExpense();
      }
    },
    addExpense() {
      this.$store
        .dispatch("addExpense", {
          expense: this.expense,
          loadingType: this.loadingTypeAdd
        })
        .then(() => {
          this.$notify({
            title: "Success",
            text: "Add expense successful",
            type: "success"
          });
          router.push({ name: "expenses" });
        })
        .catch(() => {
          this.$notify({
            title: "Error",
            text: err,
            type: "error"
          });
        });
    },
    editExpense() {
      this.$store
        .dispatch("editExpense", {
          expense: this.expense,
          loadingType: this.loadingTypeAdd
        })
        .then(() => {
          this.$notify({
            title: "Success",
            text: "Edit expense successful",
            type: "success"
          });
          router.push({ name: "expenses" });
        })
        .catch(err => {
          this.$notify({
            title: "Error",
            text: err,
            type: "error"
          });
        });
    }
  }
};
</script>

<style scoped lang="less">
input,
select {
  display: block;
  width: 100%;
  height: @--spacing-base * 3.2;
  padding: @--spacing-base / 2 @--spacing-base;
  margin-bottom: @--spacing-base;
  line-height: @--spacing-base;
}
button {
  height: @--spacing-base * 3.2;
  padding: @--spacing-base / 2 @--spacing-base;
  border: 1px solid @--color-primary;
  color: #fff;
  background-color: @--color-primary;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: darken(@--color-primary, 10%);
    border-color: darken(@--color-primary, 10%);
  }
}
</style>