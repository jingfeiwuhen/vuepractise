import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  //指定模式
  method: 'get'
}).then(res => {
  console.log(res);
})

axios({
  url: 'http://123.207.32.32:8000/home/data',
  method: 'get',
  //专门针对get请求的参数拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
})

//axios 发送并发请求
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }), axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   method: 'get',
//   //专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 3
//   }
// })]).then(results => {
//   results.forEach(x=>x)
// })

//试用全局的axios和对应的配置在进行网络请求 全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// axios.all([axios({
//   url: '/home/multidata',
// }), axios({
//   url: '/home/data',
//   method: 'get',
//   //专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 3
//   }
//   //分开
// })]).then(axios.spread((r1, r2) => {
//   console.log(r1);
//   console.log(r2);
// }))

//创建对应的axios实例
// const instence1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000,
//   // headers:{}
// })
// instence1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

import {request} from './network/request'

request({
  url: '/home/multidata'
}).then(res => {
  console.log('hahahaha');
  console.log(res);
}).catch(err => {
  console.log(err);
})




