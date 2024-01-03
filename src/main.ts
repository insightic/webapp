import '@tabler/core'
import '@tabler/core/dist/css/tabler.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'prismjs'
import 'prismjs/components/prism-solidity'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import './assets/main.css'

import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

import { createApp } from 'vue'
import Notifications from '@kyvg/vue3-notification'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(FloatingVue)

app.use(createPinia())
app.use(router)
app.use(Notifications)

app.mount('#app')
