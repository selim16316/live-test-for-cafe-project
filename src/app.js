// app.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Home Page Component
const HomePage = {
  template: `
    <div>
      <h1>Welcome to Our Cafe!</h1>
      <button @click="goToMenu">Menu</button>
    </div>
  `,
  methods: {
    goToMenu() {
      this.$router.push('/menu');
    }
  }
};

// Menu Page Component
const MenuPage = {
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
  template: `
    <div>
      <h2>Menu</h2>
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <button @click="showAlert(item.name)">{{ item.name }}</button>
        </li>
      </ul>
    </div>
  `,
  methods: {
    showAlert(itemName) {
      alert(`You selected: ${itemName}`);
    }
  }
};

// Router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/menu', component: MenuPage },
  ]
});

// App
const app = createApp({});
app.use(router);
app.mount('#app');
