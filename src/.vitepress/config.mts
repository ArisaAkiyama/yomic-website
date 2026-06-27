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
            { text: 'Download', link: '/download/' },
            { text: 'Changelogs', link: '/changelogs/' },
            {
              text: 'Frequently Asked Questions',
              items: [
                { text: 'General', link: '/docs/faq/general' },
                { text: 'Library', link: '/docs/faq/library' }
              ]
            },
            {
              text: 'Updates',
              items: [
                { text: 'Smart updates', link: '/docs/updates/smart-updates' },
                { text: 'Upcoming', link: '/docs/updates/upcoming' }
              ]
            },
            {
              text: 'Browse',
              items: [
                { text: 'Downloads', link: '/docs/browse/downloads' }
              ]
            },
            {
              text: 'Application',
              items: [
                { text: 'Reader', link: '/docs/core/reader' },
                { text: 'Settings', link: '/docs/core/settings' },
                { text: 'Storage', link: '/docs/core/storage' }
              ]
            },
            {
              text: 'Guides',
              items: [
                { text: 'Getting started', link: '/docs/guides/getting-started' },
                { text: 'Troubleshooting', link: '/docs/guides/troubleshooting' },
                { text: 'Source migration', link: '/docs/guides/source-migration' },
                { text: 'Backups', link: '/docs/guides/backups' },
                { text: 'Tracking', link: '/docs/guides/tracking' },
                { text: 'Categories', link: '/docs/guides/categories' },
                { text: 'Local source', link: '/docs/guides/local-source' },
                { text: 'Reader settings', link: '/docs/guides/reader-settings' }
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
                { text: 'Pengaturan Pembaca', link: '/id/docs/guides/reader-settings' },
                { text: 'Penyelesaian Masalah', link: '/id/docs/guides/troubleshooting' }
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
