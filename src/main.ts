import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

import feather from "feather-icons";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

setTimeout(() => {
  feather.replace();
}, 1000);