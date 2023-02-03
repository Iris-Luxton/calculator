const express = require('express')
const router = express.Router()
const model = require('./model')
const middleware = require('./middleware')

router.use(middleware.authenticate)
router.get('/', (req, res) => {
  const data = model.getData()
  res.render('index', { data })
})
router.post('/', (req, res) => {
  model.saveData(req.body)
  res.redirect('/')
})