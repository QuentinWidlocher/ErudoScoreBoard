import Vue from "vue";
import VueRouter, { Route } from "vue-router";
import Home from "@/views/Home/Home.vue";
import CreateEdit from '@/views/CreateEdit/CreateEdit.vue';

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/score/create", name: "create", component: CreateEdit },
  { path: "/score/:createOrEdit/:scoreId", name: "edit", component: CreateEdit, props: true },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
