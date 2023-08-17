import { RouteRecordRaw, createRouter, createWebHashHistory }  from 'vue-router'

//Pages Components
import Home from '../pages/Home.vue';
import Income from '../pages/Income.vue';


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/my/income',
        name: 'my-income',
        component: Income
    }
] 

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;