export default function compose(funcs) {
    if (!funcs.length) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }
    
    // return function (...args) {
    //     let lastReturn = null
    //     for (let i = funcs.length - 1; i >= 0; i--) {
    //         const func = funcs[i];
    //         if (i === funcs.length - 1) {
    //             lastReturn = func(...args)
    //         } else {
    //             lastReturn = func(lastReturn)
    //         }
    //     }
    //     return lastReturn
    // }
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}