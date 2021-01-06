import React from 'react'

export default function PrivateRoute(props) {
    const loginId = localStorage.getItem('loginId')
    if (loginId) {
        return props.children
    } else {
        return <div>
            <p>
                必须登录后才能看到
            </p>
        </div>
    }
}
