const express = require('express')
const bodyParser = require('body-parser')
const movieRouter = require('./movies/router')

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/movies', movieRouter)

// INVALID ROUTE
app.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'There is no API method associated with the URL path of the request.',
  })
})

app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`))
