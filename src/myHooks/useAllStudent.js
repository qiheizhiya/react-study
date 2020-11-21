import { useState, useEffect } from 'react'

import { mockAllStud } from '../fetch'

export default function useAllStudent() {
    const [stus, setStus] = useState([])

    useEffect(() => {
        (async() => {
            const { data } = await mockAllStud()
            setStus(data)
        })()
        
    }, [])
    return stus
}
