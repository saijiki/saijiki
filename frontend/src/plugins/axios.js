import axios from 'axios';
import Vue from 'vue';
import store from '@/store';

axios.interceptors.request.use(config => {
    if (store.getters.isLoggedIn) {
        config.params = Object.assign({}, config.params, {
            token: store.state.data.token,
        });
    }

    return config;
});

axios.interceptors.response.use(null, async error => {
    if (error.config.url.startsWith('/api/auth')) {
        throw error;
    }

    if (error.response.status !== 401) {
        throw error;
    }

    if (store.getters.isLoggedIn && (store.state.data.user.twitter_id || store.state.data.user.email)) {
        await new Promise(resolve => {
            setTimeout(resolve, 24 * 60 * 60 * 1000);
            alert('再度ログインしてください。');
            store.commit('setData', null);
            location.reload();
        });
        throw error;
    }

    await store.dispatch('loginGuest');
    return axios.request(error.config);
});

Vue.prototype.$axios = axios;
