<script setup>
  import Navbar from './partials/Navbar.vue';
  import Header from './components/Header.vue';
  import About from './components/About.vue';
  import Product from './components/Product.vue';
  import More from './components/More.vue';
  import Footer from './partials/Footer.vue';
</script>

<template>
  <!-- begin:: navbar -->
  <Navbar />
  <!-- end:: navbar -->

  <!-- begin:: header -->
  <Header />
  <!-- end:: header -->

  <!-- begin:: about -->
  <About />
  <!-- end:: about -->

  <!-- begin:: product -->
  <Product />
  <!-- end:: product -->

  <!-- begin:: more -->
  <More />
  <!-- end:: more -->

  <!-- begin:: footer -->
  <Footer />
  <!-- end:: footer -->
</template>