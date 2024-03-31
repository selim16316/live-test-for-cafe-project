<!-- src/components/Menu.vue -->
<template>
    <div>
      <h2>Menu</h2>
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <button @click="showAlert(item.name)">{{ item.name }}</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { name: 'Coffee' },
          { name: 'Tea' },
          { name: 'Sandwich' },
          { name: 'Cake' },
        ]
      };
    },
    methods: {
      showAlert(itemName) {
        alert(`You selected: ${itemName}`);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here if needed */
  </style>
  