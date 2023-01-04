import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Resources',
    children: [
      {
        text: 'Some Stuff To Read',
        children: [
          {
            text: 'Questions & Answers',
            link: '/question/'
          },
          {
            text: 'Courses',
            link: '/course/'
          },
          {
            text: 'Blog',
            link: '/blog/'
          }
        ]
      },
      {
        text: 'Plugins',
        children: [
          {
            text: 'Advanced Access Manager',
            link: '/plugin/advanced-access-manager/'
          },
          {
            text: 'Protected Media Files',
            link: '/plugin/protected-media-files/'
          },
          {
            text: 'Premium Complete Package',
            link: '/plugin/premium-complete-package/'
          },
          {
            text: 'Noti - Activity Notification',
            link: '/plugin/activity-notification/'
          }
        ]
      },
      {
        text: 'Advanced Topics',
        children: [
          {
            text: 'JSON Access Policy',
            link: '/advanced/access-policy/'
          },
          {
            text: 'Hooks Reference',
            link: '/advanced/hooks/'
          },
          {
            text: 'RESTful API Reference',
            link: '/advanced/restful/'
          },
          {
            text: 'CLI Reference',
            link: '/advanced/cli/'
          },
          {
            text: 'Developer SDK',
            link: '/advanced/sdk/'
          }
        ]
      },
    ]
  }
]);
