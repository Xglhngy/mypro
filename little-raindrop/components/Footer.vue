<template>
  <!-- Footer -->
  <footer class="footer">
    <!-- <div class="container">
      <div class="my-4">
        <span class="text-20px">关注我们</span>
        <span class="pl-5">
          <img src="~assets/images/icons/wechat.png" alt />
        </span>
        <span class="pl-4">
          <img src="~assets/images/icons/weibo.png" alt />
        </span>
        <span class="pl-4">
          <img src="~assets/images/icons/twitter.png" alt />
        </span>
        <span class="pl-4">
          <img src="~assets/images/icons/in.png" alt />
        </span>
      </div>
    </div>-->
    <div class="container">
      <!-- <div class="col-12 p-0">
        <hr class="my-0" />
      </div>-->
      <div class="row gap-y py-5">
        <div class="col-4 col-md-4 col-xl-2">
          <div class="text-20px mb-4 mt-1">加入我们</div>
          <div class="nav flex-column">
            <a class="footer-nav footer-link" href="javascript:void(0)">校园招聘</a>
            <!-- <nuxt-link to="/" class="footer-link">客户服务</nuxt-link> -->
            <!-- <nuxt-link to="/" class="footer-link">合作洽谈</nuxt-link> -->
            <a class="footer-link" href="javascript:void(0)">合作洽谈</a>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xl-8">
          <div class="text-20px mb-4 mt-1">联系方式</div>
          <div class="nav flex-column">
            <div class="d-flex footer-link">
              <img src="~/assets/images/icon-tel.svg" alt width="25px" height="25px" />
              <div class="pl-2">0755-25177572</div>
            </div>
            <div class="d-flex footer-link">
              <img src="~/assets/images/icon-address.svg" alt width="25px" height="25px" />
              <div class="pl-2">深圳市罗湖区东晓街道独树社区翠竹北路石化工业区1栋4层3A10</div>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-6 col-xl-2 text-center">
          <div class="text-18px mb-2 mt-1">关注微信公众号</div>
          <p>
            <img src="~assets/images/qrcode.jpg" width="132px" height="132px" alt />
          </p>
        </div>
      </div>
    </div>
    <div class="container mt-1 mb-5">
      <div class="row gap-y align-items-center">
        <div class="text-14px col-12 text-center">
          CopyRight © {{ currentYear }}&nbsp; 深圳市小雨滴信息技术有限公司 All rights reserved.
          <a
            href="http://beian.miit.gov.cn/"
            target="_blank"
          >粤ICP20058011-1号</a>
        </div>

        <div class="col-12 text-center mt-2">
          <span class="police text-14px">
            <img src="~assets/images/icons/police.png" alt />
            <!-- <a href="javascript:void(0);" target="_blank">粤公网安备 44030302001449号</a> -->
            <a href="javascript:void(0);">粤公网安备 44030302001449号</a>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.footer-link {
  padding: 10px 0;
  font-size: 16px;
}
</style>
