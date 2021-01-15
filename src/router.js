import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', name: 'Homepage', component: () => import('./components/Homepage')},
        {path: '/about', name: 'About', component: () => import('./components/About')},
        {path: '/blog', name: 'Blog', component: () => import('./components/Blog')},
    ]
});

export default router;
