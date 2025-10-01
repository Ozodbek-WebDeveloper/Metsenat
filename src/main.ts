import { createApp } from 'vue'
import App from './App.vue'
import  router  from './router.ts'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import VueApexCharts from "vue3-apexcharts";

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import './style/style.css'


const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(Quasar, {
    plugins: {}
});
// app.use(VueApexCharts)
app.component("apexchart", VueApexCharts)

app.mount('#app')
