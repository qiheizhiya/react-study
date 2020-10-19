import React from 'react';
import ReactDOM from 'react-dom';
import StudComp from './components/StudentList'
const baseRequest = 'http://open.duyiedu.com/api/student/findAll'
const appkey = 'aaa953136447_1581225655877'
// function MyFuncComp(props) {
//   console.log(props)
//   return <h1>{props.number * 2}</h1>
// }

// class MyClassComp extends React.Component {
//   render() {
//     return <h1>类组件的内容 {this.props.number}</h1>
//   }
// }

// 获取所有的学生数据
async function fetchAllStudent() {
  const students = await fetch(`${baseRequest}?appkey=${appkey}`).then(resp => resp.json()).then(resp => resp.data)
  return students
}
async function render() {
  ReactDOM.render('正在加载中...', document.getElementById('root'))
  const stus = await fetchAllStudent()
  ReactDOM.render(<div> <StudComp stud={stus} /> </div>, document.getElementById('root'))
}

render()

