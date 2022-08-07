import Vue from 'vue'

// 引入文件夹下所有组件
const requireContext = require.context('./', true, /\.ts$/)

const allFiles = requireContext.keys().filter(checkFile)

allFiles.forEach(path => {
  const lib = requireContext(path)
  Object.keys(lib).forEach(k => {
    const item = lib[k]
    Vue.component(item.name, item)
  })
})

function checkFile(path: string) {
  const level = path.split('/')
  if (level.length === 3 && level[1] !== 'module' && level[2] === 'index.ts') {
    return true
  }
  return false
}
