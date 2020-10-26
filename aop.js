Function.prototype.before = function (beforeFn){
    let _self = this //缓存原函数的引用
    return function(){ // 代理函数
        beforeFn.apply(this, arguments) // 执行前置函数
        return _self.apply(this, arguments) // 执行原函数
    }
}

Function.prototype.after = function(afterFn){
    let _self = this
    return function(){
        let set = _self.apply(this, arguments)
        afterFn.apply(this, arguments)
        return set
    }
}

let func = () => console.log('func')
func = func.before(()=>console.log('before')).after(()=>console.log('after'))
func() // 输出 before func after