import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import vacunacion from '@/views/vacunacion.vue'
import primaria from '@/views/primaria.vue'
import enfermos from '@/views/enfermos.vue'
import hospitales from '@/views/hospitales.vue'

const routes = [
    {path: '/', name:'Home', component: Home},
    {path: '/vacunacion', name:'vacunacion', component: vacunacion},
    {path: '/primaria', name:'primaria', component: primaria},
    {path: '/enfermos', name:'enfermos', component: enfermos},
    {path: '/hospitales', name:'hospitales', component: hospitales}
]

const router = createRouter ({
    history: createWebHistory(),
    routes
    
})

export default router