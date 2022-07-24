import ybButton from './yb-buttom/index.vue';
import ybHelloWorld from './yb-hello-world/index.vue'

const components = {
  ybButton,
  ybHelloWorld,
};

function install(Vue) {
  const keys = Object.keys(components);
  keys.forEach((name) => {
    const component = components[name];
    Vue.component(component.name || name, component);
  });
}

export default {
  install,
  ...components,
};