import {createRouter,createWebHistory} from 'vue-router'
import HomeView from '../View/HomeView.vue'
// import AboutView from '../View/AboutView.vue'

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes:[
    {
    path:"/",
    name:"home",
    component: HomeView
    },

    


]

})

export default router;

