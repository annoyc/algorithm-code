/*
 * @Descripttion: dp练习
 * @version: 
 * @Author: ycz
 * @Date: 2020-07-03 14:30:40
 * @LastEditors: ycz
 * @LastEditTime: 2020-07-03 16:32:10
 */ 

// 找出数组中不相邻数字之和最大的组合，并返回其最大的和
let arr = [4, 1, 1, 9, 3]
let rec_opt = function(arr, i){ // 递归，自上而下，内存消耗过大，不推荐
    if(i === 0) return arr[0]
    if(i === 1) return Math.max(arr[0], arr[1])
    let A = rec_opt(arr, i-2)+arr[i] // 选择最后一个数字
    let B = rec_opt(arr, i-1) // 不选择最后一个数字
    return Math.max(A, B)
}

let dp_opt = function(arr){ // 动态规划，for循环自底向上
    let dp = new Array(arr.length).fill(0)
    dp[0] = arr[0]
    dp[1] = Math.max(arr[1], arr[0])
    for(let i=2;i<arr.length;i++){
        dp[i] = Math.max(dp[i-2]+arr[i], dp[i-1])
    }
    return dp[arr.length-1]
}

// console.log(dp_opt(arr))

// 找出数组中是否存在和为目标值的组合，若存在返回true 否则返回false
let arr1 = [3, 34, 4, 12, 5, 2]
let rec_subset = function(arr, i, s){ // i为从数组的第i项开始 s为目标值
    if(s === 0){ 
        return true
    } else if(i === 0){
        return arr[i] === s
    } else if(arr[i]>s){
        return rec_subset(arr, i-1, s)
    } else {
        let A = rec_subset(arr, i-1, s-arr[i]) // 选择arr[i]这个数
        let B = rec_subset(arr, i-1, s) // 不选这个数，选下一个
        return A || B
    }
}
console.log(rec_subset(arr1, 5, 9))
console.log(rec_subset(arr1, 5, 10))
console.log(rec_subset(arr1, 5, 11))
console.log(rec_subset(arr1, 5, 12))
console.log(rec_subset(arr1, 5, 13))