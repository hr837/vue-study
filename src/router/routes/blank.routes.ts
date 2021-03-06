import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "login",
		component: () => import("@/pages/login/login.vue"),
	},
];

export default routes;
