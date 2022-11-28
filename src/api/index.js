import http from '../utils/request';

//请求首页数据
export const getData = () => {
    return http.get('/home/getData')
}

//请求用户信息
export const getUser = (params) =>{
    //返回用户列表
    return http.get('/user/getUser',params)
}
//添加用户
export const addUser = (data) =>{
    return http.post('/user/add',data)
}
//修改用户信息
export const editUser = (data) =>{
    return http.post('/user/edit',data)
}
//删除用户
export const delUser = (data) =>{
    return http.post('/user/del',data)
}

//登录验证
export const getMenu = (data) =>{
    return http.post('/permission/getMenu',data)
}

