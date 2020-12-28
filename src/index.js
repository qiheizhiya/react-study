import routerConfig from './routerConfig'
import dva from 'dva'
import counterModel from './models/counter'
import studentModel from './models/student'
import { createBrowserHistory } from 'history'

// 得到一个dva对象
const app = dva({
    history: createBrowserHistory(),
    initialState: {
        counter: 1234
    },
    onStateChange (...args) {
        console.log(...args)
    }
})

// 在启动之前定义模型
app.model(counterModel)
app.model(studentModel)

// 设置跟路由，则启动后，要运行的函数，函数的返回结果会被渲染
app.router(routerConfig)

app.start('#root')

// ReactDOM.render(<App/>, document.getElementById('root'));