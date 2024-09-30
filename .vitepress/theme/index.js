import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue"; // 导入 Font Awesome 图标
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas); // 导入组件
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; // 注册组件

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("FontAwesomeIcon", FontAwesomeIcon);
  },
};
