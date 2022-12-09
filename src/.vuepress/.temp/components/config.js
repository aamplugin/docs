import { defineClientConfig } from "@vuepress/client";
import { h } from "vue";

import { useStyleTag } from "/Volumes/Work/AAM/aamportal/docs/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import FontIcon from "/Volumes/Work/AAM/aamportal/docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import YouTube from "/Volumes/Work/AAM/aamportal/docs/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import BackToTop from "/Volumes/Work/AAM/aamportal/docs/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("FontIcon", FontIcon);
    app.component("YouTube", YouTube);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
