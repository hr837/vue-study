export default {
	getMenus() {
		return (type: string) => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			let resource: Array<any> = [];

			switch (type) {
				case "home":
					resource = [
						{
							name: "报表管理",
							childrens: [
								{
									name: "我的日报",
									path: "/home/reports/myReport",
								},
							],
						},
						{
							name: "任务管理",
							childrens: [
								{
									name: "我的待办",
									path: "/home/todos/myTodo",
								},
							],
						},
					];
					break;
				case "setting":
					resource = [
						{
							name: "系统管理",
							childrens: [
								{
									name: "部门管理",
									path: "/setting/system/department",
								},
								{
									name: "人员管理",
									path: "/setting/system/users",
								},
							],
						},
					];
					break;
			}
			return resource;
		};
	},
};
