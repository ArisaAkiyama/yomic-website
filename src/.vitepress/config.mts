import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yomic",
  description: "Read your favorite manga, webtoons, and comics on Windows, macOS, and Linux with a beautiful, modern interface.",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/img/logo.png',
    
    nav: [
      { text: 'Download', link: '/download/' },
      { text: 'Docs', link: '/docs/guides/getting-started', activeMatch: '/docs/' },
      { text: 'Changelogs', link: '/changelogs/' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Guides',
          items: [
            { text: 'Getting Started', link: '/docs/guides/getting-started' },
            { text: 'Extensions', link: '/docs/guides/extensions' },
            { text: 'Reader Settings', link: '/docs/guides/reader-settings' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ArisaAkiyama/yomic' }
    ],

    footer: {
      message: '<a href="https://github.com/ArisaAkiyama/yomic/blob/main/LICENSE" target="_blank">Open-source MIT Licensed</a> <span class="divider">|</span> <a href="/privacy/">Privacy policy</a>',
      copyright: 'Copyright © 2026 Yomic App'
    },
    
    search: {
      provider: 'local'
    }
  }
})
