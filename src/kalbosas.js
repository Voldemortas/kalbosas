const express = require('express')
const apiRoute = require('./routes/api')
const apiRoute2 = require('./routes/api2')

const app = express()
const port = 3001

app.get('/api', apiRoute)
app.get('/api2', apiRoute2)

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
)
