<!-- src/components/Home.vue -->
<template>
    <div>
      <h1>Welcome to Our Cafe!</h1>
      <button @click="goToMenu">Menu</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToMenu() {
        this.$router.push('/menu');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here if needed */
  </style>
  