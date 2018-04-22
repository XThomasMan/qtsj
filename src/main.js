import Vue from 'vue'
import VueRouter from 'vue-router';
import informationView from './pages/information.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/information' },
  { path: '/information', component: informationView }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');