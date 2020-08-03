export default {
  more20Stu(state) {
    return state.students.filter(x => x.age >= 20)
  },
  //第二个参数就是getters
  more20StuLength(state, getters) {
    return getters.more20Stu.length
  },
  //如果有参数直接返回function
  moreThanAge(state) {
    return age => state.students.filter(y => y.age > age)
  }
}
