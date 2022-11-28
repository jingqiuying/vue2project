import Vue from 'vue'
import App from './App.vue'
import router from './router';
// import { Button, Select,Row,Container,Header,Aside,Main,Footer } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import './api/mock'
import Cookie from 'js-cookie';

Vue.config.productionTip = false
//添加全局导航守卫
router.beforeEach((to, from, next) => {
  //判断cookie是否存在
  const token = Cookie.get('token')
  //token不存在，说明当前用户未登录，应跳转登录页
  if(!token && to.name !== 'login'){
    next({name:'login'}) 
  }else if(token && to.name === 'login'){//token存在，用户已登录，跳转到首页
    next({name:'home'})

  } else{
    next()
  }
})

Vue.use(ElementUI);

new Vue({

render: h => h(App),
router,
store,
created() {
  store.commit('addMenu')
},
}).$mount('#app')
