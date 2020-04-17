/* eslint-disable import/default */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/pages').then(m => m.default || m)
const Login = () => import('@/pages/login').then(m => m.default || m)
const Logout = () => import('@/pages/logout').then(m => m.default || m)
const Cabinet = () => import('@/pages/cabinet').then(m => m.default || m)

export function createRouter() {
    const router = new Router({
        mode: 'history',
        linkActiveClass: 'nuxt-link-active',
        linkExactActiveClass: 'nuxt-link-exact-active',
        routes: [
            {
                path: '/',
                name: 'Home',
                component: Home
            },
            {
                path: '/login',
                name: 'Login',
                component: Login
            },
            {
                path: '/logout',
                name: 'Logout',
                component: Logout
            },
            {
                path: '/cabinet',
                name: 'Cabinet',
                component: Cabinet
            }
        ]
    })

    return router
}
