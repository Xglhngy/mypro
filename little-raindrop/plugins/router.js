export default ({ app, store }) => {
  app.router.afterEach((to, from) => {
    // console.log('window', window)
    // console.log('app', app, store.commit)
    // console.log(to, from)
    const curRouteName = to.name.split('-')
    store.commit('SET_ACTIVE_NAV', curRouteName[0])
  })
}