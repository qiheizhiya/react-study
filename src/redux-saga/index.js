import runSaga from "../redux-saga/runSaga"

export default function createSagaMiddleware() {
    function sagaMid(store) {
        const env = { store }
        sagaMid.run = runSaga.bind(null, env)
        return function (next) {
            return function (action) {
                return next(action)
            }
        }
    }

    return sagaMid
}