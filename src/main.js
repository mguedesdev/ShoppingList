
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './global.css';
import FontAwesomeIcon from './fontawesome';
import store from './store/index';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(store);

app.mount('#app');
