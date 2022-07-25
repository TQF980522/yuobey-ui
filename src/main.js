import { createApp } from 'vue'
import App from './App.vue'
// import yuobeyUI from 'yuobey-ui-1'
import yuobeyUI from './components/index'
import 'yuobey-ui-1/lib/yuobey-ui-1.css'

createApp(App).use(yuobeyUI).mount('#app')
