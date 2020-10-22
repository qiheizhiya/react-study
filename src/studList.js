import React from 'react'
import Stud from './stud'
export default function studList(props) {
    const stus = props.stu.map(item => <Stud key={item.id} {...item} />)
    return (
        <div>
            {stus}
        </div>
    )
}
