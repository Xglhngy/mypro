<template>
  <div>
    <Header />
    <!-- <div :style="{paddingTop: headerNavHeight + 'px' }"> -->
    <div>
      <nuxt />
    </div>
    <Footer />
    <div id="back-top" @click="topFunction()">
      <!-- <div id="back-top" onclick="topFunction()"> -->
      <span class="icon-stack">
        <img src="~/assets/images/arrow-up.svg" alt />
      </span>
    </div>
  </div>
</template>
<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      headerNavHeight: 0
    }
  },
  created() {},
  mounted() {
    this.headerNavHeight = this.$store.getters.headerNavHeight
    // 在页面加载时读取sessionStorage里的状态信息
    // if (sessionStorage.getItem('store')) {
    //   this.$store.replaceState(
    //     Object.assign(
    //       {},
    //       this.$store.state,
    //       JSON.parse(sessionStorage.getItem('store'))
    //     )
    //   )
    // }
    // // 在页面刷新时将vuex里的信息保存到sessionStorage里
    // window.addEventListener('beforeunload', () => {
    //   sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    // })
    // 回到顶部
    window.addEventListener('scroll', this.scrollFunction)
  },
  methods: {
    scrollFunction() {
      const pageScrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.documentElement.scrollTop
      if (pageScrollTop > 20) {
        document.getElementById('back-top').style.display = 'block'
      } else {
        document.getElementById('back-top').style.display = 'none'
      }
    },
    topFunction() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style lang="scss" scoped>
/* 返回顶部 */
#back-top {
  display: none;
  position: fixed;
  width: 48px;
  height: 48px;
  right: 25px;
  bottom: 25px;
  z-index: 10000;
  cursor: pointer;
}

#back-top .icon-stack {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  background-color: #252c41;
  overflow: hidden;
  -webkit-transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  -moz-transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  border-radius: 0.2rem;
}
#back-top .icon-stack:hover {
  background-color: #00bbc0;
}
</style>
