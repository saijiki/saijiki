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

Vue.prototype.$axios = axios;
