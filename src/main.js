import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios';
import moment from "moment";
import '@/ui/'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).subtract(100, 'days').calendar().replaceAll('/', " / ");
  }
});

const accessToken = localStorage.getItem('accessToken');

if (accessToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

axios.defaults.baseURL = 'https://localhost:5001/';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
