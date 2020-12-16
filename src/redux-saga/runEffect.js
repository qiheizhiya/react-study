import { effectTypes } from "./effectHelper";

/**
 * 处理一个effect对象，根据不同的effect.type值，做不同的处理
 * @param {*} env 
 * @param {*} effect 
 * @param {*} next 
 */
export default function (env, effect, next) {
    switch (effect.type) {
        case effectTypes.CALL:
            break
        default:
            throw new Error("类型无效")
    }
}