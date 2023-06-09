import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import 'prismjs'
import 'prismjs/components/prism-solidity'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth'

import App from './App.vue'


import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Try to refresh token at startup
try {
    const authStore = useAuthStore()
    await authStore.refreshToken()
} catch (error) {
    console.log(error)
}

app.mount('#app')
