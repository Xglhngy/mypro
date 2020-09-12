<template>
  <div class="container">
    <section class="flex flex-col justify-center items-center">
      <!-- <img src="/img/browser-error.svg" class="error-icon" /> -->
      <h3 class="text-28px">抱歉，页面未找到</h3>
      <p class="text-26px">您访问的页面不存在，请联系周六福售后人员</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;

  position: relative;
  section {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h3 {
      padding: 30px 0;
    }
  }
}
</style>
