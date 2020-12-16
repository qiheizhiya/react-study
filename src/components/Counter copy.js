import React from 'react'
import { connect } from 'react-redux'
import { asyncDecrease, decrease, increase, asyncIncrease } from '../store/action/counter'

// 纯展示组件
function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <p>
                <button onClick={props.onAsyncDecrease}> 异步减 </button>
                <button onClick={props.onDecrease}> 减 </button>
                <button onClick={props.onIncrease}> 加 </button>
                <button onClick={props.onAsyncIncrease}> 异步加 </button>
            </p>
        </div>
    )
}

function mapStateToProps (state, ownProps) {
    return {
        number: state.counter
    }
}
/**
 * 映射事件处理函数
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onAsyncDecrease: () => dispatch(asyncDecrease()),
        onDecrease: () => dispatch(decrease()),
        onIncrease: () => dispatch(increase()),
        onAsyncIncrease: () => dispatch(asyncIncrease())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)