import ExpensesService from "@/services/ExpensesService";

export const state = {
  expenses: []
};
export const mutations = {
  SET_EXPENSES(state, expenses) {
    state.expenses = expenses;
  },
  ADD_EXPENSE(state, expense) {
    state.expenses.push(expense);
  },
  REMOVE_EXPENSE(state, expenseId) {
    state.expenses = state.expenses.filter(expense => expense.id !== expenseId);
  }
};
export const actions = {
  getExpenses({ commit }, loadingType) {
    commit("ADD_LOADING", loadingType);
    return ExpensesService.getExpenses()
      .then(res => {
        const { data } = res;
        commit("SET_EXPENSES", data);
      })
      .finally(() => {
        commit("REMOVE_LOADING", loadingType);
      });
  },
  deleteExpense({ commit }, { expenseId, loadingType }) {
    commit("ADD_LOADING", loadingType);
    return ExpensesService.deleteExpense(expenseId)
      .then(() => {
        commit("REMOVE_EXPENSE", expenseId);
      })
      .finally(() => {
        commit("REMOVE_LOADING", loadingType);
      });
  }
};
