<template>
  <div class="card" :style="width? {width: width + 'px'} : {}">
    <div class="card-img" v-if="imgSrc" :style="imgHeight? {height: imgHeight + 'px'} : {}">
      <img :src="imgSrc" alt="img">
    </div>
    <div v-if="summary" class="card-summary">
      {{ summary }}
    </div>
    <div v-else class="card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    // 卡片宽度
    width: {
      type: Number,
      default: () => 0
    },
    // 卡片图片路径
    imgSrc: {
      type: String,
      default: '',
    },
    // 卡片高度
    imgHeight: {
      type: Number,
      default: 0,
    },
    // 卡片概要
    summary: {
      type: String,
      default: '',
    }
  }
}
</script>