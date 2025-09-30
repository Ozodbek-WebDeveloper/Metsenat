import { createMemoryHistory, createRouter } from 'vue-router'

import login  from './views/login/index.vue'

const routes = [
    { path: '/', component: login },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})