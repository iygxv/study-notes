let data = [
  {
    id: 3,
    text: '节点2_1',
    parentId: 2 //通过这个字段来确定子父级
  },
  {
    id: 2,
    text: '节点1_1',
    parentId: 1 //通过这个字段来确定子父级
  },
  {
    id: 1,
    text: '节点1',
    parentId: 0 //这里用0表示为顶级节点
  },
]

const listToTree = (data) => {
  let ret = []
  let map = {}
  data.forEach(item => {
    map[item.id] = item
  })

  for(let id in map) {
    let item = map[id]
    if(item.parentId == 0) { // 0表示为顶级节点
      ret.push(item)
    } else {
      let childParentId = item.parentId
      // 去找父
      map[childParentId].children = map[childParentId].children || []
      map[childParentId].children.push(item)
    }
  }
  return ret
}

// console.log(listToTree(data))

const listToTree2 = (data) => {
  const ret = []
  for(let i = 0; i < data.length; i++) {
    // 子节点
    for(let j = i + 1; j < data.length; j++) {
      if(data[i].id === data[j].parentId) {
        data[i].children = data[i].children || []
        data[i].children.push(data[j])
        data.splice(j, 1)
        j--
      }
    }
    // 顶节点
    if(data[i].parentId === 0) {
      ret.push(data[i])
    }
  }
  return ret 
}
data.sort((a, b) => {
  return a.id - b.id
})

console.log(data)
