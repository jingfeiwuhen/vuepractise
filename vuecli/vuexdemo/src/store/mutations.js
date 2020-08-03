import * as types from "./mutations-types";
import Vue from "vue";

export default {
  [types.INCREMENT](state) {
    state.counter++
  },
  [types.DECREMENT](state) {
    state.counter--
  },
  //普通风格
  // incrementCount(state, count) {
  //   state.counter += count
  // },
  //对象风格
  incrementCount(state, payload) {
    state.counter += payload.count
  },
  incrementStudent(state, student) {
    state.students.push(student)
  },
  updateInfo(state) {
    //不是响应式的
    // state.info['address'] = '温州市'
    //这样可以响应 Vue.delete 也是一样的
    Vue.set(state.info, 'address', '温州')
  }
}
