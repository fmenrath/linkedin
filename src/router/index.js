import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Network from '../views/Network.vue'
import User from '../views/User.vue'

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {path: "/", component: Home},
      {path: "/network", component: Network},
      {path: '/user/:id', component: User}
   ],
   linkActiveClass: "active"
})

export default router


