export default function (actionCreators, dispatch) {
    if (typeof actionCreators === 'function') {
        return getAutoDispatchActionCreator(actionCreators, dispatch)
    }
    else if (typeof actionCreators === 'object') {
        const newActionCreators = {}
        for (const key in actionCreators) {
            if (actionCreators.hasOwnProperty(key)) {
                const actionCreator = actionCreators[key];
                if (typeof actionCreator === 'function') {
                    newActionCreators[key] = getAutoDispatchActionCreator(actionCreator, dispatch)
                }
            }
        }
        return newActionCreators
    } else {
        throw new Error('actionCreators muse be an object or function which means action creator')
    }
}

function getAutoDispatchActionCreator (actionCreators, dipatch) {
    return function (...args) {
        const action = actionCreators(...args)
        dipatch(action)
    }
}