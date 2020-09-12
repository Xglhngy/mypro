<template>
  <div>
    <aside id="headImg" class="text-white pt-12 pb-10 index-header">
      <div class="bg-img overlay" />
      <div class="container">
        <div class="slogan row text-center">
          <div class="col-lg-12">
            <h1 style="font-size: 44px;">解决方案</h1>
            <p class="text-20px lead h3 my-3">掌握科技，科创未来；注重品质，用心服务；惊喜管理，全球视野，勇争佳绩。</p>
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
        >热门解决方案</a>
        <a
          id="subService"
          class="anchor-title"
          href="#floor-2"
          :class="curAuthorTab === 'two' ? 'anchor-active' : ''"
        >全部解决方案</a>
        <a
          id="subAdvantage"
          class="anchor-title"
          href="#floor-3"
          :class="curAuthorTab === 'three' ? 'anchor-active' : ''"
        >方案与架构咨询</a>
      </div>
    </div>
    <!-- 热门解决方案 -->
    <section>
      <a id="floor-1" name="floor-1" class="anchor-content">
        <div class="schemes-hot_solution container">
          <div class="row text-center">
            <div class="col-lg-12">
              <section-title font-text="热门解决方案" />
            </div>
            <div class="col-lg-12">
              <div class="row gap-y text-center">
                <div
                  v-for="(item, index) in hotSolutionList"
                  :key="index"
                  class="col-md-3 col-sm-6 col-xs-12"
                >
                  <div class="schemes-hot_solution-item">
                    <img :src="item.imgUrls" alt />
                    <div class="p-4">
                      <h2 class="text-18px color-black">{{ item.title }}</h2>
                      <p class="text-16px pt-3 pb-4 lead">{{ item.describe }}</p>
                    </div>
                    <div class="learn-more">
                      <nuxt-link to="/solution/detail">
                        <span class="custom_btn text-16px d-inline-block">了解更多</span>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </section>
    <!-- 全部解决方案 -->
    <a id="floor-2" name="floor-2" class="anchor-content">
      <section>
        <div class="schemes-classify_solution container">
          <div class="text-center my-4">
            <SectionTitle font-text="全部解决方案" />
          </div>
          <div class="container">
            <ul class="tabs-nav d-flex list-unstyled justify-content-center text-24px">
              <li
                v-for="(item, index) in curTabsList"
                :key="index"
                :class="curTabsIndex === index && 'active'"
                @click="curTabsIndex = index"
              >{{ item.title }}</li>
            </ul>
            <aside class="tabs-content">
              <div v-show="curTabsIndex === 0" class="row my-4">
                <div
                  v-for="(item, index) in classifySolutionList"
                  :key="index"
                  class="col-lg-4 col-md-4 col-sm-6 col-xs-12 d-flex mb-4"
                >
                  <div class="box-items">
                    <div class="d-flex">
                      <img src="~/assets/images/solution/icon.svg" alt />
                      <h6 class="text-24px align-items-center px-3">{{ item.title }}</h6>
                    </div>
                    <p class="text-16px mt-3 lead">{{ item.describe }}</p>
                  </div>
                </div>
              </div>
              <div v-show="curTabsIndex === 1" class="row my-4">
                <div class="col-lg-12">
                  <div class="py-4 text-center">敬请期待1...</div>
                </div>
              </div>
              <div v-show="curTabsIndex === 2" class="row my-4">
                <div class="col-lg-12">
                  <div class="py-4 text-center">敬请期待2...</div>
                </div>
              </div>
              <div v-show="curTabsIndex === 3" class="row my-4">
                <div class="col-lg-12">
                  <div class="py-4 text-center">敬请期待3...</div>
                </div>
              </div>
              <div v-show="curTabsIndex === 4" class="row my-4">
                <div class="col-lg-12">
                  <div class="py-4 text-center">敬请期待4...</div>
                </div>
              </div>
              <div v-show="curTabsIndex === 5" class="row my-4">
                <div class="col-lg-12">
                  <div class="py-4 text-center">敬请期待5...</div>
                </div>
              </div>
              <div v-show="curTabsIndex === 6">
                <div class="col-lg-12">
                  <div class="py-4 text-center">敬请期待6...</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </a>
    <!-- 方案结构与咨询 -->
    <a id="floor-3" name="floor-3" class="anchor-content">
      <section>
        <div class="schemes-framework">
          <div class="contact-us text-center">
            <SectionTitle font-text="方案结构与咨询" />
            <p class="lead py-4">关于使用场景和技术架构的更多咨询，请联系我们的销售和技术支持团队。</p>
            <div class="learn-more pt-2">
              <nuxt-link to="/">
                <span class="custom_btn text-16px d-inline-block">联系我们</span>
              </nuxt-link>
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
      curTabsIndex: 0,
      curTabsList: [
        { title: '通用' },
        { title: '零售' },
        { title: '教育' },
        { title: '区块链' },
        { title: '智慧展厅' },
        { title: '微信小程序' },
        { title: '安全与运维' }
      ],
      hotSolutionList: [
        {
          imgUrls: require('~/assets/images/solution/schemes_01.png'),
          title: '电商解决方案',
          describe: '精选一件代发包邮商品且支持自动化下单'
        },
        {
          imgUrls: require('~/assets/images/solution/schemes_02.png'),
          title: '订单管理解决方案',
          describe: '精选一件代发包邮商品且支持自动化下单'
        },
        {
          imgUrls: require('~/assets/images/solution/schemes_03.png'),
          title: '买家采购解决方案',
          describe: '精选一件代发包邮商品且支持自动化下单'
        },
        {
          imgUrls: require('~/assets/images/solution/schemes_04.png'),
          title: '跨境解决方案',
          describe: '精选一件代发包邮商品且支持自动化下单'
        }
      ],
      classifySolutionList: [
        {
          title: '零售业',
          describe:
            '说明说明，详细介绍说明，后期文字需要替换这是随便填写的文字数据，仅供查看显示'
        },
        {
          title: '零售业',
          describe:
            '说明说明，详细介绍说明，后期文字需要替换这是随便填写的文字数据，仅供查看显示'
        },
        {
          title: '零售业',
          describe: '说明说明，详细介绍说明，后期文字需要替换这是随便填写的'
        },
        {
          title: '零售业',
          describe:
            '说明说明，详细介绍说明，后据，仅供查看显示字数据，仅供查看显示'
        },
        {
          title: '零售业',
          describe:
            '说明说明，详细介绍说明，后期文字需要替换这是随示字数据，仅供查看显示'
        },
        {
          title: '零售业',
          describe:
            '说明说明，详细介绍说明，后期文字需要替换这是随便填写的文字数据，仅供查看显示字数据，仅供查看显示'
        },
        {
          title: '零售业',
          describe:
            '说明说明，详细介绍说明，后期文字需要替换这是随便填写的文字数据，仅供查看显示字数据，仅供查看显示'
        },
        {
          title: '零售业',
          describe:
            '说明说明，详细介绍说明，后期文字需要替换这是随便填写的文字数据，仅供查看显示字数据，仅供查看显示'
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
      } else if (pageScrollTop > advantageTop || isPageBottom) {
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
  background: transparent url('~assets/images/solution/head-img.png') no-repeat
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

// 热门解决方案
.schemes-hot_solution {
  padding: 80px 0 40px;
  .schemes-hot_solution-item {
    position: relative;
    width: 226px;
    margin-top: 54px;
    background-color: #f8f8f8;
  }
  .learn-more {
    position: absolute;
    left: 50%;
    bottom: -40px;
    width: 100%;
    transform: translate(-50%, -50%);
  }
}
// 全部解决方案
.schemes-classify_solution {
  padding-top: 80px;
  .tabs-nav {
    margin: 50px 0 40px;
    li {
      display: inline-block;
      padding: 8px 19px;
      margin: 0 10px;
      cursor: pointer;
      &.active {
        color: #00bbc4;
        border-bottom: 2px solid #00bbc4;
      }
    }
  }
  .tabs-content .box-items {
    border: 1px solid #00bbc4;
    padding: 25px 20px 20px;
    box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.1);
  }
}

// 方案架构与咨询
.schemes-framework {
  margin-top: 80px;
  height: 363px;
  background: url('~assets/images/solution/bg-framework.png') no-repeat center
    center;
  background-size: cover;
  position: relative;
  .contact-us {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.custom_btn {
  padding: 7px 27px;
  color: #fff;
  background: #00bbc4;
  border: 2px solid #00bbc4;
  border-radius: 27px;
  &:hover {
    background: transparent;
    color: #00bbc4;
    border: 2px solid #00bbc4;
  }
}
</style>
