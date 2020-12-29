import React from 'react'

export default function $id(props) {
    console.log(props.match.params.id)
    return (
        <div>
            我是id页面
        </div>
    )
}
