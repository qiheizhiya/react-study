import React, { PureComponent } from 'react'
import ctx from './formContext'
import propTypes from 'prop-types'

export default class FormInput extends PureComponent {

  static contextType = ctx

  static defaultProps = {
    type: 'text'
  }

  static propTypes = {
    name: propTypes.string.isRequired,
    type: propTypes.string.isRequired
  }

  inputChange = e => {
    this.context.changeFormData(this.props.name, e.target.value)
  }
   
  render() {
    return (
      <input type={this.props.type} name={this.props.name} value={this.context.formData[this.props.name] || ''} onChange={this.inputChange} />
    )
  }
}
