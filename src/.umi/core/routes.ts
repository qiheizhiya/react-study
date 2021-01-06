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
        "path": "/counter",
        "exact": true,
        "component": require('@/pages/counter.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('@/pages/login.js').default
      },
      {
        "path": "/sub",
        "exact": true,
        "component": require('@/pages/sub/index.js').default
      },
      {
        "path": "/welcome",
        "exact": true,
        "component": require('@/pages/welcome.js').default,
        "wrappers": [require('@/routes/PrivateRoute').default]
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
