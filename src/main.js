import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store/store";
import "@/vendors";
import "@/styles/index.less";
import VpTitle from "@/components/VpTitle";

Vue.config.productionTip = false;

Vue.component("VpTitle", VpTitle);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
