import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
import { useAppStore } from './stores/app'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

const appStore = useAppStore(pinia)
await appStore.hydrate()
app.mount('#app')