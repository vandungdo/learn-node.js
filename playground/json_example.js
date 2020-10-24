const fs = require('fs')

const data = fs.readFileSync('1-json.json')
const dataString = data.toString()
console.log(data)
console.log(data.toString())

const dataParse = JSON.parse(dataString)
dataParse.name = 'VDung'
dataParse.planet = 'Vegeta'
dataParse.age = '29'

const dataToJson = JSON.stringify(dataParse)

fs.writeFileSync('1-json.json',dataToJson)
