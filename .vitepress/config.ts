import { DefaultTheme, defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vue3 Admin',
  description: '一个开箱即用的Vue3后台管理前端框架',
  base: '/vue3-admin-doc/',
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: createSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Luff-JM/vue3-ts-admin' },
    ],
  },
});

function createSidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/guide/introduction' },
        {
          text: '目录结构',
          link: '/guide/structure',
        },
      ],
      collapsed: true,
    },
  ];
}
