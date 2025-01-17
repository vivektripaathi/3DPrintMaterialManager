const express = require('express')
const app = express()
const router = express.Router()
const errorHandler = require('./middlewares/error-handler')
require('./config/db.js')

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Route
require('./routes')(router)
app.use('/api', router)

// Error Handler
app.use((err, req, res, next) => {
    errorHandler(err, req, res, next)
})

app.listen(3000, () => {
    console.log(`App listening at http://localhost:3000`)
})
