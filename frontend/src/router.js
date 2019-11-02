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
            props: ({ query: { page } }) => ({
                page: page > 1 ? page | 0 : 1,
            }),
        },
    ],
});
