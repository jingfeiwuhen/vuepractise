// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as types from './mutations-types'
//
// Vue.use(Vuex)
//
// const moduleA = {
//   state: {name: 'sudan'},
//   //与原来的一致
//   mutations: {
//     updateName(state, upload) {
//       state.name = upload
//     }
//   },
//   //只能获取自己作用域能的数据 如果要获取root的  context里面有rootgetters,rootstate等属性
//   actions: {
//     aUpdateName(context){
//       setTimeout(()=>{
//         context.commit('updateName','zhangsan')
//       },2000)
//     }
//   },
//   //与原来的一致
//   getters: {
//     fullName(state) {
//       return 'hello' + state.name
//     }
//   }
// }
// const moduleB = {
//   state: {},
//   mutations: {},
//   actions: {},
//   getters: {}
// }
//
// const store = new Vuex.Store({
//   state: {
//     counter: 1000,
//     students: [
//       {id: 1, name: 'sunc1', age: 18},
//       {id: 2, name: 'sunc2', age: 8},
//       {id: 3, name: 'sunc3', age: 40},
//       {id: 4, name: 'sunc4', age: 34},
//       {id: 5, name: 'sunc5', age: 28},
//       {id: 6, name: 'sunc6', age: 1},
//       {id: 7, name: 'sunc7', age: 18}
//     ],
//     info: {name: 'sunce', age: 18}
//   },
//   mutations: {
//     [types.INCREMENT](state) {
//       state.counter++
//     },
//     [types.DECREMENT](state) {
//       state.counter--
//     },
//     //普通风格
//     // incrementCount(state, count) {
//     //   state.counter += count
//     // },
//     //对象风格
//     incrementCount(state, payload) {
//       state.counter += payload.count
//     },
//     incrementStudent(state, student) {
//       state.students.push(student)
//     },
//     updateInfo(state) {
//       //不是响应式的
//       // state.info['address'] = '温州市'
//       //这样可以响应 Vue.delete 也是一样的
//       Vue.set(state.info, 'address', '温州')
//     }
//   },
//   actions: {
//     aUpdateInfo(context, payload) {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           context.commit('updateInfo')
//           console.log(payload);
//           resolve(payload);
//         }, 2000)
//       })
//     }
//   },
//   getters: {
//     more20Stu(state) {
//       return state.students.filter(x => x.age >= 20)
//     },
//     //第二个参数就是getters
//     more20StuLength(state, getters) {
//       return getters.more20Stu.length
//     },
//     //如果有参数直接返回function
//     moreThanAge(state) {
//       return age => state.students.filter(y => y.age > age)
//     }
//   },
//   modules: {
//     a: moduleA
//   }
// })
//
// export default store
