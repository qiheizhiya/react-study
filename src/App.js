import React from 'react'
import { A, B } from './components/Comps'
import withLogin from './HOC/withLogin' 

const ALog = withLogin(A)
const BLog = withLogin(B)

export default function App() {
    return (
        <div>
          <ALog a={1} isLogin />
          <BLog b={2} isLogin />
        </div>
    )
}