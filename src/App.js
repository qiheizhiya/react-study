import React, { Component } from 'react'
import CheckBoxGroup from './components/CheckboxGroup'
export default class App extends Component {
  state = {
    datas: [
      { value: 'football', text: '足球' },
      { value: 'basketball', text: '篮球' }
    ],
    chooseDatas: ['basketball']
  }
  render() {
    return (
      <div>
        <CheckBoxGroup {...this.state} onChange={(datas) => {
          this.setState({ chooseDatas: datas })
        }} />
      </div>
    )
  }
}
