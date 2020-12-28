export default {
    namespace: 'counter',
    state: 0,
    reducers: {
        increase (state, action) {
            return state + 1
        },
        decrease (state) {
            return state - 1
        },
        add (state, action) {
            return state + action.payload
        }
    },
    effects: {
        *asyncIncrease (action, { put }) {
            yield delay(500)
            yield put({ type: 'increase' })
        },
        *asyncDecrease (action, { put }) {
            yield delay(500)
            yield put({ type: 'decrease' })
        }
    },
    subscriptions: {
        m1 ({ dispatch }) {
            window.onresize = function () {
                dispatch({ type: 'increase' })
            }
        },
        m2 ({ history, dispatch }) {
            history.listen((...args) => {
                dispatch({ type: 'decrease' })
            })
        }
    }
}

function delay (duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration);
    })
}