import React, { Component } from 'react'

export default class CheckboxGroup extends Component {

  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e)
  }

  // 获取所有的checkboxs
  getCheckboxes = () => {
    return this.props.datas.map(item => (
      <label key={item.value}>
        <input type="radio" name={this.props.name} value={item.value} checked={this.props.chooseDatas === item.value} onChange={this.handleChange} />
        {item.text}
      </label>
    ))
  }

  render() {
    const checks = this.getCheckboxes()
    
    return (
      <div>
        {checks}
      </div>
    )
  }
}
