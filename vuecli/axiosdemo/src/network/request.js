import axios from 'axios'
// export function request(config,success,failure) {
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//
//   instance(config).then(res=>{
//     success(res)
//   }).catch(err=>{
//     failure(err)
//   })
// }

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance(config).then(res=>{
//       resolve(res)
//     }).catch(err=>{
//       reject(err)
//     })
//   })
// }

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //请求拦截器
  instance.interceptors.request.use(config => {
    console.log('66666');
    console.log(config);
    //1 比如config中的一些信息不符合服务器的要求
    //2 比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //3 某些网络请求 比如登录(token), 必须携带一些特殊的信息
    //拿到config 要返回出去
    return config
  }, err => {
    console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    //过滤一些不想要的信息
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}


