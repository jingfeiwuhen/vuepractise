export default {
  state: {name: 'sudan'},
  //与原来的一致
  mutations: {
    updateName(state, upload) {
      state.name = upload
    }
  },
  //只能获取自己作用域能的数据 如果要获取root的  context里面有rootgetters,rootstate等属性
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'zhangsan')
      }, 2000)
    }
  },
  //与原来的一致
  getters: {
    fullName(state) {
      return 'hello' + state.name
    }
  }
}
