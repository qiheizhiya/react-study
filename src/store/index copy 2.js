import compose from '../redux/utils/compose'

function a (num) {
    return num + 5
} 

function b (num) {
    return num * 2
}

function c (num) {
    return num * 2
}

const d = compose(a, b, c)
console.log(d(5));
