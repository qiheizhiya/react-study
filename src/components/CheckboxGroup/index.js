import React, { Component } from 'react'
import types from '../../utils/commonTypes'
import PropTypes from 'prop-types'
import WithDataList from '../HOC/withDataList'
class CheckBox extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    info: types.singleData,
    chooseDatas: types.chooseDatas,
  }

  handleChange = (e) => {
    let newArr = []
    if (e.target.checked) {
      newArr = [...this.props.chooseDatas, e.target.value]
    } else { 
      newArr = this.props.chooseDatas.filter(it => it !== e.target.value)
    }
    this.props.onChange && this.props.onChange(newArr)
  }

  render () {
    return (
      <label >
        <input type="checkbox" name={this.props.name} value={this.props.info.value} checked={this.props.chooseDatas.includes(this.props.info.value)} onChange={this.handleChange} />
        {this.props.info.text}
      </label>
    )
  }
}

export default WithDataList(CheckBox)


// export default class CheckboxGroup extends Component {

//   static defaultProps = {
//     datas: [],
//     chooseDatas: []
//   }

//   static propTypes = {
//     datas: types.groupDatas.isRequired,
//     name: PropTypes.string.isRequired,
//     chooseDatas: types.chooseDatas,
//     onChange: PropTypes.func
//   }

//   handleChange = (e) => {
//     let newArr = []
//     if (e.target.checked) {
//       newArr = [...this.props.chooseDatas, e.target.value]
//     } else { 
//       newArr = this.props.chooseDatas.filter(it => it !== e.target.value)
//     }
//     this.props.onChange && this.props.onChange(newArr, this.props.name, e)
//   }

//   // 获取所有的checkboxs
//   getCheckboxes = () => {
//     return this.props.datas.map(item => (
//       <label key={item.value}>
//         <input type="checkbox" name={this.props.name} value={item.value} checked={this.props.chooseDatas.includes(item.value)} onChange={this.handleChange} />
//         {item.text}
//       </label>
//     ))
//   }

//   render() {
//     const checks = this.getCheckboxes()
    
//     return (
//       <div>
//         {checks}
//       </div>
//     )
//   }
// }
