import Vue from 'vue'
import App from './App.vue'
import router from './router';
// import { Button, Select,Row,Container,Header,Aside,Main,Footer } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import './api/mock'

Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// Vue.component(Low.name, Low);
// Vue.use(Button,Select,Row,Container,Header,Aside,Main,Footer)
new Vue({
  
  render: h => h(App),
router,
store
}).$mount('#app')
