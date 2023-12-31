import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import router from './router/index'

const app = createApp(App)

app.use(pinia)

app.use(router)

app.mount('#app')