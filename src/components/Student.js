import React from 'react'

export default function Student(props) {
    return (
        <li>
            {/* 显示一个学生的所有数据 */}
            【姓名】：{props.name},<br></br>
            [email]：{props.email},<br></br>
            [性别]：{props.sex === 0 ? '男' : '女'},<br></br>
            [出生年份]{props.birth}
        </li>
    )
}
