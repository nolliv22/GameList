import './assets/main.css'

import { ref, createApp } from 'vue'
import App from './App.vue'
import router from './router'

import NavBarComponent from './components/NavBarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

const app = createApp(App)

// Global variables across all views and components
app.config.globalProperties.USER = ref(undefined)

// Components
app.component('NavBarComponent', NavBarComponent)
app.component('FooterComponent', FooterComponent)

app.use(router).mount('#app')