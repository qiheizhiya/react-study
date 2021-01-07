import React from 'react'
import { connect } from 'umi'
import styles from './counter.less'
console.log(styles);
function Counter(props) {
    console.log(props);
    return (
        <div className={styles.counter}>
            <h1>{props.number}</h1>
            <p>
                <button onClick={props.onDecrease}>减</button>
                <button onClick={props.onIncrease}>加</button>
            </p>
        </div>
    )
}

const mapStateToProps = state => ({
    number: state.counter
})

const mapDispatchToProps = dispatch => ({
    onDecrease () {
        console.log('---');
        dispatch({ type: 'counter/decrease' })
    },
    onIncrease () {
        dispatch({ type: 'counter/increase' })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)