import type { NavbarConfig, SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/getting-started.md',
        '/zh/guide/deploy.md',
        '/zh/guide/structure.md',
        '/zh/guide/migration.md',
        '/zh/guide/configuration.md',
        '/zh/guide/cloudbase-cli.md',
        '/zh/guide/demo.md'
        // '/zh/guide/cloudbase-auth.md'
      ]
    }
  ],
  '/zh/pro/': [
    {
      text: '进阶',
      children: [
        '/zh/pro/README.md',
        '/zh/pro/single-or-mutiple.md',
        '/zh/pro/why-wechat.md'
      ]
    }
  ]
}
