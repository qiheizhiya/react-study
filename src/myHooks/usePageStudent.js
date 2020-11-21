import { useState, useEffect } from 'react'

import { mockAllStud } from '../fetch'

export default function useAllStudent(page = 1, limit = 10) {
    const [stus, setStus] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        (async() => {
            const { data, total } = await mockAllStud(page, limit)
            setStus(data)
            setTotal(total)
        })()
        
    }, [page, limit])
    return {
        data: stus,
        total
    }
}
