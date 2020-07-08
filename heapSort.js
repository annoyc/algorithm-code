function heapSort(tree, n, i){
    var swap = function(arr, i, j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    var heapify = function(tree, n, i){
        // if(i>=n) return
        let c1 = 2*i+1
        let c2 = 2*i+2
        let max = i
        if(c1<n&&tree[c1]>tree[max]){
            max = c1
        }
        if(c2<n&&tree[c2]>tree[max]){
            max = c2
        }
        if(max !== i){
            swap(tree, i, max)
            heapify(tree, n, max)
        }
    }
    var buildHeap = function(tree, n){
        let lastNode =n-1
        let parent = (lastNode-1)/2
        for(let i=parent;i>=0;i--){
            heapify(tree, n, i)
        }
        return tree
    }
    tree = buildHeap(tree, n)
    var sortHeap = function(tree, n){
        for(let i=n-1;i>=0;i--){
            swap(tree, 0, i)
            heapify(tree, i, 0)
        }
    }
    sortHeap(tree, n)
    return tree
}
console.log(heapSort([2,5,3,2,10,4], 6, 0))
