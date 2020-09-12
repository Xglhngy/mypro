<template>
  <header id="headerNav" class="header-nav">
    <!-- :class="pageScrollTop > navHeight && calcScrollH > 0 ? 'fixed-nav-hide' : 'fixed-nav-show'" -->
    <div class :class="isShowMemuBg ? ' submenu-show' : 'submenu-hide'">
      <div class="header-memu container">
        <div class="row justify-content-lg-center">
          <div class="col-12 col-lg-12 p-0">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
              <nuxt-link class="navbar-brand" to="/">
                <span>&nbsp;</span>
                <!-- <img class="logo" src="~assets/images/logo.png" alt="小雨滴" /> -->
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
                <ul class="navbar-nav ml-auto">
                  <li
                    class="nav-item"
                    @mouseover="isShowMemuBg = true"
                    @mouseleave="isShowMemuBg = false"
                    @click="isShowMemuBg = false"
                  >
                    <nuxt-link to="/" class="nav-link" :class="{ active: activeNav === 'index' }">首页</nuxt-link>
                    <nav v-show="isShowMemuBg" class="secondary-nav">
                      <a href="/#floor-1">公司简介</a>
                      <a href="/#floor-2">我们的优势</a>
                      <a href="/#floor-3">经典案例</a>
                      <a href="/#floor-4">合作伙伴</a>
                    </nav>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="javascript: void(0)">产品服务</a>
                    <!-- <nuxt-link
                      to="/product"
                      class="nav-link"
                      :class="{ active: activeNav === 'product' }"
                    >产品服务</nuxt-link>
                    <nav v-show="isShowMemuBg" class="secondary-nav">
                      <a href="/product#floor-1">特色服务</a>
                      <a href="/product#floor-2">产品定制化服务</a>
                      <a href="/product#floor-3">我们在做什么</a>
                      <a href="/product#floor-4">我们的客户怎么说</a>
                    </nav>-->
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="javascript: void(0)">解决方案</a>
                    <!-- <nuxt-link
                      to="/solution"
                      class="nav-link"
                      :class="{ active: activeNav === 'solution' }"
                    >解决方案</nuxt-link>
                    <nav v-show="isShowMemuBg" class="secondary-nav">
                      <a href="/solution#floor-1">热门解决方案</a>
                      <a href="/solution#floor-2">全部解决方案</a>
                      <a href="/solution#floor-3">方案与架构咨询</a>
                    </nav>-->
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="javascript: void(0)">案例与合作</a>
                    <!-- <nuxt-link
                      to="/cases"
                      class="nav-link"
                      :class="{ active: activeNav === 'cases' }"
                    >案例与合作</nuxt-link>
                    <nav v-show="isShowMemuBg" class="secondary-nav">
                      <a href="/cases#floor-1">经典案例</a>
                      <a href="/cases#floor-2">全部案例</a>
                      <a href="/cases#floor-3">加入我们</a>
                    </nav>-->
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="javascript: void(0)">关于我们</a>
                    <!-- <nuxt-link
                      to="/aboutUs"
                      class="nav-link"
                      :class="{ active: activeNav === 'aboutUs' }"
                    >关于我们</nuxt-link>
                    <nav v-show="isShowMemuBg" class="secondary-nav">
                      <a href="/aboutUs#floor-1">公司简介</a>
                      <a href="/aboutUs#floor-2">愿景与使命</a>
                      <a href="/aboutUs#floor-3">发展历程</a>
                      <a href="/aboutUs#floor-4">业务架构</a>
                      <a href="/aboutUs#floor-5">管理团队</a>
                      <a href="/aboutUs#floor-6">办公地点</a>
                    </nav>-->
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="header-bg-cover"></div>
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
    window.addEventListener('scroll', this.scrollPage)
  },
  methods: {
    scrollPage() {
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      const pageScrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.pageScrollTop = pageScrollTop
      this.calcScrollH = pageScrollTop - this.scrollHeight
      this.scrollHeight = pageScrollTop
      // if (this.calcScrollH < 0) {
      //   this.fixexNav = true
      // } else {
      //   this.fixexNav = false
      //   this.isShowMemuBg = false
      // }
      // console.log('pageScrollTop', pageScrollTop)
      if (pageScrollTop > 0) {
        this.fixexNav = true
      } else {
        this.fixexNav = false
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
  // position: absolute;
  position: relative;
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
  .nav-item {
    // position: relative;
    // padding: 16.5px 0;
    // margin-left: 67px;
    position: relative;
    padding: 16.5px 33.5px;
    cursor: pointer;
    // &:last-child {
    //   padding-right: 0;
    // }
    &:hover {
      .secondary-nav {
        visibility: 1;
        opacity: 1;
        height: auto;
        // transition: all 0.2s ease-out;
        animation: a_menu_item_show 0.2s ease-out both;
        -webkit-animation: a_menu_item_show 0.2s ease-out both;
      }
      .nav-link {
        color: #00bbc4;
        &::after {
          width: 100%;
          left: 0;
          right: 0;
          border-bottom: 3px solid #00bbc4;
        }
      }
    }
    .secondary-nav {
      opacity: 0;
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
        &:hover {
          color: #000;
        }
      }
    }
  }
  .sub-link-show {
    height: 445px;
    &:hover .secondary-nav {
      // visibility: 1;
      // display: block;
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
    padding: 8px 0;
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
  .header-bg-cover {
    display: block !important;
    width: 100%;
    height: 405px;
    background: rgba(255, 255, 255, 0.95);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    // animation: bg-hover-show 0.2s ease-out both;
    // transform-origin: 50% 0%;
    // -webkit-transform-origin: 50% 0%;
  }
  .submenu-show .header-bg-cover {
    animation: bg-hover-show 0.2s ease-out both;
    transform-origin: 50% 0%;
    -webkit-transform-origin: 50% 0%;
  }
  .submenu-hide .header-bg-cover {
    animation: bg-hover-hide 0.2s ease-out both;
    transform-origin: 50% 0%;
    -webkit-transform-origin: 50% 0%;
  }
}

@keyframes a_menu_item_show {
  0% {
    -webkit-transform: translate(-50%, -30px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translate(-50%, 0);
    opacity: 1;
  }
}

@keyframes a_menu_item_hide {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(0, -30px);
    opacity: 0;
  }
}

@keyframes bg-hover-show {
  from {
    height: 0;
    top: 0;
    opacity: 0;
  }
  to {
    height: 405px;
    top: 0;
    opacity: 1;
  }
}
@keyframes bg-hover-hide {
  from {
    height: 405px;
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
