<template>
  <v-app>
    <v-main>
      <AppHeader />
      <AppProductList />
      <AppFavoriteList />
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "./components/Header.vue"
import AppProductList from "./components/ProductList.vue"
import AppFavoriteList from "./components/FavoriteList.vue"
import AppFooter from "./components/Footer.vue"

export default {
  name: "App",
  components: {
    AppHeader,
    AppProductList,
    AppFavoriteList,
    AppFooter
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f5f5;
}

#app {
  min-height: 100vh;
}
</style>