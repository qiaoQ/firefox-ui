import Vue from 'vue';
import Toast from './src/index.vue';

// 动态组件
const toastCtor = Vue.extend(Toast)
function showToast(message, delay = 2000) {
  const toastComp = new toastCtor().$mount();

  document.body.appendChild(toastComp.$el);
  toastComp.show(message);

  setTimeout(() => {
    toastComp.hide();
    toastComp.$el.parentNode.removeChild()
  }, delay)
}

Toast.install = function(Vue) {
  Vue.prototype.$toast = showToast;
  Vue.component(Toast.name, Toast)
}

export default Toast;