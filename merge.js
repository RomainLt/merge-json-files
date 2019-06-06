const fs = require('fs-extra')

// Folder where json files are located
const fsFolder = './files'

const encoding = 'UTF-8'

let files = fs.readdirSync(fsFolder)

let tab = []

// Remove result if already created
if (files.includes('result.json')) {
  fs.unlinkSync(fsFolder + '/result.json')
  files = files.filter(f => f !== 'result.json')
}

// For each file
for (let fileName of files) {
  const fsPath = fsFolder + '/' + fileName
  const content = fs.readFileSync(fsPath, encoding)

  tab.push(JSON.parse(content))
}

// Result file creation
fs.writeFileSync(fsFolder + '/result.json', JSON.stringify(tab), encoding)
