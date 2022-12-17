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
      }
    ]
  }
]);
