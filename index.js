const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const people = require('./people')
const port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.json({people})
})

app.listen(port, () => {
  console.log(`I got you on ${port}`)
})
