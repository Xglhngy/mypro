// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from "@/assets/js/jquery.min.js"
import '@/assets/css/zTreeStyle.css'
import '@/assets/js/jquery.ztree.core.js'
// import '@/assets/js/jexcel.js'
// import '@/assets/css/jexcel.css'
// import '@/assets/js/jsuites.js'
// import '@/assets/css/jsuites.css'
// import Vant from 'vant';



import axios from 'axios'
// import localforage from 'localforage'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLocalForage from 'vue-localforage'
Vue.use(VueLocalForage)

Vue.use(ElementUI);


Vue.config.productionTip = false
Vue.prototype.$axios=axios

axios.defaults.timeout=5000
axios.defaults.baseURL='http://192.168.168.227:9090'
// axios.defaults.headers.common['dataDbToken'] = localStorage.getItem("dataDbToken"),
// axios.defaults.headers.common['sysDbToken'] = localStorage.getItem("sysDbToken"),


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
