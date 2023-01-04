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
    prismjs: false,

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: false,
      codetabs: false,
      container: true,
      demo: false,
      echarts: false,
      flowchart: false,
      gfm: false,
      imageLazyload: true,
      imageTitle: true,
      imageSize: false,
      include: false,
      katex: false,
      mark: true,
      mermaid: false,
      sub: true,
      sup: true,
      tabs: false,
      vPre: false,
      vuePlayground: false,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ]
      },
    },
  }
});
