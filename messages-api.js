const express = require('express')
const bodyParser = require('body-parser')
const limit = require('./middleware/limit')

const app = express()
const PORT = process.env.PORT || 3000

// parse incoming JSON post body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// custom middleware to limitize api request to 5 times
app.use(limit)

const router = express.Router()

router.post('/', (req, res) => {
  const { text } = req.body
  if (text && text.trim()) {
    console.log('Text => ', text)
    return res.status(201).json({
      message: 'Message received loud and clear!',
    })
  }
  res.status(400).json({
    status: 400,
    message: 'Bad Request!',
  })
})

app.use('/messages', router)

// INVALID ROUTE
app.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'There is no API method associated with the URL path of the request.',
  })
})

app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`))
