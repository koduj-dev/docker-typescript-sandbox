import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import {router} from "@/router";

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.dark',
    }
  }
})

app.use(router);
app.use(createPinia())
app.mount('#app')
