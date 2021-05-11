import { RequestMethod } from "@gopowerteam/http-request";

const controller = "user-controller";

export default {
	/**
	 * 用户登录
	 */
	login: {
		type: RequestMethod.Post,
		controller,
		path: "/manage/api/user/login",
	},
	/**
	 * 查询部门下的用户
	 */
	findUserByDepartmentId: {
		type: RequestMethod.Get,
		controller,
		path: "/manage/api/user/findUserByDepartment",
	},
	/**
	 * 查询部门下的用户
	 */
	findUserByDepartmentCode: {
		type: RequestMethod.Get,
		controller,
		path: "/manage/api/user/findUserByDepartmentCode",
	},
};
