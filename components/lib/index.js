import Card from "./card";

const compnents = {
  Card,
}
const install = function(Vue) {
  if (install.installed) return;
  Object.keys(compnents).forEach(key => {
    Vue.component(compnents[key].name, compnents[key])
  })
}

const API = {
  install
}

export default API;
