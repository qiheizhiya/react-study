// import React, { PureComponent } from 'react'
// import ctx, { Consumer } from './formContext'
import React from 'react'
import { Consumer } from './formContext'

// export default class FormButton extends PureComponent {
  
//   static contextType = ctx

//   render() {
//     return (
//       <button onClick={() => {
//         this.context.submit()
//       }}>
//         {this.props.children}
//       </button>
//     )
//   }
// }

export default function FormButton (props) {
  return <Consumer>
    {ctx => {
      return (
        <button onClick={() => {
          ctx.submit()
        }}>
          {props.children}
        </button>
      )
    }}
  </Consumer>
}