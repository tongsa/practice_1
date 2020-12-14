import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: "history",
    base: "/",
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("../views/login.vue")
        },
        {
            path: "/",
            name: "index",
            component: () => import("../views/index.vue")
        },
        {
            path: "/userCenter",
            name: "userCenter",
            component: () => import("../views/userCenter.vue")
        },
        {
            path: "/course/:id",
            name: "course",
            component: () => import("../views/course.vue")
        }
    ]
})

export default router