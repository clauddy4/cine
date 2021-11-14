import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios';
import moment from "moment";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).subtract(10, 'days').calendar().replaceAll('/', " / ");
  }
});

axios.defaults.baseURL = 'https://localhost:5001/';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
