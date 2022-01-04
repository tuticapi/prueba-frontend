import Vue from "vue";
import App from "./App.vue";
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

//const key = '1df4449c-4dd6-4d40-8afd-7aa6d735f656'
new Vue({
    router,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
