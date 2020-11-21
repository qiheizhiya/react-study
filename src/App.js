import React, { useState } from 'react'
// import useAllStudent from './myHooks/useAllStudent'
import usePageStudent from './myHooks/usePageStudent'
import Pager from './components/Pager';
function Test() {
    const [page, setPage] = useState(1)
    const { data, total } = usePageStudent(page)
    const [limit] = useState(10)
    const list = data.map(it => <li key={it.id}>{it.name}</li>)

    return (
        <>
            <p>数据总量：{total}</p>
            <ul>
                {list}
            </ul>
            <Pager current={page} limit={limit} total={total} onPageChange={newPage => setPage(newPage)} />
        </>
    )
}

export default function App() {
    return (
        <div>
            <Test />
        </div>
    )
}
