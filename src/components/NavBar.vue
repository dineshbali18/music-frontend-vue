<!-- src/components/NavBar.vue -->
<template>
<div>
  <nav>
    <router-link class="navele" to="/">Home</router-link>
    <router-link class="navele" to="/add">Add</router-link>
    <!-- <router-link class="navele" to="/update">Add</router-link> -->
  </nav>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  background-color: #333;
  padding: 1rem;
}

.navele {
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>
