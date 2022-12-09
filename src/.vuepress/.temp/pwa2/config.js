import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/Volumes/Work/AAM/aamportal/docs/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "/Volumes/Work/AAM/aamportal/docs/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
