const express = require('express')
const Movie = require('./model')

const router = express.Router()

// GET ALL MOVIES
router.get('/', (req, res) => {
  Movie.findAll()
    .then(movies => {
      res.status(200).json({
        status: 200,
        data: {
          movies,
        },
      })
    })
    .catch(err => {
      res.status(400).json(err)
    })
})

// GET MOVIE BY ID
router.get('/:id', (req, res) => {
  const { id } = req.params
  Movie.findByPk(id)
    .then(movie => {
      if (movie) {
        return res.status(200).json({
          status: 200,
          data: movie,
        })
      }
      res.status(404).json({
        status: 404,
        message: 'Movie not found.',
      })
    })
    .catch(err => {
      res.status(400).json(err)
    })
})

// CREATE MOVIE
router.post('/', (req, res) => {
  const { title, yearOfRelease, synopsis } = req.body
  Movie.create({ title, yearOfRelease, synopsis })
    .then(movie =>
      res.status(201).json({
        status: 201,
        data: { id: movie.id },
      })
    )
    .catch(err => {
      res.status(400).json(err)
    })
})

// UPDATE MOVIE
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { title, yearOfRelease, synopsis } = req.body
  Movie.findByPk(id)
    .then(movie => {
      if (movie) {
        return movie.update({ title, yearOfRelease, synopsis }).then(movie =>
          res.status(200).json({
            status: 200,
            data: movie,
          })
        )
      }
      res.status(404).json({
        status: 404,
        message: 'Movie not found.',
      })
    })
    .catch(err => {
      res.status(400).json(err)
    })
})

// DELETE MOVIE
router.delete('/:id', (req, res) => {
  const { id } = req.params
  Movie.destroy({
    where: {
      id,
    },
  })
    .then(deleted => {
      if (deleted) {
        return res.status(204).end()
      }
      res.status(404).json({
        status: 404,
        message: 'Movie not found.',
      })
    })
    .catch(err => {
      res.status(400).json(err)
    })
})

module.exports = router
