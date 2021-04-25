import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

import '@/assets/app.scss';

// Plugins
import '@/plugins/fontawesome';

const app = createApp(App);

app.component('FaIcon', FontAwesomeIcon);
app.mount('#app');
