import React from 'react'

export default function Comp(props) {
    console.log(props)
    return (
        <div className="comp">
            {props.children}
        </div>
    )
}
