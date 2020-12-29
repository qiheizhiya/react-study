import React from 'react'
import { NavLink, history } from 'umi'
export default function index() {
    return (
        <div>
            主页
            <p onClick={
                () => {
                    history.push('/page1')
                }
                
            }>去page1</p>
            <p><NavLink to="/page2" >去page2</NavLink></p>
        </div>
    )
}
