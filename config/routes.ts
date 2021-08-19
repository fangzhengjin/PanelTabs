export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
    wrappers: ['@/wrappers/PanelTabsWrapper.tsx'],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    wrappers: ['@/wrappers/PanelTabsWrapper.tsx'],
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        name: '页面未找到',
        component: './404',
        wrappers: ['@/wrappers/PanelTabsWrapper.tsx'],
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
    wrappers: ['@/wrappers/PanelTabsWrapper.tsx'],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '页面未找到',
    component: './404',
    wrappers: ['@/wrappers/PanelTabsWrapper.tsx'],
  },
];
