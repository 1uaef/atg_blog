import { CodeTabs } from "F:/code/front_end/atg_blog/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "F:/code/front_end/atg_blog/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "F:/code/front_end/atg_blog/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
