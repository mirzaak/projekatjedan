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
import Login from '../views/Login.vue'
import Moviedetails from '../views/Moviedetails.vue'
import Tvdetails from '../views/Tvdetails.vue'
import Seasons from '../views/Seasons.vue'
import Episodes from '../views/Episodes.vue'
import Search from '../views/Search.vue'
import Searched from '../views/Searched.vue'
import Watchlist from '../views/Watchlist.vue'
import Watchlisttv from '../views/Watchlisttv.vue'
import Ratings from '../views/Ratings.vue'
import Ratingstv from '../views/Ratingstv.vue'
import Actordetails from '../views/Actordetails.vue'
import People from '../views/People.vue'
import Peoplepage from '../views/Peoplepage.vue'
import Reviews from '../views/Reviews.vue'


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
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/tv/:id',
    name: 'Tvdetails',
    component: Tvdetails
  },
  {
    path: '/tv/:id/seasons',
    name: 'Seasons',
    component: Seasons
  },
  {
    path: '/tv/:id/seasons/:sn',
    name: 'Episodes',
    component: Episodes
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/search/:query',
    name: 'Searched',
    component: Searched
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: Watchlist
  },
  {
    path: '/watchlist/tv',
    name: 'Watchlisttv',
    component: Watchlisttv
  },
  {
    path: '/ratings',
    name: 'Ratings',
    component: Ratings
  },
  {
    path: '/ratings/tv',
    name: 'Ratingstv',
    component: Ratingstv
  },
  {
    path: '/people/:person',
    name: 'Actordetails',
    component: Actordetails
  },
  {
    path: '/people',
    name: 'People',
    component: People,
  },
  {
    path: '/people/pages/:page',
    name: 'Peoplepage',
    component: Peoplepage,
  },

  {
    path: '/movie/:id',
    name: 'Moviedetails',
    component: Moviedetails
  },
  {
    path: '/movie/:id/reviews',
    name: 'Reviews',
    component: Reviews
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
