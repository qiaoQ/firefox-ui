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
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
.footer{
  padding: 8px;
  text-align: left;
  font-size: 16px;
}
</style>
