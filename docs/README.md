# 快速开始

### 安装组件库
```bash
yarn add firefox-ui
```

### 引用组件库
> 在main.js中引用组件库
```javascript
// 全部引入
import 'firefox-ui/dist/css/index.css'
import MUI from 'firefox-ui';

Vue.use(MUI);

// 按需引入
import 'firefox/dist/css/card.css';
import { Card, Toast } from 'firefox-ui';
Vue.use(Card)
Vue.use(Toast)
```
 