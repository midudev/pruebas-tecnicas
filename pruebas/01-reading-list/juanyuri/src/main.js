import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router/router.js'

const app = createApp(App)

/* Pinia for State Management */
app.use(createPinia())

/* Use of Vue-router */
app.use(router)

/* Mounting the application */
app.mount('#app')

