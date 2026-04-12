export default {
  namespaced: true,
  state: {
    selectedCategory: ""
  },
  getters: {
    selectedCategory(state) {
      return state.selectedCategory
    }
  },
  mutations: {
    SET_SELECTED_CATEGORY(state, category) {
      state.selectedCategory = category
    }
  }
}