/**
 * 判断这个对象是不是一个平面对象
 * @param {Object} obj 
 */
export default function isPlainObject (obj) {
  if (typeof obj !== 'object') {
      return false
  }
  return Object.getPrototypeOf(obj) === Object.prototype
}