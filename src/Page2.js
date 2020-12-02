import React, { useState } from 'react'
// import { Prompt } from 'react-router-dom'
import Prompt from './ClassPrompt'
export default function Page2() {
  const [value, setValue] = useState('')
  return (
    <div>
      <Prompt when={value !== ''} message='切换数据就没了奥' />
      <textarea value={value} cols="30" rows="10" onChange={e => {
        setValue(e.target.value)
      }}></textarea>
    </div>
  )
}
