import Vue from "vue";
import Vuex from "vuex";
import * as categories from "@/store/modules/categories";
import * as expense from "@/store/modules/expense";
import * as expenses from "@/store/modules/expenses";
import * as loading from "@/store/modules/loading";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    categories,
    expense,
    expenses,
    loading
  }
});
