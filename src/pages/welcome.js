import React from 'react'

function Welcome() {
    return (
        <div>
            <h1>欢迎你</h1>
            <p>
                <button onClick={() => {
                    localStorage.removeItem('loginId')
                }}>注销</button>
            </p>
        </div>
    )
}

Welcome.wrappers = ['@/routes/PrivateRoute']

export default Welcome