import './assets/main.css'
import 'vuetify/dist/vuetify.min.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify/lib/framework.mjs'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faSignature, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
library.add(faSignature)
library.add(faAngleDoubleDown)
import App from './App.vue'
import router from './router'
const vuetify = createVuetify({
  theme: {
    dark: true,
  },
})
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
