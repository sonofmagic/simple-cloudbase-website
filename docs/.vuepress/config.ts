import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'SimpleCloudbase',
  description: '让微信小程序开发者露出笑容',

  themeConfig: {
    logo: './full-logo.png'
  }
})
