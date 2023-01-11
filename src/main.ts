import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ToggleSwitch from 'vuejs-toggle-switch'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).use(createPinia()).mount('#app')
