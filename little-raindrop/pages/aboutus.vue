<template>
  <div>
    <aside id="headImg" class="text-white pt-12 pb-10 index-header">
      <div class="bg-img overlay" />
    </aside>
    <div id="anchorBar" class="anchor-catalog" :class="searchBarFixed ? 'fixed-anchor-bar' : ''">
      <div class="container">
        <a
          id="subIntro"
          class="anchor-title"
          href="#floor-1"
          :class="curTab === 'one' ? 'anchor-active' : ''"
        >公司简介</a>
        <a
          id="subService"
          class="anchor-title"
          href="#floor-2"
          :class="curTab === 'two' ? 'anchor-active' : ''"
        >愿景与使命</a>
        <a
          id="subAdvantage"
          class="anchor-title"
          href="#floor-3"
          :class="curTab === 'three' ? 'anchor-active' : ''"
        >发展历程</a>
        <a
          id="subAdvantage"
          class="anchor-title"
          href="#floor-4"
          :class="curTab === 'four' ? 'anchor-active' : ''"
        >业务架构</a>
        <a
          id="subParenter"
          class="anchor-title"
          href="#floor-5"
          :class="curTab === 'five' ? 'anchor-active' : ''"
        >管理团队</a>
        <a
          id="subParenter"
          class="anchor-title"
          href="#floor-6"
          :class="curTab === 'six' ? 'anchor-active' : ''"
        >办公地点</a>
      </div>
    </div>
    <!-- 公司简介 -->
    <a id="floor-1" name="floor-1" class="anchor-content">
      <section>
        <div class="about-us-intro container">
          <div class="row text-center">
            <div class="col-lg-12">
              <div class="mb-4">
                <section-title font-text="公司简介" />
              </div>
              <div class="text-20px pt-4 pb-3">小雨滴以技术丰富互联网用户的生活</div>
              <p class="text-16px lead">
                小雨滴是一家以互联网为基础的平台公司，通过高效广告平台，
                <br />协助品牌和市场营销者触达以亿计的中国消费者。通过金融科技及企业服务，促进合作伙伴业务发展，
                <br />助力实现数字化升级。我们大力投资与人才队伍和推送科技创新，积极参与互联网行业协同发展。
                <br />通过技术丰富互联网用户的工作与生活，助力企业数字化升级，我们的使命是“用户为本&nbsp;互赢共进”
              </p>
            </div>
          </div>
        </div>
      </section>
    </a>
    <!-- 愿景与使命 -->
    <a id="floor-2" name="floor-2" class="anchor-content">
      <section>
        <div class="about-us_vision-mission">
          <div class="product-item d-flex justify-content-center">
            <img src="~/assets/images/aboutUs/vision-mission.png" alt />
            <div class="describe-content">
              <div class="describe-content_position describe-left">
                <div class="text-24px color-black font-weight-bolder">愿景及使命</div>
                <p class="text-20px pt-4 pb-2">技术创新，用心服务</p>
                <p class="text-16px lead">
                  富强，民主，文明，和谐，自由，平等，公正，法制，爱国，敬业，诚信，友善
                  富强，民主，文明，和谐，自由，平等，公正，法制，爱国，敬业，诚信，友善
                  富强，民主，文明，和谐，自由，平等，公正，法制，爱国，敬业，诚信，友善
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </a>
    <!-- 发展历程 -->
    <a id="floor-3" name="floor-3" class="anchor-content">
      <section>
        <div class="about-us-history_one">
          <div class="detail-history-wrap container position-relative">
            <div class="detail-history-content text-center">
              <section-title font-text="发展历程" font-color="#fff" />
              <div class="timeline-content d-flex justify-content-center">
                <div
                  v-for="(item, index) in developmentListOne"
                  :key="index"
                  class="timeline-horlzontal"
                >
                  <div
                    class="text-18px lead"
                    :style="{
                      color: index === 0 ? '#fff' : 'rgba(255, 255, 255, 0.6',
                    }"
                  >{{ item }}</div>
                  <div class="timeline-hor-item">
                    <div v-if="index < developmentListOne.length - 1" class="timeline-hor__tail"></div>
                    <div class="timeline-hor__icon" :class="index === 0 ? 'active' : 'actived'"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="about-us-history_two container">
          <div v-for="(item, index) in developmentListTwo" :key="index" class="box">
            <img
              :src="
                index === 0
                  ? require('~/assets/images/aboutUs/tips-active.svg')
                  : require('~/assets/images/aboutUs/tips-actived.svg')
              "
              alt
            />
            <span class="year-number text-20px">{{ item }}</span>
          </div>
        </div>
      </section>
      <section>
        <div class="about-us-history_three container">
          <div
            v-for="(item, index) in developmentListThree"
            :key="index"
            class="outter-wrap d-flex"
          >
            <div class="left-month px-4 text-28px color-primary">{{ item.month }}</div>
            <div class="timeline-ver-item">
              <div v-if="index < developmentListThree.length - 1" class="timeline-ver__tail"></div>
              <div class="timeline-ver__icon"></div>
            </div>
            <p class="right-content text-18px color-black">{{ item.achieve }}</p>
          </div>
        </div>
      </section>
    </a>
    <!-- 业务架构 -->
    <a id="floor-4" name="floor-4" class="anchor-content">
      <section>
        <div class="about-us-business_structure">
          <div class="text-center">
            <SectionTitle font-text="业务架构" />
            <img class="mt-4" src="~/assets/images/aboutUs/business-structure.svg" alt />
          </div>
        </div>
      </section>
    </a>
    <!-- 管理团队 -->
    <a id="floor-5" name="floor-5" class="anchor-content">
      <section>
        <div class="about-us-team_member container">
          <div class="member-title text-center">
            <SectionTitle font-text="管理团队" />
          </div>
          <div class="col-lg-12">
            <div class="row gap-y text-center">
              <div
                v-for="(item, index) in hotSolutionList"
                :key="index"
                class="col-md-3 col-sm-6 col-xs-12 p-0"
              >
                <div class="member-item d-flex">
                  <img :src="item.imgUrls" alt />
                  <div class="pl-3 text-left">
                    <div class="text-20px pt-2 color-primary">{{ item.title }}</div>
                    <div class="text-14px pt-2 pb-1 color-black">{{ item.job }}</div>
                    <div class="text-14px" style="color: #5f6464;">{{ item.describe }}</div>
                  </div>
                  <span class="square-box"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </a>
    <!-- 办公地点 -->
    <a id="floor-6" name="floor-6" class="anchor-content">
      <section>
        <div class="about-us-office_address container">
          <div class="address-title text-center">
            <SectionTitle font-text="办公地点" />
          </div>
          <div class="address-map container">
            <div class="row h-100">
              <div class="col-lg-8 col-md-6 col-sm-12 col-xs-12 p-0">
                <client-only>
                  <VueBaiduMap />
                </client-only>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div class="address-detail">
                  <div class="d-flex text-16px color-black py-2">
                    <img
                      src="~/assets/images/aboutUs/icon-address.svg"
                      alt
                      width="25px"
                      height="25px"
                    />
                    <div class="pl-2">深圳市罗湖区翠竹路石化工业区1栋1-4楼</div>
                  </div>
                  <div class="d-flex text-16px color-black py-2">
                    <img src="~/assets/images/aboutUs/icon-tel.svg" alt width="25px" height="25px" />
                    <div class="pl-2">86 - 755 - 25607666 25509955</div>
                  </div>
                  <div class="d-flex text-16px color-black py-2">
                    <img
                      src="~/assets/images/aboutUs/icon-email.svg"
                      alt
                      width="25px"
                      height="25px"
                    />
                    <div class="pl-2">86 - 755 - 25607666 25509955</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </a>
  </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle'
