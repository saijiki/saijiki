import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/Home'),
        },
        {
            path: '/senryus/:id(\\d+)',
            name: 'SenryuDetail',
            component: () => import('@/views/SenryuDetail'),
            props: ({ params: { id } }) => ({ id: id | 0 }),
        },
        {
            path: '/senryus',
            name: 'Senryus',
            component: () => import('@/views/Senryus'),
            props: ({ query: { page, word, period, order } }) => ({
                page: page > 1 ? page | 0 : 1,
                word,
                period,
                order,
            }),
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/Login'),
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('@/views/Register'),
        },
        {
            path: '/useredit',
            name: 'UserEdit',
            component: () => import('@/views/UserEdit'),
        },
        {
            path: '/usersenryu',
            name: 'UserSenryu',
            component: () => import('@/views/UserSenryu'),
            props: ({ query: { page, type } }) => ({
                page: page > 1 ? page | 0 : 1,
                type,
            }),
        },
        {
            path: '*',
            component: () => import('@/views/NotFound'),
        },
    ],
});
