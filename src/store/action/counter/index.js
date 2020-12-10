export const actionTypes = {
    increase: Symbol('increase'),
    decrease: Symbol('decrease'),
    asyncIncrease: Symbol('asyncIncrease'),
    asyncDecrease: Symbol('asyncDecrease')
}

export const increase = () => ({ type: actionTypes.increase })

export const decrease = () => ({ type: actionTypes.decrease })

export const asyncIncrease = () => ({ type: actionTypes.asyncIncrease })

export const asyncDecrease = () => ({ type: actionTypes.asyncDecrease })
