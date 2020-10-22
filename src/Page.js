import React from 'react'
import './index.css'

export default function Page(props) {

    const pageNumber = getPageNumber(props)
    if (pageNumber === 0) return null
    const min = minNum(props)
    const max = maxNum(min, props)
    const numbers = []
    for (let i = min; i <= max; i++) {
        console.log(i)
        numbers.push(<span onClick={() => handlePage(i, props)} className={i === props.current ? 'item act' : 'item'} key={i} >{i}</span>)
    }

    /**
     * current: 初始页码
     * total: 总数据量
     * limit: 页容量，每页显示多少个
     * pageNumber：显示多少个数字
     */
    function minNum (props) {
        let min = props.current - Math.floor(props.pageNumber / 2)
        if (min < 1) min = 1
        return min
    }
    function maxNum (min, props) {
        let max = min + props.pageNumber - 1
        if (max > pageNumber) max = pageNumber
        return max
    }
    return (
        <>
            <span onClick={() => handlePage(1, props)} className={props.current === 1 ? 'item disable' : 'item'}>首页</span>
            <span onClick={() => handlePage(props.current - 1 < 1 ? 1 : props.current - 1, props)} className={props.current === 1 ? 'item disable' : 'item'}>上一页</span>
            
            {/* 数字页码 */}
            {numbers}
            <span onClick={() => handlePage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props)} className={props.current === pageNumber ? 'item disable' : 'item'}>下一页</span>
            <span onClick={() => handlePage(pageNumber, props)} className={props.current === pageNumber ? 'item disable' : 'item'}>尾页</span>
        </>
    )
}

function handlePage (page, props) {
    if (page === props.current) return
    props.toPage && props.toPage(page)
}

/**
 * 计算总页数
 * @param {*} param0 
 */
function getPageNumber ({ total, limit }) {
    return Math.ceil(total / limit)
}
