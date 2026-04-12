<template>
  <section class="favorites-section">
    <h2>Mis favoritos</h2>

    <p v-if="favorites.length === 0">Aún no has agregado favoritos.</p>

    <div v-else class="favorites-list">
      <div v-for="product in favorites" :key="product.id" class="favorite-card">
        <img :src="product.thumbnail" :alt="product.title" class="favorite-image" />
        <h3>{{ product.title }}</h3>
        <p>{{ product.category }}</p>
        <p class="price">${{ product.price }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppFavoriteList",
  computed: {
    favorites() {
      return this.$store.getters["favorites/allFavorites"] || []
    }
  }
}
</script>

<style scoped>
.favorites-section {
  padding: 20px;
}

.favorites-section h2 {
  text-align: center;
  margin-bottom: 20px;
}

.favorites-list {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.favorite-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  width: 220px;
  text-align: center;
  background: white;
}

.favorite-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.price {
  font-weight: bold;
  color: #2c3e50;
}
</style>