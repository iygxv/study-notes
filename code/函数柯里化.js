// 使用了闭包的特性 =>  让变量的值始终保持在内存中
/**
 * 
 * @param {*} fn 
 * @param  {...any} args 
 * @returns 
 */
const currying = (fn, ...args) => {
  let fnLen = fn.length
  let allArgs = [...args]
  const dfs = (...args2) => {
    allArgs = [...allArgs, ...args2]
    if (allArgs.length === fnLen) {
      return fn(...allArgs)
    } else {
      return dfs
    }
  }
  return dfs
}


let fn = (a, b, c) => {
  return a + b + c
}
// let add = currying(fn, 3, 4)
// let ret = add(5)
// 连续使用 -- 收集到一定参数才会去调用函数, 否则还是返回函数
let ret = currying(fn, 3)(4)(5)
console.log(ret); //12