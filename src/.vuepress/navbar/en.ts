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
          }
        ]
      },
      {
        text: 'Plugins',
        children: [
          {
            text: 'Advanced Access Manager',
            link: '/plugin/advanced-access-manager/'
          }
        ]
      },
      {
        text: 'Advanced Topics',
        children: [
          {
            text: 'Hooks Reference',
            link: '/advanced/hooks/'
          },
          {
            text: 'RESTful API Reference',
            link: '/advanced/restful/'
          }
        ]
      },
    ]
  }
]);
