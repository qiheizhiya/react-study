/**
 * Routes:
 *      - src/router/PrivateRouter
 */
import React from 'react'

function Index() {
    return (
        <div>
            <h1>欢迎页</h1>
        </div>
    )
}

Index.wrappers = ['@/wrappers/privateRouter']

export default Index