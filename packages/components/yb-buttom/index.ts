
import ybButtom from "./index.vue";

import type { App } from "vue";

ybButtom.install = (app: App): void => {
  app.component(ybButtom.name, ybButtom);
};

export default ybButtom;

export const ybButtom = ybButtom;
