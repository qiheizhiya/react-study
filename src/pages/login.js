import React, { useRef } from 'react'
import { history } from 'umi'
export default function login() {
    const txtLoginId = useRef()
    const txtLoginPwd = useRef()
    return (
        <div>
            <p>
                账号12323412：<input ref={txtLoginId} type="text"/>
            </p>
            <p>
                密码：<input ref={txtLoginPwd} type="password" name="" id=""/>
            </p>
            <p>
                <button onClick={() => {
                    if (txtLoginId.current.value === '123123') {
                        localStorage.setItem('loginId', txtLoginId.current.value)
                        history.push('/welcome')
                    }
                }}>登录</button>
            </p>
        </div>
    )
}
