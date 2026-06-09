import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

export default defineConfig({
  title: 'Orbit Client API',
  description: 'Developer documentation for integrating servers and services with Orbit Client.',
  cleanUrls: true,
  vite: {
    plugins: [llmstxt({
      domain: 'https://docs.orbitclient.com',
      excludeIndexPage: false
    })]
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: 'API Types', link: '/' },
      { text: 'Public API', link: '/public-api/' },
      { text: 'Partner API', link: '/partner-api/' },
      { text: 'Reference', link: '/reference/modules' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            { text: 'API Types', link: '/' }
          ]
        },
        {
          text: 'Public API',
          items: [
            { text: 'Introduction', link: '/public-api/' },
            { text: 'Getting Started', link: '/public-api/getting-started' },
            { text: 'Module States', link: '/public-api/modules' },
            { text: 'Events', link: '/public-api/events' },
            { text: 'Options', link: '/public-api/options' }
          ]
        },
        {
          text: 'Partner API',
          items: [
            { text: 'Introduction', link: '/partner-api/' },
            { text: 'Authentication', link: '/partner-api/authentication' },
            { text: 'Player Status', link: '/partner-api/player-status' }
          ]
        },
        {
          text: 'Reference',
          items: [
            { text: 'Modules', link: '/reference/modules' },
            { text: 'Errors', link: '/reference/errors' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Orbit-Client-Faction/api-documentation' }
    ],

    footer: {
      message: 'Orbit Client API Documentation',
      copyright: 'Copyright (c) Orbit Client'
    },

    search: {
      provider: 'local'
    }
  }
})
