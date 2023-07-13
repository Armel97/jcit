import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./../views/site/HomeView.vue"

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/contact',
        name: 'ContactView',
        component: () => import('./../views/site/ContactView.vue'),
        meta: {
            pageTitle: 'Contact',
        }
    },
    {
        path: '/jobs',
        name: 'JobView',
        component: () => import('./../views/site/JobView.vue'),
        meta: {
            pageTitle: 'Job',
        }
    },
    {
        path: '/training',
        name: 'TrainingView',
        component: () => import('./../views/site/TrainingView.vue'),
        meta: {
            pageTitle: 'Training',
        }
    },
   
]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
// const router = createRouter({ history: createWebHistory(), routes })
export default router