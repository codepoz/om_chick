<script setup>
import Navbar from './partials/Navbar.vue';
import Footer from './partials/Footer.vue';
</script>

<template>
  <!-- begin:: navbar -->
  <Navbar />
  <!-- end:: navbar -->

  <!-- begin:: body -->
  <RouterView />
  <!-- end:: body -->

  <!-- begin:: footer -->
  <Footer />
  <!-- end:: footer -->
</template>