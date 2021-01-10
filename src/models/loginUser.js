export default {
    state: null,
    subscriptions: {
        syncLocalStorage ({ dispatch }) {
            const loginId = localStorage.getItem('loginId')
            if (loginId) {
                dispatch({ type: 'setLoginUser', payload: loginId })
            }
        }
    },
    reducers: {
        setLoginUser(state, action) {
            return action.payload
        }
    },
    effects: {
        *login({ payload }, { put }) {
            console.log(payload);
            const { loginId, loginPwd } = payload
            console.log(loginId, loginPwd);
            if (loginId === 'admin' && loginPwd === '123123') {
                yield put({ type: 'setLoginUser', payload: loginId })
                localStorage.setItem("loginId", loginId)
                return true
            }
        },
        *loginOut(action, { put }) {
            localStorage.removeItem("loginId")
            yield put({ type: "setLoginUser", payload: null })
        }
    }
}