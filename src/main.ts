import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import store from '@/store';
import {LazyLoadDirective} from "@/directives";

createApp(App)
    .directive("lazy", LazyLoadDirective)
    .use(store)
    .mount('#app');
