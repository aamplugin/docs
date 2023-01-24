import { defineUserConfig } from "vuepress";
import { getDirname, path } from '@vuepress/utils';
import cleanUrlPlugin from './plugins/clean-url';
import theme from "./theme.js";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { containerPlugin } from '@vuepress/plugin-container';
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { pwaPlugin } from '@vuepress/plugin-pwa';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({

    base: "/",

    theme,

    shouldPrefetch: false,

    head: [
        [
            'link',
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/icon/apple-touch-icon.png' }
        ],
        [
            'link',
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icon/favicon-32x32.png' }
        ],
        [
            'link',
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icon/favicon-16x16.png' }
        ],
        [
            'link',
            { rel: 'manifest', href: '/manifest.webmanifest', crossorigin: 'use-credentials' }
        ],
        [
            'link',
            { rel: 'mask-icon', color: '#cf4139', href: '/assets/icon/safari-pinned-tab.svg' }
        ],
        [
            'meta',
            { name: 'theme-color', content: '#cf4139' }
        ],
        [
            'meta',
            { name: 'msapplication-TileColor', content: '#2b5797' }
        ],
        [
            'link',
            { rel: 'icon', href: '/favicon.ico' }
        ]
    ],

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
        }),
        pwaPlugin({
            skipWaiting: true,
            runtimeCaching: [
                {
                    handler: 'StaleWhileRevalidate',
                    urlPattern: /js|css|png|jpg|svg$/,
                    options: {
                        cacheName: 'ui-cache',
                        expiration: {
                            maxEntries: 10,
                            maxAgeSeconds: 3600
                        }
                    }
                }
            ],
            globPatterns: [
                "**\/*.{css}"
            ]
        })
    ]

});
