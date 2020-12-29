// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/admin/AppData/Local/Yarn/Data/global/node_modules/@umijs/runtime';
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
        "component": require('@/pages/index.js').default
      },
      {
        "path": "/page1",
        "exact": true,
        "component": require('@/pages/page1.js').default
      },
      {
        "path": "/page2",
        "exact": true,
        "component": require('@/pages/page2.js').default
      },
      {
        "path": "/sub",
        "routes": [
          {
            "path": "/sub",
            "exact": true,
            "component": require('@/pages/sub/index.js').default
          },
          {
            "path": "/sub/:id",
            "exact": true,
            "component": require('@/pages/sub/[id].js').default
          }
        ],
        "component": require('@/pages/sub/_layout.js').default
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
