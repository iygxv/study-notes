import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


export const constantRoutes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('../components/HelloWorld.vue'),
  },
]


const base = '/'
// const base = '/activity'
const router = createRouter({
  history: createWebHashHistory(base), // hash
  routes: constantRoutes,
})

export default router
