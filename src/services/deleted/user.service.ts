import { Request, RequestParams } from "@gopowerteam/http-request";
import UserController from "@/config/controllers/deleted/user.controller";

/**
 * 用户服务
 */
export class UserService {
	/**
	 * 登录
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: UserController.login,
	})
	public login(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 根据部门ID查询用户
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: UserController.findUserByDepartmentId,
		force: true,
	})
	public queryUserByDeptId(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 根据部门Code查询用户
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: UserController.findUserByDepartmentCode,
		force: true,
	})
	public queryUserByDeptCode(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 添加用户
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: UserController.addUser,
	})
	public add(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 编辑用户
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: UserController.modifyUser,
	})
	public modify(requestParam: RequestParams) {
		return requestParam.request();
	}

	/**
	 * 重置密码
	 * @param requestParam
	 * @returns
	 */
	@Request({
		server: UserController.resetPassword,
	})
	public resetPassword(requestParam: RequestParams) {
		return requestParam.request();
	}
}
