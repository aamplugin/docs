import { defineUserConfig } from "vuepress";
import { getDirname, path } from '@vuepress/utils';
import cleanUrlPlugin from './plugins/clean-url';
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({

    base: "/",

    theme,

    shouldPrefetch: false,

    alias: {
        '@theme-hope/components/HomeHero.js': path.resolve(__dirname, './components/HomeHero.vue'),
        '@theme-hope/components/PageFooter.js': path.resolve(__dirname, './components/Footer.vue'),
    },

    plugins: [
        cleanUrlPlugin({})
    ]

});
