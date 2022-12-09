<script lang="ts">
import { usePageFrontmatter } from '@vuepress/client';
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/../shared/index.js';
import AutoLink from '@vuepress/theme-default/components/AutoLink.vue';

export default {
  data() {
    return {
      frontmatter: usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
    }
  },
  components: {
    AutoLink
  },
  computed: {
    footer() {
      return this.frontmatter.footer;
    }
  }
}
</script>

<template>
  <div class="footer">
    <ul class="footer-menu">
      <li>
        <AutoLink :item="{ link: '/user-agreement', text: 'Terms' }" />
      </li>
      <li>&nbsp;|&nbsp;</li>
      <li>
        <AutoLink :item="{ link: '/privacy-policy', text: 'Privacy' }" />
      </li>
      <li>&nbsp;|&nbsp;</li>
      <li>
        <AutoLink :item="{ link: '/support', text: 'Support' }" />
      </li>
    </ul>

    <p class="copyrights">© 2022 VasylTech LLC. All rights reserved.</p>
  </div>
</template>

<style lang="scss">
.footer {
  padding: 40px 0 20px 0;
  position: relative;

  .footer-menu {
    list-style: none;
    margin: 10px auto 20px auto;
    display: table;
    padding: 0;

    li {
      display: table-cell;
      font-size: .7em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 700;
    }
  }

  .copyrights {
    font-size: .6em;
    font-weight: 300;
    text-align: center;
  }
}
</style>
