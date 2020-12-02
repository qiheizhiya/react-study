import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterView from './RouterView'
import Link from './BetterLink'
import './App.css'
export default function App() {
    return (
        <Router>
            <nav>
                <Link to={{ name: 'home' }}>去首页</Link>
                <Link to={{ name: 'news' }}>去新闻页面</Link>
            </nav>
            <main>
                <RouterView />
            </main>
        </Router>
    )
}
