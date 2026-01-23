import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initTheme } from './utils/theme'
import { initScrollReveal } from './utils/reveal'

initTheme()

const app = createApp(App)

app.use(router)
app.mount('#app')

const runReveal = () => requestAnimationFrame(initScrollReveal)

router.isReady().then(runReveal)
router.afterEach(runReveal)
