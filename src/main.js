import './assets/main.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import { initTheme } from './utils/theme'
import { initScrollReveal } from './utils/reveal'

initTheme()

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.mount('#app')

const runReveal = () => requestAnimationFrame(initScrollReveal)

router.isReady().then(runReveal)
router.afterEach(runReveal)
