import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yomic",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      description: "Read your favorite manga, webtoons, and comics on Windows, macOS, and Linux with a beautiful, modern interface.",
      themeConfig: {
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
        }
      }
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id-ID',
      link: '/id/',
      description: "Baca manga, webtoon, dan komik favorit Anda di Windows, macOS, dan Linux dengan antarmuka yang indah dan modern.",
      themeConfig: {
        nav: [
          { text: 'Unduh', link: '/id/download/' },
          { text: 'Panduan', link: '/id/docs/guides/getting-started', activeMatch: '/id/docs/' },
          { text: 'Catatan Rilis', link: '/id/changelogs/' }
        ],
        sidebar: {
          '/id/docs/': [
            {
              text: 'Panduan',
              items: [
                { text: 'Memulai', link: '/id/docs/guides/getting-started' },
                { text: 'Ekstensi', link: '/id/docs/guides/extensions' },
                { text: 'Pengaturan Pembaca', link: '/id/docs/guides/reader-settings' }
              ]
            }
          ]
        }
      }
    }
  },
  themeConfig: {
    logo: '/img/logo.png',
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
