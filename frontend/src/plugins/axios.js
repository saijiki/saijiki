import axios from 'axios';
import Vue from 'vue';
import store from '@/store';

axios.interceptors.request.use(config => {
    if (store.getters.isLoggedIn) {
        config.params = Object.assign(
            {
                token: store.state.data.token,
            },
            config.params
        );
    }

    return config;
});

axios.interceptors.response.use(null, async error => {
    if (error.config.url.startsWith('/api/auth')) {
        throw error;
    }

    if (error.response.status === 401) {
        await store.dispatch('loginGuest');

        return axios.request(error.config);
    }

    throw error;
});

Vue.prototype.$axios = axios;
