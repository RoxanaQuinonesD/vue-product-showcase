export default {
  namespaced: true,
  state: {
    favorites: []
  },
  getters: {
    allFavorites(state) {
      return state.favorites
    }
  },
  mutations: {
    ADD_FAVORITE(state, product) {
      const exists = state.favorites.some(item => item.id === product.id)

      if (!exists) {
        state.favorites.push(product)
      }
    },
    REMOVE_FAVORITE(state, productId) {
      state.favorites = state.favorites.filter(item => item.id !== productId)
    }
  }
}