import VueBaiduMap from '~/components/VueBaiduMap'

export default {
  components: {
    SectionTitle,
    VueBaiduMap
  },
  data() {
    return {
      headerNavHeight: 0,
      searchBarFixed: false,
      curTab: '',
      developmentListOne: ['现在', '2019', '2018', '2017', '2016'],
      developmentListTwo: ['2020年', '2019年', '2018年', '2017年', '2016年'],
      developmentListThree: [
        {
          month: '7月',
          achieve: '真诚、团结、创新、高效、感恩，合力耕作，共创美好明天！'
        },
        {
          month: '6月',
          achieve:
            '富强、民主、文明、和谐、真诚、团结、创新、高效、感恩，合力耕作，共创美好明天！'
        },
        {
          month: '5月',
          achieve:
            '富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善、真诚、团结、创新、高效、感恩，合力耕作，共创美好明天！'
        },
        {
          month: '4月',
          achieve:
            '富强、民主、文明、和谐、富强、民主、文明、和谐、自由、平等、公正、法治、真诚、团结、创新、高效、感恩，合力耕作，共创美好明天！'
        },
        {
          month: '3月',
          achieve:
            '自由、平等、公正、法治、真诚、团结、创新、高效、感恩，合力耕作，共创美好明天！'
        }
      ],
      hotSolutionList: [
        {
          imgUrls: require('~/assets/images/aboutUs/member_01.png'),
          title: '张三',
          job: '首席执行官',
          describe: '首席执行官CTO'
        },
        {
          imgUrls: require('~/assets/images/aboutUs/member_02.png'),
          title: '李四',
          job: '螺石部',
          describe: '首席执行官'
        },
        {
          imgUrls: require('~/assets/images/aboutUs/member_03.png'),
          title: '王五',
          job: '研发部',
          describe: '首席执行官'
        },
        {
          imgUrls: require('~/assets/images/aboutUs/member_04.png'),
          title: '赵六',
          job: '创始人',
          describe: '首席执行官'
        },
        {
          imgUrls: require('~/assets/images/aboutUs/member_05.png'),
          title: '张三',
          job: '首席执行官',
          describe: '首席执行官CTO'
        },
        {
          imgUrls: require('~/assets/images/aboutUs/member_06.png'),
          title: '李四',
          job: '螺石部',
          describe: '首席执行官'
        },
        {
          imgUrls: require('~/assets/images/aboutUs/member_07.png'),
          title: '王五',
          job: '研发部',
          describe: '首席执行官'
        },
        {
          imgUrls: require('~/assets/images/aboutUs/member_08.png'),
          title: '赵六',
          job: '创始人',
          describe: '首席执行官'
        },
        {
          imgUrls: require('~/assets/images/aboutUs/member_09.png'),
          title: '张三',
          job: '首席执行官',
          describe: '首席执行官CTO'
        },
        {
          imgUrls: require('~/assets/images/aboutUs/member_10.png'),
          title: '李四',
          job: '螺石部',
          describe: '首席执行官'
        },
        {
          imgUrls: require('~/assets/images/aboutUs/member_11.png'),
          title: '王五',
          job: '研发部',
          describe: '首席执行官'
        },
        {
          imgUrls: require('~/assets/images/aboutUs/member_12.png'),
          title: '赵六',
          job: '创始人',
          describe: '首席执行官'
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
      const isPageBottom = pageScrollTop + windowHeight === scrollHeight // 滚动条到底部的条件
      const anchorBarTop = document.querySelector('#anchorBar').offsetTop
      const headImgTop =
        document.querySelector('#headImg').offsetHeight + this.headerNavHeight // 76 顶部导航的高度
      const introTop =
        document.querySelector('#floor-1').offsetTop - this.headerNavHeight // 76 顶部导航的高度
      const serviceTop =
        document.querySelector('#floor-2').offsetTop - this.headerNavHeight
      const advantageTop =
        document.querySelector('#floor-3').offsetTop - this.headerNavHeight
      const caseTop =
        document.querySelector('#floor-4').offsetTop - this.headerNavHeight
      const parenterTop =
        document.querySelector('#floor-5').offsetTop - this.headerNavHeight
      const officeTop =
        document.querySelector('#floor-6').offsetTop - this.headerNavHeight
      if (pageScrollTop > anchorBarTop && pageScrollTop >= headImgTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
      if (pageScrollTop > anchorBarTop) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
      if (
        introTop <= pageScrollTop &&
        pageScrollTop < serviceTop &&
        !isPageBottom
      ) {
        this.curTab = 'one'
      } else if (
        serviceTop <= pageScrollTop &&
        pageScrollTop < advantageTop &&
        !isPageBottom
      ) {
        this.curTab = 'two'
      } else if (
        advantageTop <= pageScrollTop &&
        pageScrollTop < caseTop &&
        !isPageBottom
      ) {
        this.curTab = 'three'
      } else if (
        caseTop <= pageScrollTop &&
        pageScrollTop < parenterTop &&
        !isPageBottom
      ) {
        this.curTab = 'four'
      } else if (
        parenterTop <= pageScrollTop &&
        pageScrollTop < officeTop &&
        !isPageBottom
      ) {
        this.curTab = 'five'
      } else if (pageScrollTop > officeTop) {
        this.curTab = 'six'
      } else {
        this.curTab = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 首页图
.index-header {
  height: 484px;
  background: transparent url('~assets/images/aboutUs/head-img.png') no-repeat
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

// 公司简介
.about-us-intro {
  padding-top: 80px;
}
// 愿景与使命
.about-us_vision-mission {
  padding-top: 80px;
  .product-item {
    position: relative;
    &:nth-child(odd) {
      background-color: #fff;
    }
    &:nth-child(even) {
      background-color: #f9f9f9;
    }
    .describe-content {
      position: relative;
      width: 600px;
    }
    .describe-content_position {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
    }
    .describe-left {
      padding-left: 120px;
    }
  }
}

// 发展历程
.about-us-history_one {
  margin-top: 80px;
  height: 300px;
  background: transparent url('~assets/images/aboutUs/development-history.png')
    no-repeat center center;
  background-size: cover;
  .detail-history-wrap {
    height: 300px;
    .detail-history-content {
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translate(0, -50%);
    }

    .timeline-content {
      margin: 32px 0 0 110px;
      .timeline-horlzontal {
        width: 144px;
        position: relative;
        text-align: left;
      }
      .timeline-hor-item {
        position: relative;
        padding: 0 0 20px;
        left: 10px;
        .timeline-hor__tail {
          position: absolute;
          top: 17px;
          bottom: 1px;
          left: 20px;
          border-left: 124px solid rgba(255, 255, 255, 0.8);
        }
        .timeline-hor__icon {
          position: absolute;
          left: 0;
          top: 8px;
          width: 20px;
          height: 20px;
          font-size: 0;
          text-align: center;
          vertical-align: middle;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.6);
          box-sizing: border-box;
          z-index: 1;
          &.actived {
            background-color: rgba(255, 255, 255, 0.6);
          }
          &.active {
            background-color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
}

.about-us-history_two {
  padding-top: 54px;
  .box {
    position: relative;
    display: inline-block;
    margin-right: 43px;
    .year-number {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%);
    }
    &:first-child {
      color: #333;
    }
    &:not(:first-child) {
      color: #969696;
    }
  }
}
.about-us-history_three {
  padding: 68px 48px 0;
  .outter-wrap {
    height: 120px;
  }
  .left-month {
    width: 120px;
  }
  .right-content {
    width: 80%;
    flex-shrink: 1;
    padding: 0 62px;
  }
  .timeline-ver-item {
    position: relative;
    padding: 0 0 20px;
    .timeline-ver__tail {
      position: absolute;
      top: 20px;
      bottom: -27px;
      left: 10px;
      border-left: 2px solid #00bbc4;
    }
    .timeline-ver__icon {
      position: absolute;
      left: 2px;
      top: 10px;
      width: 18px;
      height: 18px;
      font-size: 0;
      text-align: center;
      vertical-align: middle;
      border-radius: 50%;
      border: 2px solid #00bbc4;
      background: #fff;
      // box-sizing: border-box;
      z-index: 1;
    }
  }
}

// 业务架构
.about-us-business_structure {
  background-color: #f9f9f9;
  padding: 80px 0;
}

// 管理团队
.about-us-team_member {
  padding-top: 80px;
  .member-title {
    padding-bottom: 54px;
  }
  .member-item {
    position: relative;
    padding-bottom: 50px;
    background-color: #f9f9f9;
    .square-box {
      position: absolute;
      left: 104px;
      bottom: 38px;
      z-index: 2;
      width: 24px;
      height: 24px;
      background-color: #00bbc4;
    }
  }
}
// 办公地点
.about-us-office_address {
  padding: 80px 0 54px;
  .address-title {
    padding-bottom: 54px;
  }
  .address-map {
    position: relative;
    background-color: #f9f9f9;
    height: 390px;
    overflow: hidden;
  }
  .address-detail {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>
