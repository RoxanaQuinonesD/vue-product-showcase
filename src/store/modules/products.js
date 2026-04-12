import axios from "axios"

export default {
  namespaced: true,
  state: {
    products: [],
    loading: false,
    error: null
  },
  getters: {
    allProducts(state) {
      return state.products
    }
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      commit("SET_LOADING", true)
      commit("SET_ERROR", null)

      try {
        const response = await axios.get("https://dummyjson.com/products")
        commit("SET_PRODUCTS", response.data.products)
      } catch (error) {
        commit("SET_ERROR", "No se pudieron cargar los productos.")
        console.error(error)
      } finally {
        commit("SET_LOADING", false)
      }
    }
  }
}