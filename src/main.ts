import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import ScrollRevealDirective from './plugins/ScrollRevealDirective'

createApp(App)
    .use(ScrollRevealDirective)
    .mount('#app')
