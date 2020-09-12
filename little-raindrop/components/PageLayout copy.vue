<template>
  <div>
    <!-- 这是测试插槽的组件 -->
    <!-- <div id="anchorBar" class="anchor-catalog" :class="isFixedAnchorNav ? 'fixed-anchor-bar' : ''">
      <div class="container">
        <a
          v-for="(item, index) in anchorNavList"
          :key="index"
          class="anchor-title"
          :href="'#floor-' + (index + 1)"
          :class="curTab === transferNumberToEnglish(index + 1) ? 'anchor-active' : ''"
        >
          {{ item.title }}
          <slot name="authorNav"></slot>
        </a>
      </div>
    </div>
    <section v-for="i in anchorNavList.length" :key="i">
      <a :id="'floor-' + i" :name="'floor-' + i" class="anchor-content">
        <slot :name="transferNumberToEnglish(i)"></slot>
      </a>
    </section>-->
    <!-- 这是测试的插槽的组件 -->
    <div id="anchorBar" class="bg-color-fbfbfb" :class="isFixedAnchorNav ? 'fixed-top' : ''">
      <div class="container">
        <client-only>
          <nav id="navbar-example2" class="navbar navbar-light">
            <ul class="nav nav-pills">
              <li v-for="(item, index) in anchorNavList" :key="index" class="nav-item">
                <a class="nav-link" :href="'#floor-' + (index + 1)">{{ item.title }}</a>
              </li>
            </ul>
          </nav>
        </client-only>
      </div>
    </div>
    <div id="scrollspy">
      <section v-for="i in anchorNavList.length" :key="i">
        <a :id="'floor-' + i" :name="'floor-' + i" class="anchor-content">
          <slot :name="transferNumberToEnglish(i)"></slot>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  props: {
    headerImgHeight: {
      type: Number,
      default: 0
    },
    anchorNavList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      curTab: '',
      headerNavHeight: 0, // 顶部导航条的高度
      anchorNavHeight: 0, // 锚点导航的高度
      isFixedAnchorNav: false,
      sectionOffsetTop: []
    }
  },
  mounted() {
    this.headerNavHeight = this.$store.getters.headerNavHeight
    this.anchorNavHeight = document.querySelector('#anchorBar').offsetHeight
    window.$('body').scrollspy({
      target: '#navbar-example2',
      offset: 0
      // offset: this.anchorNavHeight
    })
    window.addEventListener('scroll', this.handleScrollAnchor)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScrollAnchor)
  },
  methods: {
    initSectionOffsetTop() {
      for (let i = 1, len = this.anchorNavList.length; i <= len; i++) {
        // console.log('i', document.querySelector('#floor-' + i).offsetTop)
        this.sectionOffsetTop.push(
          document.querySelector('#floor-' + i).offsetTop -
            this.$store.getters.headerNavHeight
        )
      }
      console.log('this.sectionOffsetTop', this.sectionOffsetTop)
    },
    handleScrollAnchor() {
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      const pageScrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.documentElement.scrollTop
      // console.log('pageScrollTop', pageScrollTop)
      // console.log('headerImgHeight', this.headerImgHeight)
      if (pageScrollTop >= this.headerImgHeight + this.headerNavHeight) {
        this.isFixedAnchorNav = true
      } else {
        this.isFixedAnchorNav = false
      }
    },
    transferNumberToEnglish(id) {
      const typeMap = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten'
      }[id]
      return typeMap || '-'
    }
  }
}
</script>
<style lang="scss" scoped>
#navbar-example2 {
  padding: 0;
  .nav-pills .nav-item {
    position: relative;
    font-size: 16px;
    margin-left: 52px;
    // border-bottom: 1px solid red;
    .nav-link {
      padding: 16px 0;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 0;
        height: 2px;
        // background: #4285f4;
        transition: all 0.3s;
      }
    }
  }
  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    color: #00bbc4;
    border-radius: 0;
    background-color: transparent;
    // border-bottom: 1px solid red;
    &::after {
      width: 100%;
      left: 0;
      right: 0;
      border-bottom: 3px solid #00bbc4;
    }
  }
}
</style>