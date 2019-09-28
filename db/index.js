const Sequelize = require('sequelize')
const CONFIG = require('../config')

const db = new Sequelize(CONFIG.DATABASE.NAME, CONFIG.DATABASE.USERNAME, CONFIG.DATABASE.PASSWORD, {
  host: CONFIG.DATABASE.HOST,
  dialect: 'postgres',
})

db.sync()
  .then(() => {
    const Movie = require('../movies/model')
    // create example data
    Movie.create({
      title: 'The man who knew infinity',
      yearOfRelease: '2016',
      synopsis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    }).then(movie => movie)
    Movie.create({
      title: 'The pursuit of happyness',
      yearOfRelease: '2006',
      synopsis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    }).then(movie => movie)
    Movie.create({
      title: 'The Godfather',
      yearOfRelease: '1972',
      synopsis: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    }).then(movie => movie)
  })
  .catch(console.error)

module.exports = db
