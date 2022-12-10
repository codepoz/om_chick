<template>
  <div class="home">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <h2 class="text-2xl font-bold text-blue-800">
        how to start your project with tailwind css & Vue 3
      </h2>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import '@/assets/tailwind.css';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
