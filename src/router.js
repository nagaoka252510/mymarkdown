import Vue from "vue";
import VueRouter from "vue-router";
import Top from "./views/Top";
import Term from "./views/Terms";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "top",
    component: Top
  },
  {
    path: "/terms",
    name: "terms",
    component: Term
  }
];

export default new VueRouter({
  routes: routes
});