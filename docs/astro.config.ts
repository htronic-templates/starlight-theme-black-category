import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeBlack from 'starlight-theme-black-category'
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightAutoDrafts from 'starlight-auto-drafts';
import { generateSidebarGroups } from './src/sidebar_grps.mjs';

export default defineConfig({
  integrations: [
    starlight({
      logo: {
        dark: './src/assets/logo-dark.svg',
        light: './src/assets/logo-light.svg',
        alt: 'Starlight Black',
      },
      editLink: {
        baseUrl: 'https://github.com/adrian-ub/starlight-theme-black-category/edit/main/docs/',
      },
      plugins: [
        starlightThemeBlack({
          navLinks: [
            {
              label: 'Home',
              link: '/',
            },
            'getting-started',
            {
              label: 'Starlight',
              link: 'https://starlight.astro.build',
              badge: 'External',
              attrs: {
                target: '_blank',
                rel: 'noopener',
              },
            },
          ],
        }),
        starlightSidebarTopics([
          {
            label: 'Topic1',
            icon: 'open-book',
            link: '/topic1/',
	          items: generateSidebarGroups('topic1/', './src/content/docs/topic1'),
          },
          {
            label: 'Topic2',
            icon: 'open-book',
            link: '/topic2/',
            items: generateSidebarGroups('topic2/', './src/content/docs/topic2'),
          },
        ]),
      ],
      social: [
        { href: 'https://github.com/adrian-ub/starlight-theme-black', icon: 'github', label: 'GitHub' },
      ],
      title: 'starlight/black',
      locales: {
        root: { label: 'English', lang: 'en' },
        es: { label: 'Español', lang: 'es' },
      },
    }),
  ],
})
