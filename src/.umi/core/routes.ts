// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'E:/我的项目相关/15.react/react-study/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default,
        "wrappers": [require('@/wrappers/privateRouter').default]
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('@/pages/login.js').default
      },
      {
        "path": "/student/add",
        "exact": true,
        "component": require('@/pages/student/add.js').default
      },
      {
        "path": "/student",
        "exact": true,
        "component": require('@/pages/student/index.js').default
      },
      {
        "path": "/student/:id",
        "exact": true,
        "component": require('@/pages/student/[id].js').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
