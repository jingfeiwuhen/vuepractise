export default {
  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload);
        resolve(payload);
      }, 2000)
    })
  }
}
