import React from 'react'
import NavLink from './BetterLink'
export default function News(props) {
  return (
    <h1>
      <nav>
        <NavLink to={{ name: 'newsHome' }}>去新闻主页</NavLink>
        <NavLink to={{ name: 'newsDetail' }}>去新闻详情页</NavLink>
        <NavLink to={{ name: 'newsSearch' }}>去新闻搜索页</NavLink>
      </nav>
      <main>
        {props.children}
      </main>
    </h1>
  )
}
