<template>
  <div>
    <aside id="headImg" class="text-white pt-12 pb-10 index-header">
      <div class="bg-img overlay" />
    </aside>
    <page-layout :anchor-nav-list="anchorNavList" :header-img-height="headerImgHeight">
      <!-- 特色服务 -->
      <template slot="one">
        <div class="product-service container">
          <div class="row text-center">
            <div class="col-lg-12">
              <section-title font-text="特色服务" />
            </div>
            <div class="col-lg-12">
              <div class="row gap-y text-center mt-2">
                <div
                  v-for="(item, index) in prodtctServiceList"
                  :key="index"
                  class="col-md-4 col-sm-12 col-xs-12 mt-4"
                >
                  <div class="product-service_img_effect">
                    <div class="animate-grow my-4">
                      <img :src="item.imgUrls" alt />
                    </div>
                    <div class="overlay">
                      <h2 class="my-4 text-24px color-black">{{ item.title }}</h2>
                      <p class="text-16px" style="line-height: 1.8;" v-html="item.describe"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- 定制化服务 -->
      <template slot="two">
        <div class="product-custom">
          <div class="container">
            <div class="row text-center">
              <div class="col-lg-12 mb-4">
                <div class="mb-4">
                  <section-title font-text="产品定制化服务" />
                </div>
                <div class="text-20px py-4">
                  <p class="lead mb-2">以精准的市场洞察力，真诚服务，专业设计，开启创新价值的定制化产品体验</p>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="row">
                  <div
                    v-for="(item, index) in processList"
                    :key="index"
                    class="col-lg-2 col-md-3 col-sm-4 col-xs-12 mt-4"
                  >
                    <div class="animate-hover-shadow d-flex">
                      <img :src="item" alt />
                      <img
                        v-if="index < processList.length - 1"
                        src="~/assets/images/product/process_arrow.svg"
                        alt
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- 我们在做什么 -->
      <template slot="three">
        <div class="product-what-doing text-center">
          <div class="bg-service d-inline-block">
            <img src="~assets/images/product/doing-bg.png" alt width="100%" />
            <div class="explain-service col-lg-12 text-right">
              <section-title font-text="我们在做什么" />
              <p class="py-4 text-20px">我们是一家互联网方案提供商，致力于互联网技术开发提供营销新模式</p>
              <div class="text-20px">
                <div class="d-flex justify-content-end align-items-center py-2">
                  <p class="px-3">造互联网的「海底捞」</p>
                  <img src="~assets/images/product/doing_01.svg" alt />
                </div>
                <div class="d-flex justify-content-end align-items-center py-2">
                  <p class="px-3">用创意去描绘和实现梦想的世界</p>
                  <img src="~assets/images/product/doing_02.svg" alt />
                </div>
                <div class="d-flex justify-content-end align-items-center py-2">
                  <p class="px-3">用专业和热情去搭建最好的平台</p>
                  <img src="~assets/images/product/doing_03.svg" alt />
                </div>
                <div class="d-flex justify-content-end align-items-center py-2">
                  <p class="px-3">用时间去证明未来并不遥远</p>
                  <img src="~assets/images/product/doing_04.svg" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!-- 我们的客户怎么说 -->
      <template slot="four">
        <div class="product-user-say">
          <div class="container product-user-say-content">
            <div class="text-center pt-3">
              <section-title font-text="我们的客户怎么说" font-color="#fff" />
              <p
                class="pt-4 text-20px"
                style="color: rgba(255, 255, 255, 0.6);"
              >我们的产品和优质的服务得到无数的好评，来看看我们的客户对我们的评价吧</p>
              <div class="client-say">
                <div class="col-lg-12 text-20px">
                  <div class="row">
                    <div
                      v-for="(item, index) in interviewerList"
                      :key="index"
                      class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-4"
                    >
                      <div class="animate-hover-shadow">
                        <div class="interview-content text-left text-16px">
                          <p class="something">{{ item.saySomething }}</p>
                          <div class="color-primary text-right mt-3">—— {{ item.name }}</div>
                        </div>
                        <div class="text-center" style="margin-top: 45px;">
                          <img class="interviewer-avator" :src="item.avator" alt width="100%" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </page-layout>
  </div>
