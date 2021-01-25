import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from 'vue-cli-plugin-vuetify'

createApp(App).use(router).mount('#app')

createApp(App)
  .use(router)
//   .use(store)
  .mount("#app");

// I don't use it by default.
new Vue({
  router,
//   store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
