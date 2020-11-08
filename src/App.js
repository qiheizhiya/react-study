import React from 'react'
import { A } from './components/Comps'
import withLog from './HOC/withLog' 

const ALog = withLog(A)

export default function App() {

    const getRef = el => {
      console.log(el)
    }
    
    return (
        <div>
          <ALog a={1} forwardRef={getRef} />
        </div>
    )
}