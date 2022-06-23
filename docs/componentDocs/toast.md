# Toast
toast提示组件

### 代码
```html
<template>
  <button @click="showToast">点我提示</button>
</template>
<script>
export default {
  name: 'app',
  methods: {
    showToast() {
      this.$toast('提示提示提示', 2000)
    }
  }
}
</script>
```

### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | --- | --- | --- | --- |
| message | 提示内容 | String | false | - |
| delay | 延时消失时间 | Number | false | - |