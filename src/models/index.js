const path = require('path')

const glob = require('glob')

const basename = path.basename(__filename)
const models = {}

glob.sync(`${__dirname}/**/*.js`)
    .filter((file) => {
        const fileName = file.split('/')
        return (
            fileName[fileName.length - 1].indexOf('.') !== 0 &&
            fileName[fileName.length - 1] !== basename &&
            fileName[fileName.length - 1].slice(-3) === '.js'
        )
    })
    .forEach(async (file) => {
        const fileName = file.split('/')
        models[fileName[fileName.length - 1].slice(0, -3)] = require(file)
    })

module.exports = models
