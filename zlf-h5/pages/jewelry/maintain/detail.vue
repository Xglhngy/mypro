<template>
  <div class="container-750px detail-wrap">
    <div v-for="(item, index) in detailList" :key="index" class="detail-item break-all">
      <h3
        v-if="item.title"
        class="secondary-title text-30px color-333 font-semibold"
      >{{ item.title }}</h3>
      <p
        v-for="(child, idx) in item.textArr"
        :key="idx"
        :class="index === detailList.length - 1 && idx === item.textArr.length - 1 && 'last-padding_bottom'"
        class="paragraph text-28px color-333"
      >{{ child }}</p>
    </div>
  </div>
</template>

<script>
import {
  afterSaleDetail0,
  afterSaleDetail1,
  metalDetail0,
  metalDetail1,
  metalDetail2,
  metalDetail3,
  gemDetail0,
  gemDetail1,
  gemDetail2,
  gemDetail3,
  gemDetail4,
  gemDetail5,
  gemDetail6,
  gemDetail7,
  gemDetail8,
  gemDetail9,
  gemDetail10,
  gemDetail11,
  gemDetail12,
  gemDetail13,
  gemDetail14,
  gemDetail15,
  gemDetail16
} from '~/assets/js/jewelryMaintainData/detail'
export default {
  data() {
    return {
      pageTile: '',
      catalogType: this.$route.query.type,
      detailId: Number(this.$route.query.id),
      detailList: []
    }
  },
  created() {
    if (this.catalogType === 'afterSale') {
      switch (this.detailId) {
        case 0:
          this.pageTile = afterSaleDetail0.pageTile
          this.detailList = afterSaleDetail0.content
          break
        case 1:
          this.pageTile = afterSaleDetail1.pageTile
          this.detailList = afterSaleDetail1.content
          break
        default:
          this.pageTile = '周六福珠宝保养手册'
          this.detailList = []
      }
    }
    if (this.catalogType === 'metal') {
      switch (this.detailId) {
        case 0:
          this.pageTile = metalDetail0.pageTile
          this.detailList = metalDetail0.content
          break
        case 1:
          this.pageTile = metalDetail1.pageTile
          this.detailList = metalDetail1.content
          break
        case 2:
          this.pageTile = metalDetail2.pageTile
          this.detailList = metalDetail2.content
          break
        case 3:
          this.pageTile = metalDetail3.pageTile
          this.detailList = metalDetail3.content
          break
        default:
          this.pageTile = '周六福珠宝保养手册'
          this.detailList = []
      }
    }
    if (this.catalogType === 'gem') {
      switch (this.detailId) {
        case 0:
          this.pageTile = gemDetail0.pageTile
          this.detailList = gemDetail0.content
          break
        case 1:
          this.pageTile = gemDetail1.pageTile
          this.detailList = gemDetail1.content
          break
        case 2:
          this.pageTile = gemDetail2.pageTile
          this.detailList = gemDetail2.content
          break
        case 3:
          this.pageTile = gemDetail3.pageTile
          this.detailList = gemDetail3.content
          break
        case 4:
          this.pageTile = gemDetail4.pageTile
          this.detailList = gemDetail4.content
          break
        case 5:
          this.pageTile = gemDetail5.pageTile
          this.detailList = gemDetail5.content
          break
        case 6:
          this.pageTile = gemDetail6.pageTile
          this.detailList = gemDetail6.content
          break
        case 7:
          this.pageTile = gemDetail7.pageTile
          this.detailList = gemDetail7.content
          break
        case 8:
          this.pageTile = gemDetail8.pageTile
          this.detailList = gemDetail8.content
          break
        case 9:
          this.pageTile = gemDetail9.pageTile
          this.detailList = gemDetail9.content
          break
        case 10:
          this.pageTile = gemDetail10.pageTile
          this.detailList = gemDetail10.content
          break
        case 11:
          this.pageTile = gemDetail11.pageTile
          this.detailList = gemDetail11.content
          break
        case 12:
          this.pageTile = gemDetail12.pageTile
          this.detailList = gemDetail12.content
          break
        case 13:
          this.pageTile = gemDetail13.pageTile
          this.detailList = gemDetail13.content
          break
        case 14:
          this.pageTile = gemDetail14.pageTile
          this.detailList = gemDetail14.content
          break
        case 15:
          this.pageTile = gemDetail15.pageTile
          this.detailList = gemDetail15.content
          break
        case 16:
          this.pageTile = gemDetail16.pageTile
          this.detailList = gemDetail16.content
          break
        default:
          this.pageTile = '周六福珠宝保养手册'
          this.detailList = []
      }
    }
  },
  head() {
    return {
      title: this.pageTile
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-wrap {
  min-height: 100vh;
  background-color: #f6f6f6;
  padding: 0 30px 0 36px;
  // text-align: justify;
  // text-align-last: left;
  .secondary-title {
    padding-top: 66px;
  }
  .paragraph {
    padding-top: 60px;
    line-height: 1.6;
    // &:last-child {
    //   padding-bottom: 60px;
    // }
    &.last-padding_bottom {
      padding-bottom: 60px;
    }
  }
}
</style>
