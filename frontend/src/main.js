import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import vuetify from '@/vuetify';
import '@/plugins/axios';
import '@/plugins/vue-flipper';
import '@/plugins/vue-progress-path';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app');
