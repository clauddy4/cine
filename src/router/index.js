import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Articles from "../views/Articles";
import ArticleDetail from "../views/ArticleDetail";
import Reviews from "../views/Reviews";
import About from "../views/About";
import Login from "../views/Login";
import Registration from "../views/Registration";
import ArticleAdd from "../views/ArticleAdd";

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
        path: "/article/add",
        name: "ArticleAdd",
        component: ArticleAdd,
    },
    {
        path: "/article/detail/:id",
        name: "ArticleDetail",
        component: ArticleDetail,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
