import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: import('./pages/index.vue') },
    { path: '/laporan-baksos-2024', component: import('./pages/laporan-baksos.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App)
app.use(router)
app.mount('#app')
