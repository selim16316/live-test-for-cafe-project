import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Menu from './components/Menu.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/menu', component: Menu },
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
