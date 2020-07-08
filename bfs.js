// 宽度优先使用的是队列结构
const graph = {
	"A": ["B", "C"],
	"B": ["A", "C", "D"],
	"C": ["A", "B", "D", "E"],
	"D": ["B", "C", "E", "F"],
	"E": ["C", "D"],
	"F": ["D"]
}
const bfs = function(graph, s){
	let quene = []
	quene.push(s)
	let show = new Set()
	show.add(s)
	let parent = { s: null}
	while(quene.length>0){
		let item = quene.shift()
		let arr = graph[item]
		for(let i of arr){
            if(!show.has(i)){
				show.add(i)
				quene.push(i)
				parent[i] = item // 保存父节点
			}
        }
		// console.log(item) // 打印路径
	}
	return parent
} 
let parent = bfs(graph, "E")
let v = "B"
while(v){
	console.log(v) // 打印出从根节点到B节点的路径
	v = parent[v]
}
// console.log(parent)
