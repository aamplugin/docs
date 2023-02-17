import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://aamportal.com",

  author: {
    name: "Vasyl Martyniuk",
    url: "https://vasyltech.com",
  },

  darkmode: "toggle",

  pure: true,

  logo: "/assets/logo/aam-light.svg",
  logoDark: "/assets/logo/aam-dark.svg",

  repo: "aamplugin/docs",
  editLinkPattern: ":repo/edit/:branch/src/:path",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      displayFooter: false,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
  },

  plugins: {
    components: {
      components: [
        'YouTube'
      ]
    },

    photoSwipe: false,

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: false,
      codetabs: true,
      container: true,
      demo: false,
      gfm: false,
      include: false,
      mark: true,
      sub: true,
      sup: true,
      tabs: false,
      vPre: false,
      vuePlayground: false,
    }

  }
});
