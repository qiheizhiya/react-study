import compose from './utils/compose'
export default function (...funcs) {
    return function (createStore) {
        return function (...args) {
            const store = createStore(...args)
            let dispatch = () => { throw new Error('不能在未声明前调用dispatch') }
            const middlewardStoreApi = {
                getState: store.getState,
                dispatch: (...args) => dispatch(...args)
            } // 给中间件的两个方法，也就是中间件第一个函数的参数
            const dispatchMiddware = funcs.map(middward => middward(middlewardStoreApi))
            dispatch = compose(dispatchMiddware)(store.dispatch)
            return { ...store, dispatch }
        }
    }
}