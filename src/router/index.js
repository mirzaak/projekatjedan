import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Popular from '../views/movie/Popular.vue'
import Nowplaying from '../views/movie/Nowplaying.vue'
import Toprated from '../views/movie/Toprated.vue'
import Upcoming from '../views/movie/Upcoming.vue'
import Populartv from '../views/tv/Populartv.vue'
import Nowplayingtv from '../views/tv/Nowplayingtv.vue'
import Ontheairtv from '../views/tv/Ontheairtv.vue'
import Topratedtv from '../views/tv/Topratedtv.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/popular',
    name: 'Popular',
    component: Popular
  },
  {
    path: '/nowplaying',
    name: 'Nowplaying',
    component: Nowplaying
  },
  {
    path: '/toprated',
    name: 'Toprated',
    component: Toprated
  },
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: Upcoming
  },
  {
    path: '/populartv',
    name: 'Populartv',
    component: Populartv
  },
  {
    path: '/nowplayingtv',
    name: 'Nowplayingtv',
    component: Nowplayingtv
  },
  {
    path: '/ontheairtv',
    name: 'Ontheairtv',
    component: Ontheairtv
  },
  {
    path: '/topratedtv',
    name: 'Topratedtv',
    component: Topratedtv
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
