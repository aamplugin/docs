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
            text: 'Get Started',
            link: '/get-started'
          },
          {
            text: 'How to..?',
            link: '/question/'
          },
          {
            text: 'Free E-Books',
            link: '/e-books'
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
          }
        ]
      },
      {
        text: 'Advanced Topics',
        children: [
          {
            text: 'JSON Access Policy',
            link: '/reference/access-policy/'
          },
          {
            text: 'CLI',
            link: '/reference/cli/'
          },
          {
            text: 'RESTful API',
            link: '/reference/restful-api/'
          },
          {
            text: 'Developer API',
            link: '/reference/dev-api/'
          }
        ]
      }
    ]
  }
]);
