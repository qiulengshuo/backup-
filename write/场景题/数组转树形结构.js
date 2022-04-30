let list = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 16, name: "部门L", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 },
]

function convert (list, id = 0) {
  let res = []
  for (let i = 0; i < list.length; i++) {
    if (list[i].parentId === id) {
      res.push(list[i])
      list[i].children = convert(list, list[i].id)
    }
  }
  return res
}

const result = convert(list)
console.log(result)


