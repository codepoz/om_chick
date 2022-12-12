<script setup>
  import Navbar from './partials/Navbar.vue';
  import Header from './components/Header.vue';
  import About from './components/About.vue';
  import Product from './components/Product.vue';
  import Footer from './partials/Footer.vue';
</script>

<template>
  <!-- begin:: navbar -->
  <Navbar />
  <!-- end:: navbar -->

  <!-- begin:: header -->
  <Header />
  <!-- end:: header -->
  
  <div class="container mx-auto">
    <!-- begin:: about -->
    <About />
    <!-- end:: about -->

    <!-- begin:: product -->
    <Product />
    <!-- end:: product -->

    <!-- begin:: footer -->
    <Footer />
    <!-- end:: footer -->
  </div>
</template>