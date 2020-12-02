import React from 'react'

export default function login() {
  return (
      <p>
        <button onClick={() => {
          localStorage.setItem('token', '123')
        }}>登陆</button>
        <br></br>
        <button onClick={() => {
          localStorage.removeItem('token')
        }}>退出登陆</button>
      </p>
  )
}
