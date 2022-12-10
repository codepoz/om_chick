<script setup>
import Navbar from './partials/Navbar.vue';
import HelloWorld from './components/HelloWorld.vue'
import Footer from './partials/Footer.vue';
</script>

<template>
  <!-- begin:: navbar -->
  <Navbar />
  <!-- end:: navbar -->
  
  <HelloWorld msg="Vite + Vue" />
  
  <!-- begin:: footer -->
  <Footer />
  <!-- end:: footer -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
