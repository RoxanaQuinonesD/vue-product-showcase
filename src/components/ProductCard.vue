<template>
  <div class="card">
    <img :src="product.thumbnail" :alt="product.title" class="card-image" />

    <div class="card-header">
      <h3>{{ product.title }}</h3>
      <button
        class="favorite-btn"
        :class="{ active: isFavorite }"
        @click="toggleFavorite"
        title="Agregar a favoritos"
      >
        ♥
      </button>
    </div>

    <p>{{ product.category }}</p>
    <p class="price">${{ product.price }}</p>
  </div>
</template>

<script>
export default {
  name: "AppProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    isFavorite() {
      return this.$store.state.favorites.favorites.some(
        item => item.id === this.product.id
      )
    }
  },
  methods: {
    toggleFavorite() {
      if (this.isFavorite) {
        this.$store.commit("favorites/REMOVE_FAVORITE", this.product.id)
      } else {
        this.$store.commit("favorites/ADD_FAVORITE", this.product)
      }
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  width: 220px;
  text-align: center;
  background: white;
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.card-header h3 {
  font-size: 18px;
  margin: 10px 0;
  text-align: left;
  flex: 1;
}

.price {
  font-weight: bold;
  color: #2c3e50;
}

.favorite-btn {
  border: none;
  background: transparent;
  font-size: 22px;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1.5px #444;
}

.favorite-btn.active {
  color: red;
  -webkit-text-stroke: 1px red;
}
</style>