</template>

<script>
import PageLayout from '~/components/PageLayout'
import SectionTitle from '~/components/SectionTitle'
export default {
  components: {
    PageLayout,
    SectionTitle
  },
  data() {
    return {
      headerImgHeight: 0,
      anchorNavList: [
        { title: '特色服务' },
        { title: '产品定制化服务' },
        { title: '我们在做什么' },
        { title: '我们的客户怎么说' }
      ],
      processList: [
        require('~/assets/images/product/process_01.svg'),
        require('~/assets/images/product/process_02.svg'),
        require('~/assets/images/product/process_03.svg'),
        require('~/assets/images/product/process_04.svg'),
        require('~/assets/images/product/process_05.svg'),
        require('~/assets/images/product/process_06.svg')
      ],
      prodtctServiceList: [
        {
          imgUrls: require('~/assets/images/product/service_01.svg'),
          title: '网站开发',
          describe: `专业于网页设计、网页编程、网站功能、<br />
            网站优化技术、网站编辑、域名注册查询、<br />
            网站建设、网站推广、网站评估、<br />
            网站运营、网站整体优化、网站改版`
        },
        {
          imgUrls: require('~/assets/images/product/service_02.svg'),
          title: '公众号平台',
          describe: `我们有着成熟的微信公众号开发平台、<br />
            专业的设计团队和开发团队、<br />
            已为多家企业制作并开发微信公众平台、<br />
            深受客户的好评`
        },
        {
          imgUrls: require('~/assets/images/product/service_03.svg'),
          title: '网站运营托管',
          describe: `我们还接受各类网站、平台、<br />
            微信公众号的运营托管、<br />
            有专业的运营团队，实现策划运营一条龙服务`
        }
      ],
      interviewerList: [
        {
          saySomething: `我们的产品是和优质的服务得到无数的好评，我们的产品是和优质的服务得到无数的好评`,
          name: '张先生-企业高管',
          avator: require('~/assets/images/index/partner_01.png')
        },
        {
          saySomething: `我们的产品是和优质的服务得到无数的好评，我们的产品是和优质的服务得到无数的好评`,
          name: '张先生-企业高管',
          avator: require('~/assets/images/index/partner_01.png')
        },
        {
          saySomething: `我们的产品是和优质的服务得到无数的好评，我们的产品是和优质的服务得到无数的好评`,
          name: '张先生-企业高管',
          avator: require('~/assets/images/index/partner_01.png')
        }
      ]
    }
  },
  mounted() {
    this.headerImgHeight = document.querySelector('#headImg').offsetHeight
  },
  destroyed() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
// 首页图
.index-header {
  height: 484px;
  background: transparent url('~assets/images/product/big-img.png') no-repeat
    center center;
  background-size: cover;
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

// 定制化服务
.product-custom {
  background-color: #f9f9f9;
  padding: 80px 0;
}

// 特色服务
.product-service {
  padding: 80px 0;
}

// 我们在做什么
.product-what-doing {
  padding-top: 80px;
  .bg-service {
    position: relative;
    .explain-service {
      position: absolute;
      top: 55px;
      right: 70px;
    }
  }
}

// 我们的客户怎么说
.product-user-say {
  margin-top: 80px;
  height: 555px;
  background: transparent url('~assets/images/product/client-say-bg.png')
    no-repeat center center;
  background-size: cover;
  .product-user-say-content {
    position: relative;
    top: 40px;
    .client-say {
      padding-top: 40px;
    }
    .interview-content {
      position: relative;
      width: 326px;
      height: 151px;
      padding: 20px;
      background-color: #fff;
      &::after {
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border-width: 16px 20px;
        border-style: solid;
        border-color: #fff transparent transparent;
        bottom: -30px;
        left: 50%;
        margin-left: -20px;
      }
      .something {
        // height: 70px;
        // display: -webkit-box;
        // -webkit-box-orient: vertical;
        // -webkit-line-clamp: 3;
        // overflow: hidden;
        // text-overflow: ellipsis;
      }
    }
    .interviewer-avator {
      width: 72px;
      height: 72px;
      border: 2px solid #fff;
      border-radius: 72px;
    }
  }
}
</style>
