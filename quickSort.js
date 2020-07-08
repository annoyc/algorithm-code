function quicksort(arr){
    if(!arr.length || arr.length<2 ) return arr
    let pivot = arr.pop()
    let left = arr.filter(item => item<pivot)
    let right = arr.filter(item => item>=pivot)
    return quicksort(left).concat([pivot], right)
}
console.log(quicksort([1,4,6,7,3,5,9,3]))
