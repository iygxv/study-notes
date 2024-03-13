let data = [
  {
      id: 1,
      text: '节点1',
      parentId: 0,
      children: [
          {
              id:2,
              text: '节点1_1',
              parentId:1,
              children: [
                  {
                      id:3,
                      text: '节点1_1_1',
                      parentId:2
                  }
              ]
          }
      ]
  }
]


const treeToList = (data) => {
  let ret = []
  const dfs = (list) => {
    list.forEach(item => {
      if(item.children) {
        dfs(item.children)
        delete item.children
      }
      ret.unshift(item)
    })
  }
  dfs(data)
  return ret 
}

console.log(treeToList(data))