// 深度优先使用的是栈结构
const graph = {
	"A": ["B", "C"],
	"B": ["A", "C", "D"],
	"C": ["A", "B", "D", "E"],
	"D": ["B", "C", "E", "F"],
	"E": ["C", "D"],
	"F": ["D"]
}
const dfs = function(graph, s){
	let stack = []
	stack.push(s)
	let show = new Set()
	show.add(s)
	while(stack.length>0){
		let item = stack.pop() // 此处改为栈
		let arr = graph[item]
		for(let i of arr){
            if(!show.has(i)){
				show.add(i)
				stack.push(i)
			}
        }
		console.log(item)
	}
}
dfs(graph, "A")
