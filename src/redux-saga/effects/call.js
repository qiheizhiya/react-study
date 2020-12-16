import { createEffect, effectTypes } from '../effectHelper'
import isPromise from 'is-promise'

export function call(fn, ...args) {
    var context = null, // this指向
        func = fn // 要允许的函数
    if (Array.isArray(fn)) {
        context = fn[0]; // this指向数组的第一项
        func = fn[1] // 运行的函数指向数组的第二项
    }
    return createEffect(effectTypes.CALL, {
        context,
        fn: func,
        args
    })
}

export function runCallEffect (env, effect, next) {
    const { context, fn, args } = effect.payload
    // 调用函数，得到函数的返回结果
    const result = fn.call(context, ...args)
    if (isPromise(result)) {
        result.then(v => next(v))
            .catch(err => next(null, err))
    } else {
        next(result)
    }
}
