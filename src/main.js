import Vue from 'vue'
import VueRouter from 'vue-router';
import informationView from './pages/information.vue';
import operatorsView from './pages/info-operators.vue';
import taobaoView from './pages/info-taobao.vue';
import authView from './pages/auth.vue';
import infoBasicionView from './pages/info-basic.vue';
import successView from './pages/success.vue';
import './styles/common.less'

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/auth' },
  { path: '/information', component: informationView },
  { path: '/info-operators', component: operatorsView },
  { path: '/info-basic', component: infoBasicionView },
  { path: '/info-taobao', component: taobaoView },
  { path: '/auth', component: authView },
  { path: '/success', component: successView }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');