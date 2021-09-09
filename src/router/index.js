import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Articles from "../views/Articles.vue";
import ArticleDetail from "../views/ArticleDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
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

export default router;
