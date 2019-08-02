import router from "@/router";
import ExpensesService from "@/services/ExpensesService";

export const state = {
  expense: {}
};
export const mutations = {
  SET_EXPENSE(state, expense) {
    state.expense = expense;
  },
  RESET_EXPENSE(state) {
    state.expense = {};
  },
  UPDATE_EXPENSE(state, updatedProperty) {
    const { name, value } = updatedProperty;
    state.expense = {
      ...state.expense,
      [name]: value
    };
  }
};
export const actions = {
  getExpense({ commit, getters }, { expenseId, loadingType }) {
    const expense = getters.getExpenseById(expenseId);
    if (expense) {
      commit("SET_EXPENSE", expense);
    } else {
      commit("ADD_LOADING", loadingType);
      return ExpensesService.getExpense(expenseId)
        .then(res => {
          const { data } = res;
          commit("SET_EXPENSE", data);
        })
        .catch(() => {
          router.push({ name: "notFound" });
        })
        .finally(() => {
          commit("REMOVE_LOADING", loadingType);
        });
    }
  },
  addExpense({ commit }, { expense, loadingType }) {
    commit("ADD_LOADING", loadingType);
    return ExpensesService.addExpense(expense).finally(() => {
      commit("REMOVE_LOADING", loadingType);
    });
  },
  editExpense({ commit }, { expense, loadingType }) {
    commit("ADD_LOADING", loadingType);
    return ExpensesService.editExpense(expense).finally(() => {
      commit("REMOVE_LOADING", loadingType);
    });
  },
  updateExpense({ commit }, updatedProperty) {
    commit("UPDATE_EXPENSE", updatedProperty);
  },
  resetExpense({ commit }) {
    commit("RESET_EXPENSE");
  }
};

export const getters = {
  getExpenseById: (state, getters, rootState) => id =>
    rootState.expenses.expenses.find(expense => expense.id === id)
};
