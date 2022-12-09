<template>
    <ParentHomeHero>
        <template #heroInfo>
            <div class="text-container">
                <h1 v-if="heroText" class="main-title">
                    {{ heroText }}
                </h1>

                <HeroImageTagline v-if="tagline" />

                <p v-if="actions.length" class="actions">
                    <AutoLink v-for="action in actions" :key="action.text" :class="['nav-link action-button', action.type]" :item="action" />
                </p>
            </div>
        </template>
    </ParentHomeHero>
</template>

<script setup lang="ts">
import ParentHomeHero from 'vuepress-theme-hope/components/HomeHero';

import AutoLink from '@vuepress/theme-default/components/AutoLink.vue'
import {
    usePageFrontmatter,
    useSiteLocaleData
} from '@vuepress/client'
import { isArray } from '@vuepress/shared'
import type { FunctionalComponent } from 'vue'
import { computed, h } from 'vue';
import type { DefaultThemeHomePageFrontmatter } from '@vuepress/theme-default/../shared/index.js'

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const siteLocale = useSiteLocaleData()

const heroText = computed(() => {
    if (frontmatter.value.heroText === null) {
        return null
    }
    return frontmatter.value.heroText || siteLocale.value.title || 'Hello'
})

const tagline = computed(() => {
    let response = null;

    if (frontmatter.value.tagline !== null) {
        if (Array.isArray(frontmatter.value.tagline)) {
            response = frontmatter.value.tagline.join('<br/><br/>');
        } else {
            response = frontmatter.value.tagline;
        }
    }

    return response;
});

const HeroImageTagline: FunctionalComponent = () => {
    let response;

    if (frontmatter.value.tagline !== null) {
        if (Array.isArray(frontmatter.value.tagline)) {
            response = h(
                'div',
                { class: 'description' },
                frontmatter.value.tagline.map((p) => h('p', p))
            );
        } else {
            response = h('p', { class: 'description' }, frontmatter.value.tagline);
        }
    }

    return response;
}

const actions = computed(() => {
    if (!isArray(frontmatter.value.actions)) {
        return []
    }

    return frontmatter.value.actions.map(({ text, link, type = 'default' }) => ({
        text,
        link,
        type,
    }))
});
</script>