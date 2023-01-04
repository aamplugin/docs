import { defineUserConfig } from "vuepress";
import { getDirname, path } from '@vuepress/utils';
import cleanUrlPlugin from './plugins/clean-url';
import theme from "./theme.js";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { containerPlugin } from '@vuepress/plugin-container';
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

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
        cleanUrlPlugin({}),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components')
        }),
        containerPlugin({
            type: 'question'
        }),
        containerPlugin({
            type: 'cart'
        }),
        containerPlugin({
            type: 'practice',
            locales: {
                '/': {
                    defaultInfo: 'Try It!'
                }
            }
        }),
        sitemapPlugin({
            hostname: 'https://aamportal.com'
        })
    ]

});
