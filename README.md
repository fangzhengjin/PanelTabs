[![Netlify Status](https://api.netlify.com/api/v1/badges/10453ec4-945e-41c7-844e-4e7e6a2027b2/deploy-status)](https://app.netlify.com/sites/vibrant-leakey-d5b34a/deploys)

基于umi-plugin-keep-alive实现的Tab页签

[效果预览](https://vibrant-leakey-d5b34a.netlify.app/)

## 如何使用
 - 安装依赖 `umi-plugin-keep-alive`
 - 在 `app.tsx` 中将layout的disableContentMargin配置为true (根据实际项目调整, 如果正常显示可不配置)
 - 将 `src/components/PanelTabs` 复制到自己项目中
 - 将 `src/wrappers/PanelTabsWrapper.tsx` 复制到自己项目中
 - 在路由配置中, 将所有根节点设置wrappers属性, 只有有name的路由才会在页签中打开
 ```ts
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
 ```
  - 配置完成🎉

## 自定义场景使用
提供了hook方便在其他组件中使用
```tsx
import { Button, Result } from 'antd';
import React from 'react';
import usePanelTab from '@/components/PanelTabs/PanelTabHook';

export default () => {
  const { closeCurrent } = usePanelTab();
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在。"
      extra={
        <Button type="primary" onClick={closeCurrent}>
          关闭页面
        </Button>
      }
    />
  );
};
```