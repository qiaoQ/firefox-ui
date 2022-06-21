## firefox-ui 组件库

### 快速开始

#### 1、安装组件库
```bash
yarn add firefox-ui
```

#### 2、引用组件库
```javascript
// 全部引入
import 'firefox-ui/dist/css/index.css'
import MUI from 'firefox-ui';

Vue.use(MUI);

// 按需引入
import 'firefox/dist/css/card.css';
import { Card } from 'firefox-ui';
Vue.use(Card)
```
