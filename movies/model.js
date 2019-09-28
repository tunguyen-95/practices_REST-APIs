const Sequelize = require('sequelize')
const db = require('../db')

const Movie = db.define(
  'movie',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.TEXT,
    },
    yearOfRelease: {
      type: Sequelize.INTEGER,
    },
    synopsis: {
      type: Sequelize.TEXT,
    },
  },
  { tableName: 'movies' }
)

module.exports = Movie
