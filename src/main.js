import './assets/main.css'

import { ref, createApp } from 'vue'
import App from './App.vue'
import router from './router'

import NavBarComponent from './components/NavBarComponent.vue';

const app = createApp(App)

// Global variables
app.config.globalProperties.USER = ref(undefined)

// Debug only...
// import users from './data/users.json'
// app.config.globalProperties.USER.value = users[0]

// Components
app.component('NavBarComponent', NavBarComponent)

app.use(router).mount('#app')