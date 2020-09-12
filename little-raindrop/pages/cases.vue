<template>
  <div>
    <aside id="headImg" class="text-white pt-12 pb-10 index-header">
      <div class="bg-img overlay" />
      <div class="container">
        <div class="slogan row text-center">
          <div class="col-lg-12">
            <!-- <h1 style="font-size: 44px;">
              解决方案
            </h1>-->
            <SectionTitle font-size="44px" font-text="客户案例" font-color="#fff" />
            <p class="text-20px lead h3 my-3">专业的合作伙伴与客户，遍及互联网，手机，金融。遥感等多个领域</p>
          </div>
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
        >经典案例</a>
        <a
          id="subService"
          class="anchor-title"
          href="#floor-2"
          :class="curAuthorTab === 'two' ? 'anchor-active' : ''"
        >全部案例</a>
        <a
          id="subAdvantage"
          class="anchor-title"
          href="#floor-3"
          :class="curAuthorTab === 'three' ? 'anchor-active' : ''"
        >加入我们</a>
      </div>
    </div>
    <!-- 经典案例 -->
    <section>
      <a id="floor-1" name="floor-1" class="anchor-content">
        <div class="container">
          <div class="cases-classify">
            <div class="cases-classify-title text-center">
              <section-title font-text="经典案例" />
            </div>
            <div class="cases-classify-item">
              <img src="~/assets/images/cases/cases_01.png" alt width="100%" />
              <div class="classify-box box-left">
                <section-title font-text="智慧展厅" font-size="30px" />
                <p
                  class="text-16px py-4"
                >通过与小雨滴的合作，智慧展厅创新地实现了对消费者科技型、选款、预览的创新性互动，为顾客推送心仪的商品，成功构建了“近景营销”闭环</p>
              </div>
            </div>
            <div class="cases-classify-item">
              <img src="~/assets/images/cases/cases_01.png" alt width="100%" />
              <div class="classify-box box-right">
                <section-title font-text="智慧展厅" font-size="30px" />
                <p
                  class="text-16px py-4"
                >通过与小雨滴的合作，智慧展厅创新地实现了对消费者科技型、选款、预览的创新性互动，为顾客推送心仪的商品，成功构建了“近景营销”闭环</p>
              </div>
            </div>
            <div class="cases-classify-miniapp">
              <div class="text-center pb-4">
                <SectionTitle font-text="礼品小程序" />
              </div>
              <div class="mt-4">
                <div class="d-flex justify-content-center">
                  <div class="miniapp-box">
                    <img src="~/assets/images/cases/miniapp_01.png" alt width="100%" />
                    <div class="py-4">
                      <p class="text-24px color-black pb-3">智慧展厅</p>
                      <p
                        class="text-16px lead"
                      >通过与小雨滴的合作，智慧展厅创新的实现了对消费者科技型，预览的创新性互动，为顾客推送心仪的产品，成功构建了“近景营销”通过与小雨滴的合作，智慧展厅创新的实现了成功</p>
                    </div>
                  </div>
                  <div class="miniapp-box">
                    <img src="~/assets/images/cases/miniapp_02.png" alt width="100%" />
                    <div class="py-4">
                      <p class="text-24px color-black pb-3">智慧展厅</p>
                      <p
                        class="text-16px lead"
                      >通过与小雨滴的合作，智慧展厅创新的实现了对消费者科技型，预览的创新性互动，为顾客推送心仪的产品，成功构建了“近景营销”通过与小雨滴的合作，智慧展厅创新的实现了成功</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
    <!-- 全部案例 -->
    <section>
      <a id="floor-2" name="floor-2" class="anchor-content">
        <div class="cases-all">
          <div class="cases-all-title text-center">
            <section-title font-text="全部案例" />
          </div>
          <div class="d-flex flex-wrap">
            <div v-for="(item, index) in casesProjectList" :key="index" class="cases-project-item">
              <!-- <img
                :src="item.imgUrls"
                class="img-responsive"
                alt=""
                width="100%"
              />
              <div class="project-summary color-white">
                <h5 class="text-24px">{{ item.title }}</h5>
                <p class="text-16px pt-3">
                  {{ item.describe }}
                </p>
              </div>-->
              <div class="hover-effect">
                <img class="img-responsive" :src="item.imgUrls" alt width="100%" />
                <div class="overlay">
                  <h3 class="project-title text-24px color-white">{{ item.title }}</h3>
                  <a class="project-summary text-16px color-white lead" href="#">{{ item.describe }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
    <!-- 加入我们 -->
    <a id="floor-3" name="floor-3" class="anchor-content">
      <section class="container">
        <div class="cases-join-us text-center position-relative">
          <img src="~/assets/images/cases/join-us.png" alt width="100%" />
          <div class="join-us-content text-left">
            <SectionTitle font-text="加入我们" font-color="#fff" />
            <div class="join-us-btn">
              <img src="~/assets/images/cases/join-us_btn.svg" alt />
            </div>
          </div>
        </div>
      </section>
    </a>
  </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle'
export default {
  components: {
    SectionTitle
  },
  data() {
    return {
      headerNavHeight: 0,
      searchBarFixed: false,
      curAuthorTab: '',
      casesProjectList: [
        {
          imgUrls: require('~/assets/images/cases/proejct_01.png'),
          title: '零售业',
          describe:
            '说明说明，详细介绍说明，后期文字需要替换这是随便填写的文字数据，仅供查看显示'
        },
        {
          imgUrls: require('~/assets/images/cases/proejct_02.png'),
          title: '零售业',
          describe:
            '说明说明，详细介绍说明，后期文字需要替换这是随便填写的文字数据，仅供查看显示'
        },
        {
          imgUrls: require('~/assets/images/cases/proejct_03.png'),
          title: '零售业',
          describe: '说明说明，详细介绍说明，后期文字需要替换这是随便填写的'
        },
        {
          imgUrls: require('~/assets/images/cases/proejct_04.png'),
          title: '零售业',
          describe:
            '说明说明，详细介绍说明，后据，仅供查看显示字数据，仅供查看显示'
        },
        {
          imgUrls: require('~/assets/images/cases/proejct_05.png'),
          title: '零售业',
          describe:
            '说明说明，详细介绍说明，后期文字需要替换这是随示字数据，仅供查看显示'
        },
        {
          imgUrls: require('~/assets/images/cases/proejct_06.png'),
          title: '零售业',
          describe:
            '说明说明，详细介绍说明，后期文字仅供查看显示字数据，仅供查看显示'
        },
        {
          imgUrls: require('~/assets/images/cases/proejct_07.png'),
          title: '零售业',
          describe:
            '说明说明，详细介绍说明，后期文字需要替换这是仅供查看显示字数据，仅供查看显示'
        },
        {
          imgUrls: require('~/assets/images/cases/proejct_08.png'),
          title: '零售业',
          describe:
            '后期文字需要替换这是随便填写的文字数据，仅供查看显示字数据，仅供查看显示'
        },
        {
          imgUrls: require('~/assets/images/cases/proejct_09.png'),
          title: '零售业',
          describe:
            '后期文字需要替换这是随便填写的文字数据，仅供查看显示字数据，仅供查看显示'
        }
      ]
    }
  },
  mounted() {
    this.headerNavHeight = this.$store.getters.headerNavHeight
    window.addEventListener('scroll', this.handleScrollAnchor)
  },
  destroyed() {
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
      } else if (isPageBottom) {
        this.curAuthorTab = 'three'
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
  height: 484px;
  background: transparent url('~assets/images/cases/head-img.png') no-repeat
    center center;
  background-size: cover;
  position: relative;
  .slogan {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .bg-img {
    background-image: linear-gradient(-45deg, #144243 0%, #112b2c 100%);
  }
}

// 经典案例
.cases-classify {
  padding-top: 80px;
  .cases-classify-title {
    padding-bottom: 50px;
  }
  .cases-classify-item {
    position: relative;
    // width: 1206px;
    // height: 548px;
    margin: 0 auto 80px;
    // &.item-bg_up {
    //   background: transparent url('~assets/images/cases/cases_01.png') no-repeat
    //     center center;
    // }
    // &.item-bg_bottom {
    //   background: transparent url('~assets/images/cases/cases_02.png') no-repeat
    //     center center;
    // }
    .classify-box {
      position: absolute;
      top: 90px;
      width: 422px;
      height: 348px;
      padding: 28px 46px;
      background-color: #fbfbfb;
      &.box-left {
        left: -20px;
      }
      &.box-right {
        right: -20px;
      }
    }
  }
  .cases-classify-miniapp {
    padding: 50px 0;
    background-color: #f9f9f9;
    .miniapp-box {
      width: 586px;
      &:nth-child(1) {
        margin-right: 12px;
      }
      &:nth-child(2) {
        margin-left: 12px;
      }
    }
  }
}

// 全部案例
.cases-all {
  padding-top: 80px;
  .cases-all-title {
    padding-bottom: 50px;
  }
  .cases-project-item {
    position: relative;
    width: 33.3%;
    // .project-summary {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   z-index: 2;
    //   padding: 24px 48px;
    // }
    .hover-effect {
      width: 100%;
      height: 100%;
      float: left;
      overflow: hidden;
      position: relative;
      cursor: default;
    }

    .hover-effect .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
      top: 0;
      left: 0;
      background-color: rgba(75, 75, 75, 0.3);
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }

    .hover-effect:hover .overlay {
      background-color: rgba(48, 152, 157, 0.9);
    }

    .hover-effect img {
      display: block;
      position: relative;
    }

    .hover-effect .project-title {
      position: relative;
      text-align: center;
      padding: 10px 20px;
      -webkit-transform: translateY(70px);
      -ms-transform: translateY(70px);
      transform: translateY(70px);
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }

    .hover-effect:hover .project-title {
      -webkit-transform: translateY(45px);
      -ms-transform: translateY(45px);
      transform: translateY(45px);
    }

    .hover-effect a.project-summary {
      position: relative;
      left: 50%;
      margin: -12px 0 0 -40%;
      width: 80%;
      display: inline-block;
      text-decoration: none;
      // text-transform: uppercase;
      border: 1px solid #fff;
      background-color: transparent;
      opacity: 0;
      filter: alpha(opacity=0);
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      font-weight: normal;
      padding: 62px 20px 20px;
    }

    .hover-effect:hover a.project-summary {
      opacity: 1;
      filter: alpha(opacity=100);
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    .hover-effect a.project-summary:hover {
      box-shadow: 0 0 5px #fff;
    }
  }
}

// 加入我们
.cases-join-us {
  padding: 80px 0 54px;
  .join-us-content {
    position: absolute;
    top: 50%;
    transform: translate(108px, -50%);
  }
  .join-us-btn {
    margin: 32px 0;
    cursor: pointer;
  }
}
</style>
