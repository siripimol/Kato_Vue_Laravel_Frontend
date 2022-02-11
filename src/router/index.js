import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from '../views/fronted/Homepage'
import Register from '../views/fronted/Register'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Homepage,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
