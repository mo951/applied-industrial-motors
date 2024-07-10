import Vue from 'vue'
import VueRouter from 'vue-router'
import baseroutes from '@/routes/baseroutes.js'
import dashboard from '@/routes/dashboard.js' 

Vue.use(VueRouter)
const routesWithPrefix = (prefix, routes) => {
    return routes.map(route => {
        route.path = `${prefix}${route.path}`

        return route
    })
}
const routes = routesWithPrefix('/backend', 
[
    ...baseroutes,
    ...dashboard,
])
const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})
export default router