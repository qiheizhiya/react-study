import React from 'react'

export default function Home() {
  return (
    <h1>我是首页。token是{localStorage.getItem('token')}</h1>
  )
}
