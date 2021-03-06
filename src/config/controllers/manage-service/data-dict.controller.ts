/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from "@gopowerteam/http-request";

// 控制器名称
const controller = "data-dict";
const service = "manage";

export const DataDictController = {
	// 获取数据字典
	getAll: {
		service,
		controller,
		path: "/api/dataDict/getAll",
		action: "getAll",
		type: RequestMethod.Get,
	},
	// 获取数据字典的hashCode
	getDataDictHashCode: {
		service,
		controller,
		path: "/api/dataDict/getDataDictHashCode",
		action: "getDataDictHashCode",
		type: RequestMethod.Get,
	},
};
