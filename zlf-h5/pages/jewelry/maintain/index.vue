<template>
  <div class="container-750px">
    <header id="headerImg" class="header-banner">
      <img src="~/assets/images/jewelry/maintain/banner_01.png" width="100%" alt />
    </header>
    <section id="catalogHeight" class="catalog-content catalog-content">
      <div class="mx-auto mobile-title-img_box" @click="handleNavToCatalog('afterSale')">
        <img src="~/assets/images/jewelry/maintain/title_after-sale.png" width="100%" alt />
      </div>
      <div class="mx-auto mobile-title-img_box" @click="handleNavToCatalog('metal')">
        <img src="~/assets/images/jewelry/maintain/title_metal.png" width="100%" alt />
      </div>
      <div class="mx-auto mobile-title-img_box" @click="handleNavToCatalog('gem')">
        <img src="~/assets/images/jewelry/maintain/title_gem.png" width="100%" alt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.setMobileCatalogHeight()
  },
  methods: {
    /**
     * 目录的背景图：
     * 1）产生滚动条的页面，已填充完整，不做设置（eg：PC和ipad）；
     * 2）未产生滚动条高度的，手动设置填充剩余高度（eg： 手机端）
     *    移动端设置剩余高度 = 窗口可视高度 - 顶部图片高度
     */
    setMobileCatalogHeight() {
      const windowHeight = window.innerHeight // 移动端可视区域的高度
      const headerImgHeight = document.getElementById('headerImg').offsetHeight // 顶部图片的高度
      const calcHeight = windowHeight - headerImgHeight // 计算剩余的高度，填充背景
      if (!this.hasScrollbar()) {
        document.getElementById(
          'catalogHeight'
        ).style.height = `${calcHeight}px`
      }
    },
    hasScrollbar() {
      return (
        document.body.scrollHeight >
        (window.innerHeight || document.documentElement.clientHeight)
      )
    },
    handleNavToCatalog(type) {
      this.$router.push({
        path: '/jewelry/maintain/catalog',
        query: { type }
      })
    }
  },
  head() {
    return {
      title: '周六福珠宝保养手册'
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-content {
  background: url('~assets/images/jewelry/maintain/bg_index.png') no-repeat
    center center;
  background-size: cover;
  .mobile-title-img_box {
    width: 55.2%;
    padding-top: 6.66%;
    // width: 414px;
    // padding: 25px 0;
    &:first-child {
      padding-top: 16.8%;
    }
    &:last-child {
      padding-bottom: 16.8%;
    }
  }
}
</style>
