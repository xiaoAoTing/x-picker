import { createApp } from 'vue'
import './style.css'
import Root from './App.vue'
import Picker from './components/install'

const app = createApp(Root)

app.use(Picker)

app.mount('#app')
