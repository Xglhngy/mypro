<template>
  <div>
    <aside id="headImg" class="text-white pt-12 pb-10 index-header">
      <div
        id="carouselExampleIndicators"
        class="carousel-header_banner carousel slide carousel-fade"
        data-ride="carousel"
        data-interval="2500"
      >
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <!-- <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>-->
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="~/assets/images/index/header-banner_01.png" class="d-block w-100" alt="..." />
          </div>
          <!-- <div class="carousel-item">
            <img src="~/assets/images/index/header-banner_02.png" class="d-block w-100" alt="..." />
          </div>-->
          <div class="carousel-item">
            <img src="~/assets/images/index/header-banner_03.png" class="d-block w-100" alt="..." />
          </div>
          <!-- <div class="carousel-item">
            <img src="~/assets/images/index/header-banner_04.png" class="d-block w-100" alt="..." />
          </div>-->
        </div>
      </div>
    </aside>
    <div id="anchorBar" class="anchor-catalog" :class="searchBarFixed ? 'fixed-anchor-bar' : ''">
      <div class="container">
        <a
          id="subIntro"
          class="anchor-title"
          href="#floor-1"
          :class="curAuthorTab === 'one' ? 'anchor-active' : ''"
        >公司简介</a>
        <a
          id="subService"
          class="anchor-title"
          href="#floor-2"
          :class="curAuthorTab === 'two' ? 'anchor-active' : ''"
        >我们的优势</a>
        <a
          id="subAdvantage"
          class="anchor-title"
          href="#floor-3"
          :class="curAuthorTab === 'three' ? 'anchor-active' : ''"
        >经典案例</a>
        <a
          id="subAdvantage"
          class="anchor-title"
          href="#floor-4"
          :class="curAuthorTab === 'four' ? 'anchor-active' : ''"
        >合作伙伴</a>
      </div>
    </div>
    <!-- 公司简介 -->
    <section>
      <a id="floor-1" name="floor-1" class="anchor-content">
        <div class="index-intro container">
          <div class="index-slogan row text-center">
            <div class="col-lg-12">
              <div class="pb-60px">
                <section-title font-text="公司简介" />
              </div>
              <div class="text-20px pb-4">
                <p class="lead mb-2">小雨滴于2019年8月成立，是一家专注于为珠宝行业提供整体解决方案的平台公司</p>
                <p class="lead mb-2">通过信息化、数字化、智能化助力企业数字化升级，达到‘共进互赢’</p>
                <!-- <p class="lead mb-2">我们的使命是“用户为本 互赢共进”</p> -->
              </div>
            </div>
            <div class="col-lg-12 gap-y align-items-center">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-4">
                  <div class="index-intro_img">
                    <nuxt-link to="/">
                      <img src="~/assets/images/index/intro_01.png" alt />
                      <div class="caption">
                        <h2 class="text-30px color-white">使命与愿景</h2>
                      </div>
                      <div class="overlay"></div>
                    </nuxt-link>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-4">
                  <div class="index-intro_img">
                    <nuxt-link to="/">
                      <img src="~/assets/images/index/intro_02.png" alt />
                      <div class="caption">
                        <h2 class="text-30px color-white">发展历程</h2>
                      </div>
                      <div class="overlay"></div>
                    </nuxt-link>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-4">
                  <div class="index-intro_img">
                    <nuxt-link to="/">
                      <img src="~/assets/images/index/intro_03.png" alt />
                      <div class="caption">
                        <h2 class="text-30px color-white">联系我们</h2>
                      </div>
                      <div class="overlay"></div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
    <!-- 我们的优势 -->
    <section>
      <a id="floor-2" name="floor-2" class="anchor-content">
        <div class="index-advantage py-80px bg-color-f9f9f9">
          <div class="container">
            <div class="row text-center">
              <div class="col-lg-12 pb-2">
                <section-title font-text="我们的优势" />
              </div>
              <div class="col-lg-12">
                <div class="row text-center mt-2">
                  <div
                    v-for="(item, index) in advantageList"
                    :key="index"
                    class="index-advantage-item col-md-4 col-sm-12 col-xs-12"
                  >
                    <div class="index-advantage_img_effect">
                      <div class="animate-grow">
                        <img :src="item.imgUrls" alt />
                      </div>
                      <div class="overlay">
                        <h2 class="mt-4 mb-3" style="font-size: 24px; color: #000;">{{ item.title }}</h2>
                        <p style="font-size: 16px; line-height: 1.8;" v-html="item.describe"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
    <!-- 经典案例 -->
    <section>
      <a id="floor-3" name="floor-3" class="anchor-content">
        <div class="index-classics-case pt-80px">
          <div class="text-center pb-60px">
            <section-title font-text="经典案例" />
          </div>
          <div class="index-classics-banner">
            <div
              id="carouselExampleCaptions"
              class="carousel-classify_cases carousel slide carousel-fade"
              data-ride="carousel"
              data-interval="2500"
            >
              <ol class="carousel-indicators list-unstyled">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active">
                  <span class="dot"></span>
                </li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1">
                  <span class="dot"></span>
                </li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2">
                  <span class="dot"></span>
                </li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3">
                  <span class="dot"></span>
                </li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="~/assets/images/index/classify-cases_01.png" class="d-block w-100" alt />
                  <div class="reset-carousel-caption d-none d-md-block">
                    <h3 class="text-28px">周六福云展厅</h3>
                    <p class="text-16px my-4">方便加盟商在网上选货挑货</p>
                    <div class="more-btn">
                      <div class="more-btn-bg"></div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="~/assets/images/index/classify-cases_02.png" class="d-block w-100" alt />
                  <div class="reset-carousel-caption d-none d-md-block">
                    <h3 class="text-28px">周六福云展厅</h3>
                    <p class="text-16px my-4">方便加盟商在网上选货挑货</p>
                    <div class="more-btn">
                      <div class="more-btn-bg"></div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="~/assets/images/index/classify-cases_03.png" class="d-block w-100" alt />
                  <div class="reset-carousel-caption d-none d-md-block">
                    <h3 class="text-28px">周六福云展厅</h3>
                    <p class="text-16px my-4">方便加盟商在网上选货挑货</p>
                    <div class="more-btn">
                      <div class="more-btn-bg"></div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="~/assets/images/index/classify-cases_04.png" class="d-block w-100" alt />
                  <div class="reset-carousel-caption d-none d-md-block">
                    <h3 class="text-28px">周六福云展厅</h3>
                    <p class="text-16px my-4">方便加盟商在网上选货挑货</p>
                    <div class="more-btn">
                      <div class="more-btn-bg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
    <!-- 合作伙伴 -->
    <section>
      <a id="floor-4" name="floor-4" class="anchor-content">
        <div class="index-parenter">
          <div class="container">
            <div class="row text-center">
              <div class="col-lg-12 mb-4">
                <div class="pb-60px">
                  <section-title font-text="合作伙伴" />
                </div>
                <div class="text-20px">
                  <p class="lead">我们已和多家企业建立了长期的合作关系，实现互赢共利，并取得显著成效，我们也期待您的加入</p>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="row" style="padding: 0 10%;">
                  <div class="d-flex align-items-center col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-4">
                    <div class="animate-hover-shadow">
                      <img
                        src="~/assets/images/index/partner_01.png"
                        width="205px"
                        height="78px"
                        alt
                      />
                    </div>
                  </div>
                  <div class="d-flex align-items-center col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-4">
                    <div class="animate-hover-shadow">
                      <img
                        src="~/assets/images/index/partner_02.png"
                        width="205px"
                        height="78px"
                        alt
                      />
                    </div>
                  </div>
                  <div class="d-flex align-items-center col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-4">
                    <div class="animate-hover-shadow">
                      <img src="~/assets/images/index/partner_03.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
