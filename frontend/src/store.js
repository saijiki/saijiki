import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        data: null,
    },
    mutations: {
        setData: (state, data) => (state.data = data),
    },
    actions: {
        async login({ commit }, { email, password }) {
            try {
                const { data } = await axios.post('/api/auth/login', {
                    email,
                    password,
                });

                commit('setData', data);
            } catch (e) {
                commit('setData', null);
                throw e;
            }
        },
        async logout({ commit }) {
            try {
                await axios.post('/api/auth/logout');
            } finally {
                commit('setData', null);
            }
        },
    },
    getters: {
        isLoggedIn: ({ data }) => Boolean(data),
    },
});

// 状態の永続化処理 (保存)
store.subscribe(
    (mutation, state) => (localStorage.state = JSON.stringify(state))
);

// 状態の永続化処理 (復元)
if (localStorage.state) {
    store.replaceState(JSON.parse(localStorage.state));
}

export default store;
