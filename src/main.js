import './assets/main.css'
import 'vuetify/dist/vuetify.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify/lib/framework.mjs'
import App from './App.vue'
import router from './router'
const vuetify = createVuetify({
  theme: {
    dark: true,
  },
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
