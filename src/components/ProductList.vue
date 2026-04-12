<template>
  <section>
    <div class="filter-container">
      <v-select
        id="category"
        v-model="selectedCategory"
        :items="categories"
        label="Filtrar por categoría"
        clearable
        variant="outlined"
        density="comfortable"
      ></v-select>
    </div>

    <section class="product-list">
      <p v-if="loading">Cargando productos...</p>

      <p v-else-if="error">{{ error }}</p>

      <p v-else-if="filteredProducts.length === 0">
        No hay productos disponibles.
      </p>

      <AppProductCard
        v-else
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </section>
  </section>
</template>

<script>
import AppProductCard from "./ProductCard.vue"

export default {
  name: "AppProductList",
  components: {
    AppProductCard
  },
  computed: {
    products() {
      return this.$store.getters["products/allProducts"] || []
    },
    loading() {
      return this.$store.state.products.loading
    },
    error() {
      return this.$store.state.products.error
    },
    selectedCategory: {
      get() {
        return this.$store.getters["filters/selectedCategory"]
      },
      set(value) {
        this.$store.commit("filters/SET_SELECTED_CATEGORY", value)
      }
    },
    categories() {
      return [...new Set(this.products.map(product => product.category))]
    },
    filteredProducts() {
      if (!this.selectedCategory) {
        return this.products
      }

      return this.products.filter(
        product => product.category === this.selectedCategory
      )
    }
  },
  mounted() {
    this.$store.dispatch("products/fetchProducts")
  }
}
</script>

<style scoped>
.filter-container {
  margin: 20px auto;
  max-width: 320px;
}

.product-list {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>