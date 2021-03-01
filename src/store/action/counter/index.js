export const actionTypes = {
    increase: 'INCREASE',
    decrease: 'DECREASE',
    asyncIncrease: 'ASYNCINCREASE',
    asyncDecrease: 'ASYNCDECREASE',
    autoIncrease: 'AUTOINCREASE'
}

export const increase = () => ({ type: actionTypes.increase })

export const decrease = () => ({ type: actionTypes.decrease })

export const asyncIncrease = () => ({ type: actionTypes.asyncIncrease })

export const asyncDecrease = () => ({ type: actionTypes.asyncDecrease })

export const autoIncrease = () => ({ type: actionTypes.autoIncrease })