import Vue from 'vue';
import Router from 'vue-router';
import Header from './views/Header.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/senryu-list',
            name: 'SenryuList',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(
                    /* webpackChunkName: "about" */ './views/SenryuList.vue'
                ),
        },
        {
            path: '/test',
            name: 'test',
            component: () =>
                import(/* webpackChunkName: "about" */ './views/test.vue'),
        },
        {
            path: '/senryudetails',
            name: 'SenryuDetails',
            component: () =>
                import(
                    /* webpackChunkName: "about" */ './views/SenryuDetails.vue'
                ),
        },

        {
            path: '/',
            component: Header,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home,
                },
            ],
        },
    ],
});