// import PageLayout from '~/components/PageLayout'
import SectionTitle from '~/components/SectionTitle'
export default {
  components: {
    // PageLayout,
    SectionTitle
  },
  directives: {},
  data() {
    return {
      headerImgHeight: 0,
      anchorNavList: [
        { title: '公司简介' },
        { title: '我们的优势' },
        { title: '经典案例' },
        { title: '合作伙伴' }
      ],
      headerNavHeight: 0,
      searchBarFixed: false,
      curAuthorTab: '',
      advantageList: [
        {
          imgUrls: require('~/assets/images/index/advantage_01.svg'),
          title: '团队经验',
          describe:
            '拥有一批高素质、专业的成熟技术团队<br />成员从业经验十年以上'
        },
        {
          imgUrls: require('~/assets/images/index/advantage_02.svg'),
          title: '技术领先',
          describe: '掌握主流的领先技术<br />并能将先进的技术成熟运用'
        },
        {
          imgUrls: require('~/assets/images/index/advantage_03.svg'),
          title: '安全稳定',
          describe:
            '产品系统版本根据市场环境变化<br />持续不断的迭代更新<br />目前各产品线都已稳定的长时间运行'
        },
        {
          imgUrls: require('~/assets/images/index/advantage_04.svg'),
          title: '定制服务',
          describe: '为不同客户的不同需求<br />专属定制不同的解决方案'
        },
        {
          imgUrls: require('~/assets/images/index/advantage_05.svg'),
          title: '快速上线',
          describe: '采用小雨滴科技提供的成熟解决方案<br />快速上线'
        },
        {
          imgUrls: require('~/assets/images/index/advantage_06.svg'),
          title: '专属客服',
          describe: '专属客服一对一服务<br />第一时间解决用户问题'
        }
      ]
    }
  },
  computed: {},
  created() {},
  mounted() {
    window.$('.carousel-header_banner').carousel()
    window.$('.carousel-classify_cases').carousel()
    this.headerImgHeight = document.querySelector('#headImg').offsetHeight
    this.headerNavHeight = this.$store.getters.headerNavHeight
    window.addEventListener('scroll', this.handleScrollAnchor)
  },
  destroyed() {
    window.$('.carousel-header_banner').carousel('dispose')
    window.$('.carousel-classify_cases').carousel('dispose')
    window.removeEventListener('scroll', this.handleScrollAnchor)
  },
  methods: {
    handleScrollAnchor() {
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      const pageScrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.documentElement.scrollTop
      // 变量windowHeight是可视区的高度
      const windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      // 变量scrollHeight是滚动条的总高度
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight
      const isPageBottom = pageScrollTop + windowHeight === scrollHeight
      const anchorBarTop = document.querySelector('#anchorBar').offsetTop
      const headImgTop =
        document.querySelector('#headImg').offsetHeight + this.headerNavHeight // 76 顶部导航的高度
      const introTop =
        document.querySelector('#floor-1').offsetTop - this.headerNavHeight // 76 顶部导航的高度
      const serviceTop =
        document.querySelector('#floor-2').offsetTop - this.headerNavHeight
      const advantageTop =
        document.querySelector('#floor-3').offsetTop - this.headerNavHeight
      const parenterTop =
        document.querySelector('#floor-4').offsetTop - this.headerNavHeight
      if (pageScrollTop > anchorBarTop && pageScrollTop >= headImgTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
      if (
        introTop <= pageScrollTop &&
        pageScrollTop < serviceTop &&
        !isPageBottom
      ) {
        this.curAuthorTab = 'one'
      } else if (
        serviceTop <= pageScrollTop &&
        pageScrollTop < advantageTop &&
        !isPageBottom
      ) {
        this.curAuthorTab = 'two'
      } else if (
        advantageTop <= pageScrollTop &&
        pageScrollTop < parenterTop &&
        !isPageBottom
      ) {
        this.curAuthorTab = 'three'
      } else if (isPageBottom) {
        this.curAuthorTab = 'four'
      } else {
        this.curAuthorTab = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 首页图
.index-header {
  // bootstarp的carousel-item中display:none不占据文档流，对header定位造成影响，改为inline-block
  .carousel-header_banner .carousel-item {
    display: inline-block;
  }
  .carousel-indicators {
    bottom: 15px;
    li {
      background-color: #fff;
      opacity: 1;
      &.active {
        background-color: #00bbc4;
      }
    }
  }
  // height: 652px;
  // background: transparent url('~assets/images/index/header-banner_01.png')
  // no-repeat center center;
  // background-size: cover;
  // position: relative;
  // .slogan {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  // }
  // .bg-img {
  //   background-image: linear-gradient(-45deg, #144243 0%, #112b2c 100%);
  // }
}

// 公司简介
.index-intro {
  padding: 80px 0;
  .index-intro_img {
    width: 100%;
    float: left;
    overflow: hidden;
    position: relative;
    cursor: default;
    &:hover {
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 187, 196, 0.8);
      }
      .caption h2::after {
        left: 0;
        right: 0;
        width: 100%;
        border-bottom: 3px solid #fff;
      }
    }
    .caption {
      position: absolute;
      z-index: 2;
      display: inline-block;
      color: #000;
      top: 35%;
      left: 50%;
      padding: 12px 0;
      transform: translate(-50%, 0);
      h2::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
        width: 0;
        height: 2px;
        transition: width 0.3s;
      }
    }
  }
  .index-intro_img img {
    display: block;
    position: relative;
    max-width: none;
    width: calc(100% + 60px);
    -webkit-transition: opacity 0.35s, -webkit-transform 0.45s;
    transition: opacity 0.35s, transform 0.45s;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }
  .index-intro_img:hover img {
    opacity: 0.6;
    filter: alpha(opacity=60);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

// 我们的优势
.index-advantage {
  // padding: 80px 0;
  .index-advantage-item {
    padding-top: 54px;
  }
}

// 经典案例
.index-classics-case {
  // padding-top: 80px;
  // .index-classics-banner {
  //   padding-top: 54px;
  // }
  .carousel-classify_cases {
    // 轮播图上的文字重置样式
    .reset-carousel-caption {
      position: absolute;
      top: 50%;
      right: 22%;
      z-index: 2;
      color: #fff;
      transform: translate(0, -50%);
      .more-btn {
        padding-top: 30px;
        cursor: pointer;
        .more-btn-bg {
          width: 180px;
          height: 50px;
          background: transparent url('~assets/images/index/more-btn.svg')
            no-repeat center center;
          background-size: cover;
          &:hover {
            background: transparent
              url('~assets/images/index/more-btn_hover.svg') no-repeat center
              center;
            background-size: cover;
          }
        }
      }
    }
    // 轮播图上的激活样式重置样式
    .carousel-indicators {
      position: absolute;
      top: 50%;
      bottom: 0;
      left: auto;
      right: 3%;
      z-index: 3;
      display: block;
      margin: 0 !important;
      transform: translate(0, -50%);
      li {
        // position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        text-indent: 0;
        width: 36px;
        height: 36px;
        line-height: 32px;
        text-align: center;
        border-radius: 18px;
        margin: 24px 0;
        border: 1px solid transparent;
        background-color: transparent !important;
        &.active {
          border: 1px solid #fff;
        }
        .dot {
          position: absolute;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background-color: #fff;
        }
      }
    }
  }
}
// 合作伙伴
.index-parenter {
  background-color: #f9f9f9;
  padding: 80px 0;
}
</style>
