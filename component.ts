// component.ts 用于汇总所有组件
import type { Plugin } from "vue";
import { ybButtom } from "./packages/components/yb-buttom";

export default [ybButtom] as Plugin[];

// index.ts 注册组件并导出
import type { App, Plugin } from "vue";

import Components from "./component";

const INSTALLED_KEY = Symbol("INSTALLED_KEY");

export const Installer = (components: Plugin[] = []) => {
  const install = (app: App, options) => {
    if (app[INSTALLED_KEY]) return;

    app[INSTALLED_KEY] = true;
    components.forEach((c) => app.use(c));
  };

  return {
    install,
  };
};

export default Installer([...Components]);
