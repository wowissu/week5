import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/base.css'

import App from './App.vue'
import router from './router'
import apiService from './services/api.service'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(apiService)

app.mount('#app')
