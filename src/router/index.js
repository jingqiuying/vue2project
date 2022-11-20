import Vue from 'vue'
import VueRouter from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入
import Home from '../views/Home'
import User from '../views/User'
import Main from '../views/Main'
import Mall from '../views/Mall'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'

Vue.use(VueRouter)

// 2.定义一些路由
// 每个路由都需要映射到一个组件。
const routes = [
    {
        path: '/',
        component: Main,
        redirect:'/home',
        children: [
            { path: 'home', name:'home', component: Home },
            { path: 'user', name:'user', component: User },
            { path: 'mall', name:'mall', component: Mall },
            { path: 'page1', name:'page1', component: PageOne },
            { path: 'page2', name:'page2', component: PageTwo },
        ]
             
        
    
}
  ]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
const router = new VueRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })

export default router