/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from "@gopowerteam/http-request";
import { Observable } from "rxjs";
import { SystemLogController } from "@/config/controllers/manage-service/system-log.controller";

export class SystemLogService {
	/**
	 * 批量删除登录日志
	 */
	@Request({
		server: SystemLogController.batchDeleteLog,
	})
	public batchDeleteLog(requestParams: RequestParams): Observable<any> {
		return requestParams.request();
	}
	/**
	 * 系统日志查询
	 */
	@Request({
		server: SystemLogController.findAllSystemLog,
	})
	public findAllSystemLog(requestParams: RequestParams): Observable<any> {
		return requestParams.request();
	}
	/**
	 * 新增日志
	 */
	@Request({
		server: SystemLogController.saveSystemLog,
	})
	public saveSystemLog(requestParams: RequestParams): Observable<any> {
		return requestParams.request();
	}
}
