module.exports = function (express) {
  const router = express.Router()

  /* GET home page. */
  router.get('/headers', function (req, res, next) {
    res.json({
      message: 'Backend API in NodeJS with Express!',
      headers: req.headers
    })
  })

  return router
}