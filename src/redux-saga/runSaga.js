import { Task } from './Task'
import isGenerator from 'is-generator'
import isPromise from 'is-promise'
import { isEffect } from './effectHelper'
import runEffect from './runEffect'

/**
 * 开启一个新任务
 * @param {*} env 全局环境的数据，被saga执行共享的数据
 * @param {*} generatorFunc 生成器函数
 * @param  {...any} args 生成器函数的参数
 */
export default function (env, generatorFunc, ...args) {
    console.log('开启了一个任务')
    const iterator = generatorFunc(...args)
    if (isGenerator(iterator)) {
        next()
    } else {
        console.log('一个普通函数')
    }


    /**
     * 
     * @param {*} nextValue 正常调用iter.next时，传递的值 
     * @param {*} err 错误对象
     * @param {*} isOver 是否结束
     */
    function next(nextValue, err, isOver) {
        let result; // 记录迭代的结果 { value: xxx, done: false }
        if (err) {
            result = iterator.throw(err)
        } else if (isOver) {
            result = iterator.return()
        } else {
            result = iterator.next(nextValue)
        }
        const { value, done } = result
        if (done) {
            //迭代结束了
            return
        }
        if (isEffect(value)) {
            //情况1：是一个effect对象
            runEffect(env, value, next)
        } else if (isPromise(value)) {
             //情况2：value是一个promise
             value.then(r => next(r)).catch(err => next(null, err))
        } else {
            //情况3：其他
            next(value) //直接进行下一步
        }
    }
    return new Task()
}