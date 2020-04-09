const express = require('express')
const apiRoute = require('./routes/api')

const app = express()
const port = 3001

app.get('/api', apiRoute)

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
)
