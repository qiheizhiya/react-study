import React, { useRef } from 'react'
import { connect } from 'dva'
import Modal from './components/Modal'

function Counter(props) {
    const inp = useRef()
    return (
        <div>
            <h1>{props.number}</h1>
            <p><button onClick={props.onAsyncDecrease}> 异步- </button></p>
            <p><button onClick={props.onDecrease}> - </button></p>
            <p><button onClick={props.onIncrease}> + </button></p>
            <p><button onClick={props.onAsyncIncrease}> 异步+ </button></p>
            <p>
                <input type="number" ref={inp} />
                <button onClick={() => {
                    const n = parseInt(inp.current.value)
                    props.onAdd(n)
                }}>加上</button>
            </p>
            {props.isLoading && <Modal>正在加载中。。。</Modal>}
        </div>
    )
}

const mapStateToProps = state => ({
    number: state.counter,
    isLoading: state.loading.global
})

const mapDispatchToProps = dispatch => ({
    onIncrease () {
        console.log()
        dispatch({
            type: 'counter/increase'
        })
    },
    onDecrease () {
        dispatch({
            type: 'counter/decrease'
        })
    },
    onAdd (n) {
        dispatch({
            type: 'counter/add',
            payload: n
        })
    },
    onAsyncIncrease() {
        dispatch({
            type: 'counter/asyncIncrease'
        })
    },
    onAsyncDecrease() {
        dispatch({
            type: 'counter/asyncDecrease'
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)