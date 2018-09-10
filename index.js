const path = require('path')
const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(function(req, res, next){
  console.log('1')
  next(new Error('haha'))
})

app.use(function(err, req, res, next){
  res.status(500).send('something broke!')
})

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(3000)