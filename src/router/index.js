import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Articles from "../views/Articles.vue";
import ArticleDetail from "../views/ArticleDetail.vue";
import Reviews from "../views/Reviews";
import About from "../views/About";
import Login from "../views/Login";
import Registration from "../views/Registration";
// import store from '../store'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/registration",
        name: "Registration",
        component: Registration
    },
    {
        path: "/articles",
        name: "Articles",
        component: Articles,
    },
    {
        path: "/reviews",
        name: "Reviews",
        component: Reviews,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/article/:id",
        name: "ArticleDetail",
        component: ArticleDetail,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

// router.beforeEach((to, from, next) => {
//     store.dispatch('auth/authUser')
//         .then(() => {
//             next({name: 'Home'})
//         })
//         .catch(() => {
//             if (to.name !== 'Login') {
//                 next({name: 'Login'});
//             } else {
//                 next();
//             }
//         })
// })


export default router;
