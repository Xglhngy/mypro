<template>
  <div class="container-750px">
    <header class="header-banner">
      <img src="~/assets/images/jewelry/maintain/banner_01.png" width="100%" alt />
    </header>
    <section
      class="catalog-content"
      :class="isMobileBrower ? 'mobile-catalog-content' : 'pc-jewelry-index-catalog-content'"
    >
      <div
        class="mx-auto"
        :class="isMobileBrower ? 'mobile-title-img_box ' : 'pc-jewelry-index-title-img_box'"
        @click="handleCatalog('afterSale')"
      >
        <img src="~/assets/images/jewelry/maintain/title_after-sale.png" width="100%" alt />
      </div>
      <div
        class="mx-auto"
        :class="isMobileBrower ? 'mobile-title-img_box ' : 'pc-jewelry-index-title-img_box'"
        @click="handleCatalog('metal')"
      >
        <img src="~/assets/images/jewelry/maintain/title_metal.png" width="100%" alt />
      </div>
      <div
        class="mx-auto"
        :class="isMobileBrower ? 'mobile-title-img_box ' : 'pc-jewelry-index-title-img_box'"
        @click="handleCatalog('gem')"
      >
        <img src="~/assets/images/jewelry/maintain/title_gem.png" width="100%" alt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileBrower: true
    }
  },
  mounted() {
    this.isMobileBrower = this.isMobile()
  },
  methods: {
    handleCatalog(type) {
      this.$router.push({
        path: '/jewelry/maintain/catalog',
        query: { type }
      })
    },
    isMobile() {
      const flag = window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
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
  // height: 782px;
  // height: calc(100vh - 602px);
  // padding: 101px 0;
  &.mobile-catalog-content {
    height: calc(100vh - 602px);
    padding: 101px 0;
  }
  .mobile-title-img_box {
    width: 414px;
    padding: 25px 0;
  }
}
</style>
