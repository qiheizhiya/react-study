
import React, { useEffect } from 'react'
import { getAllStudents } from '@/services/student'

function Index() {
    useEffect(() => {
        getAllStudents().then(res => {
            console.log(res);
        })
    }, [])
    return (
        <div>
            首页
        </div>
    )
}

export default Index