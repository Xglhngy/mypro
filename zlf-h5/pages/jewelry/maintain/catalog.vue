<template>
  <div class="container-750px catalog-wrap">
    <nuxt-link :to="{path: '/jewelry/maintain/detail', query: {type: 'afterSale'}}"></nuxt-link>
    <div
      v-for="(item, index) in catalogList"
      :key="index"
      class="catalog-item flex justify-between items-center"
      @click="handleDetail(index)"
    >
      <p class="text-28px color-333 break-all">{{ item.title}}</p>
      <img class="arrow-right" src="~/assets/images/jewelry/maintain/arrow_right.png" alt />
    </div>
  </div>
</template>

<script>
// import { afterSale, metal, gem } from '~/utils/jewelryMaintainData/catalog'
import { afterSale, metal, gem } from '~/assets/js/jewelryMaintainData/catalog'
export default {
  data() {
    return {
      pageTile: '',
      catalogType: this.$route.query.type,
      catalogList: afterSale
    }
  },
  created() {
    // const { type } = this.$route.query
    this.pageTile = this.transferPageTitle(this.catalogType)
    if (this.catalogType === 'afterSale') {
      this.catalogList = afterSale
    }
    if (this.catalogType === 'metal') {
      this.catalogList = metal
    }
    if (this.catalogType === 'gem') {
      this.catalogList = gem
    }
  },
  methods: {
    handleDetail(index) {
      this.$router.push({
        path: '/jewelry/maintain/detail',
        query: {
          type: this.catalogType,
          id: index
        }
      })
    },
    transferPageTitle(type) {
      const typeMap = {
        afterSale: '常见售后知识',
        metal: '贵金属类保养',
        gem: '宝石类保养'
      }[type]
      return typeMap || '周六福'
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
.catalog-wrap {
  min-height: 100vh;
  background-color: #f6f6f6;
  .catalog-item {
    padding: 36px 40px;
    line-height: 1.6;
    border-bottom: 1px solid rgba(229, 229, 229, 0.8);
    .arrow-right {
      width: 10px;
      height: 20px;
      margin-left: 25px;
    }
  }
}
</style>
