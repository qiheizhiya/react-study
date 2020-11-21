import React, { useState, useEffect } from 'react'
import StudenList from '../StudentList'
import Pager from '../Pager'
import { mockAllStud } from '../../fetch'

export default function StudentContainer() {
    const [stus, setStus] = useState([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        (async () => {
            const { data, total } = await mockAllStud(page, limit)
            setStus(data)
            setTotal(total)
        })()
    }, [page, limit])
    return (
        <div>
            <StudenList stus={stus} />
            <Pager limit={limit} total={total} current={page} onPageChange={newPage => setPage(newPage)} />
            <p>
                <input type="number" value={limit} onChange={e => {
                    setLimit(e.target.value)
                }} />
            </p>
        </div>
    )
}
