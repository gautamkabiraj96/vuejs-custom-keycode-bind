import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.config.keyCodes.f2 = 113;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
