import { defineClientConfig } from "@vuepress/client";
import { h } from "vue";

import FontIcon from "/Volumes/Work/AAM/aamportal/docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import YouTube from "/Volumes/Work/AAM/aamportal/docs/node_modules/vuepress-plugin-components/lib/client/components/YouTube.js";
import BackToTop from "/Volumes/Work/AAM/aamportal/docs/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("FontIcon", FontIcon);
    app.component("YouTube", YouTube);
    
  },
  setup: () => {
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});
