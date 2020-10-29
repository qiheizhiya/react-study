import React, { Component } from 'react'
import RadioGroup from './components/RadioGroup'
import { getAllStud } from './fetch'
export default class App extends Component {
  state = {
    datas: [
      { value: 'football', text: '足球' },
      { value: 'basketball', text: '篮球' }
    ],
    chooseDatas: ''
  }

  async componentDidMount () {
    const allStu = await getAllStud()
    this.setState({
      datas: allStu.data.findByPage.map(it => ({ value: it.id.toString(), text: it.name }))
    })
  }

  render() {
    return (
      <div>
        <RadioGroup name='loves' {...this.state} onChange={(data) => {
          this.setState({ chooseDatas: data })
        }} />
      </div>
    )
  }
}
