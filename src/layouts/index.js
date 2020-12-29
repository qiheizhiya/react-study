import React from 'react'
import { NavLink } from 'umi'
export default function index(props) {
    console.log(props);
    return (
        <div>
            <p><NavLink to="/">首页</NavLink></p>
            <p><NavLink to="/sub">sub页面</NavLink></p>
            {props.children}
        </div>
    )
}
