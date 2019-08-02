import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/expenses",
      name: "expenses",
      component: () => import("./views/Expenses.vue")
    },
    {
      path: "/expense/:expenseId",
      name: "expenseAdd",
      component: () => import("./views/ExpenseAdd.vue"),
      props: true
    },
    {
      path: "/expenses/stats",
      name: "expensesStats",
      component: () => import("./views/ExpensesStats.vue")
    },
    {
      path: "*",
      name: "notFound",
      component: () => import("./views/NotFound.vue")
    }
  ]
});
