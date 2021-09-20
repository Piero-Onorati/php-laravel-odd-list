import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from './pages/Home.vue';
import Blog from './pages/Blog.vue';
import Contacts from './pages/Contacts.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
        },
    ],
});

export default router;