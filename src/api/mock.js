import Mock from "mockjs";
import homeApi from './mockServerData/home'
import userApi from './mockServerData/user'
import permissionApi from './mockServerData/permission'

//定义mock请求拦截
Mock.mock('/api/home/getData',homeApi.getStatisticalData)

Mock.mock('/api/user/add','post',userApi.createUser)
Mock.mock('/api/user/edit','post',userApi.updateUser)
Mock.mock('/api/user/del','post',userApi.deleteUser)
Mock.mock(/\/api\/user\/getUser/,userApi.getUserList)

Mock.mock(/\/api\/permission\/getMenu/,'post',permissionApi.getMenu)
