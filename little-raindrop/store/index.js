/**
 * 全局store
 */
export const state = () => ({
  headerNavHeight: 0,
  activeNav: '', // // 选中顶部的导航
})

export const mutations = {
  // 设置导航选中链接
  SET_ACTIVE_NAV(state, navName) {
    state.activeNav = navName
  },
  // 保存导航的高度
  SET_HEADER_NAV_HEIGHT(state, navHeight) {
    state.headerNavHeight = navHeight
  }
}

export const getters = {
  headerNavHeight: (state) => state.headerNavHeight,
  activeNav: (state) => state.activeNav
}
