var countRequest = 0
// MIDDLEWARE FOR API REQUEST LIMITATION
module.exports = (req, res, next) => {
  countRequest++
  if (countRequest > 5) {
    return res.status(429).json({
      status: 429,
      message: 'Too Many Requests',
    })
  }
  next()
}
