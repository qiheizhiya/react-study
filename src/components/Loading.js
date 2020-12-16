import React from 'react'
import Modal from './Modal'
export default function Loading(props) {
  console.log(props)
  return (
    <div>
      {props.show && <Modal>
        <div style={{
          color: '#fff',
          fontSize: '3em'
        }}>加载中</div>
      </Modal> }
    </div>
  )
}
