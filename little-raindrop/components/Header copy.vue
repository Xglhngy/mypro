<template>
  <!-- :class="fixexNav ? 'fixed-nav' : ''" -->
  <header
    id="headerNav"
    class="header-nav"
    :class="pageScrollTop > navHeight && calcScrollH > 0 ? 'fixed-nav-hide' : 'fixed-nav-show'"
  >
    <div class :class="isShowMemuBg ? ' submenu-show' : 'submenu-hide'">
      <div class="header-memu container">
        <div class="row justify-content-lg-center">
          <div class="col-12 col-lg-12 p-0">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
              <nuxt-link class="navbar-brand" to="/">
                <img class="logo" src="~assets/images/logo.png" alt="小雨滴" />
              </nuxt-link>

              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul
                  class="custom-nabar-nav navbar-nav ml-auto"
                  @mouseover="isShowMemuBg = true"
                  @mouseleave="isShowMemuBg = false"
                >
                  <li class="nav-item">
                    <nuxt-link class="nav-link" :class="{ active: activeNav === 'index' }" to="/">首页</nuxt-link>
                    <nav class="secondary-nav">
                      <a id="subIntro" href="#oneIntro">公司简介</a>
                      <a id="subService" href="#twoService">专业优质的服务</a>
                      <a id="subAdvantage" href="#threeAdvantage">我们的优势</a>
                    </nav>
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link"
                      to="/product"
                      :class="{ active: activeNav === 'product' }"
                    >产品服务</nuxt-link>
                    <nav class="secondary-nav">
                      <a id="subIntro" href="#oneIntro">公司简介1</a>
                      <a id="subService" href="#twoService">专业优质的服务1</a>
                      <a id="subAdvantage" href="#threeAdvantage">我们的优势1</a>
                    </nav>
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link"
                      to="/solution"
                      :class="{ active: activeNav === 'solution' }"
                    >解决方案</nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link"
                      to="/cases"
                      :class="{ active: activeNav === 'cases' }"
                    >案例与合作</nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link
                      class="nav-link"
                      to="/aboutUs"
                      :class="{ active: activeNav === 'aboutUs' }"
                    >关于我们</nuxt-link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="header-bg-hover"></div>
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      navHeight: 0,
      isShowMemuBg: false,
      fixexNav: false,
      pageScrollTop: 0,
      scrollHeight: 0,
      calcScrollH: 0
    }
  },
  computed: {
    ...mapGetters(['activeNav'])
  },
  mounted() {
    this.navHeight = document.querySelector('#headerNav').offsetHeight
    this.$store.commit('SET_HEADER_NAV_HEIGHT', this.navHeight)
    window.addEventListener('scroll', this.handleScrollAnchor)
  },
  methods: {
    handleScrollAnchor() {
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      const pageScrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.documentElement.scrollTop
      this.pageScrollTop = pageScrollTop
      this.calcScrollH = pageScrollTop - this.scrollHeight
      this.scrollHeight = pageScrollTop
      if (this.calcScrollH < 0) {
        this.fixexNav = true
      } else {
        this.fixexNav = false
        this.isShowMemuBg = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$main-color: #00bbc4;
$text-color: #5f6464;
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.navbar-toggler {
  border: none;
  padding: 0.25rem 0.25rem;
}
.navbar-toggler:focus {
  outline: none;
}

/* 头部 */
.header-nav {
  background-color: #fff;
  position: absolute;
  top: 0;
  z-index: 1000;
  width: 100%;
  // height: 76px;
  display: block;
  transition: all 0.2s linear;
  &.fixed-nav-show {
    position: fixed;
    top: 0;
    z-index: 1000;
    display: block;
  }
  &.fixed-nav-hide {
    position: fixed;
    top: -76px;
    z-index: 1;
    display: block;
  }
  .header-memu {
    position: relative;
    z-index: 1000;
  }
  .navbar-brand {
    position: relative;
    z-index: 1000;
  }
  .custom-nabar-nav {
    // position: a;
  }
  .nav-item {
    position: relative;
    // padding: 16.5px 0;
    padding: 16.5px 33.5px;
    &:last-child {
      padding-right: 0;
    }
    // margin-left: 67px;
    &:hover .secondary-nav {
      visibility: 1;
      opacity: 1;
      height: auto;
      transition: all 0.2s ease-out;
    }
    .secondary-nav {
      visibility: 0;
      opacity: 0;
      // visibility: 1;
      // opacity: 1;
      position: absolute;
      left: 50%;
      z-index: 2;
      // width: 180px;
      width: 210px;
      height: 0;
      transform: translate(-50%, 0);
      padding: 20px 15px;
      // background-color: #fff;
      a {
        display: block;
        text-align: center;
        padding: 12px;
        color: #5f6464;
      }
    }
  }
  .sub-link-show {
    height: 445px;
    &:hover .secondary-nav {
      visibility: 1;
      opacity: 1;
      height: auto;
      transition: all 0.2s ease-out;
    }
  }
  .nav-link {
    position: relative;
    z-index: 2;
    display: inline-block;
    color: #000;
    font-size: 18px;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      z-index: 2;
      width: 0;
      height: 2px;
      transition: all 0.3s;
    }
    &:hover,
    &.active {
      color: #00bbc4;
      &::after {
        width: 100%;
        left: 0;
        right: 0;
        border-bottom: 3px solid #00bbc4;
      }
    }
  }
  // 鼠标移到导航条白色遮罩层效果
  .header-bg-hover {
    display: block !important;
    width: 100%;
    height: 445px;
    background: rgba(255, 255, 255, 1);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    // animation: bg-hover-show 0.2s ease-out both;
    // transform-origin: 50% 0%;
    // -webkit-transform-origin: 50% 0%;
  }
  .submenu-show .header-bg-hover {
    animation: bg-hover-show 0.2s ease-out both;
    transform-origin: 50% 0%;
    -webkit-transform-origin: 50% 0%;
  }
  .submenu-hide .header-bg-hover {
    animation: bg-hover-hide 0.2s ease-out both;
    transform-origin: 50% 0%;
    -webkit-transform-origin: 50% 0%;
  }
}

@keyframes bg-hover-show {
  from {
    height: 0;
    top: 0;
    opacity: 0;
  }
  to {
    height: 445px;
    top: 0;
    opacity: 1;
  }
}
@keyframes bg-hover-hide {
  from {
    height: 445px;
    top: 0;
  }
  to {
    height: 0;
    top: 0;
  }
}

.logo {
  height: 50px;
}
</style>
