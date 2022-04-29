import Vue from 'vue';
import App from './app.vue';
import './styles/test.css'
const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
    render: (h) => h(App),
}).$mounter(root);