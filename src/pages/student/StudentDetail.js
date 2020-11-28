import React from 'react'

export default function StudentDetail(props) {
    return (
        <div>
            我是学生详情
            学号是：{props.match.params.sNo}
        </div>
    )
}
