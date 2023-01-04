<template>
  <div class="toast" v-if="isShow">
    {{ message }}
  </div>
</template>
<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '请填写内容'
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    show(content) {
      this.message = content
      this.isShow = true;
    },

    hide() {
      this.isShow = false;
    }
  }
}
</script>