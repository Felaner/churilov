import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from '@/router'
// import axios from 'axios'
import { auth } from './firebase'
import store from './store'
import Notifications from '@kyvg/vue3-notification'
import { loadFonts } from './plugins/webfontloader'
import './assets/fonts/fonts.css'
import './assets/styles/grid.css'
import './assets/styles/theme.sass'

loadFonts()

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(Notifications)
      .use(vuetify)
      .use(router)
      .use(store)
      .mount('#app')
  }
})
