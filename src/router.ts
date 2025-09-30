import { createMemoryHistory, createRouter } from 'vue-router'
import cookies from "js-cookie";
import login  from './views/login/index.vue'

const routes = [
    { path: '/login', name:'login', component: login },
    {path:'/',name:'home',component:()=>import( '@/views/dashboard/index.vue'), meta:{requiresAuth:true} },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const token = cookies.get('token');
    if (to.meta.requiresAuth && !token) {
        next('/login')
    } else if(to.path === '/login' && token) {
        next('/')
    } else {
        next()
    }

})

export default router