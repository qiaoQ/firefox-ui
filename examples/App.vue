<template>
  <div id="app">
    <Card 
    :width="250"
    imgSrc="https://vfiles.gtimg.cn/wupload/xy/db_private_domain/home-banner/Pb15QqjD.png"
    summary="这是一段概要"
    :imgHeight="200"
    >
    <template v-slot:footer>
      <div class="card-footer">
        这里是footer
      </div>
    </template>
    </Card>
    <button @click="showToast">点我提示</button>
    <Toast :isShow="true"/>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    showToast() {
      this.$toast('提示提示提示')
    }
  }
}
</script>

<style>
.footer{
  padding: 8px;
  text-align: left;
  font-size: 16px;
}
</style>
