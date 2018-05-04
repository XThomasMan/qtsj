import Vue from 'vue'
import VueRouter from 'vue-router';
import informationView from './pages/information.vue';
import operatorsView from './pages/operators.vue';
import taobaoView from './pages/taobao.vue';
import authView from './pages/auth.vue';
import infoBasicionView from './pages/info-basic.vue';
import successView from './pages/success.vue';
import './styles/common.less'

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/auth' },
  { path: '/information', component: informationView },
  { path: '/operators', component: operatorsView },
  { path: '/taobao', component: taobaoView },
  { path: '/auth', component: authView },
  { path: '/success', component: successView },
  { path: '/info-basic', component: infoBasicionView }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');