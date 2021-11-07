import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { sidebar, navbar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'SimpleCloudbase',
  description: '让小程序开发者们露出笑容',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    [
      'script',
      {},
      `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?4e2d32b1c64dc8c7d691822e882c87ad";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    
    `
    ],
    ['meta', { name: 'application-name', content: 'SimpleCloudbase' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-title', content: 'SimpleCloudbase' }
    ],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    ['link', { rel: 'apple-touch-icon', href: `/logo.png` }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: `/logo.png`,
        color: '#3eaf7c'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],
  themeConfig: {
    logo: './full-logo.png',
    repo: 'sonofmagic/simple-cloudbase-website',

    locales: {
      '/': {
        navbar: navbar.zh,

        selectLanguageName: '简体中文',

        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接'
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏'
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'SimpleCloudbase',
      description: '让小程序开发者们露出笑容'
    }
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索'
          }
        }
      }
    ]
    // [
    //   'vuepress-plugin-baidu-analytics',
    //   {
    //     id: '4e2d32b1c64dc8c7d691822e882c87ad'
    //   }
    // ]
  ]
})
