export const state = {
  loading: {}
};
export const mutations = {
  ADD_LOADING(state, loadingType) {
    state.loading = {
      ...state.loading,
      [loadingType]: state.loading[loadingType] ? state.loading[loadingType] + 1 : 1
    };
  },
  REMOVE_LOADING(state, loadingType) {
    state.loading = {
      ...state.loading,
      [loadingType]: state.loading[loadingType] ? state.loading[loadingType] - 1 : 0
    };
  }
};
