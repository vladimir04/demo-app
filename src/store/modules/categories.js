import CategoriesService from "@/services/CategoriesService";

export const state = {
  categories: {}
};
export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  }
};
export const actions = {
  getCategories({ commit }) {
    return CategoriesService.getCategories().then(res => {
      const { data } = res;
      commit("SET_CATEGORIES", data);
    });
  }
};
