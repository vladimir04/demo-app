import { http } from "@/services/HttpService";

const addExpense = expense => {
  return http.post("/expenses", expense);
};

const editExpense = expense => {
  return http.put(`/expenses/${expense.id}`, expense);
};

const getExpenses = () => {
  return http.get("/expenses");
};

const getExpense = expenseId => {
  return http.get(`/expenses/${expenseId}`);
};

const deleteExpense = expenseId => {
  return http.delete(`/expenses/${expenseId}`);
};

export default {
  addExpense,
  getExpenses,
  getExpense,
  editExpense,
  deleteExpense
};
