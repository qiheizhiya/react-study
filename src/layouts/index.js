import React from 'react'
import { NavLink } from 'umi'

export default function index(props) {
    console.log(props);
    return (
        <div>
            <NavLink to='/' >首页</NavLink> <br />
            <NavLink to='/login' >登录</NavLink> <br />
            <NavLink to='/welcome' >欢迎</NavLink>
            {props.children}
        </div>
    )
}
