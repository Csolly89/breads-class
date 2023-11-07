// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const MONGO_URI = process.env.MONGO_URI


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })

// Bakers
const bakersController = require('./controllers/bakers_controller')
app.use('/bakers',bakersController)

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//404 page
app.get('*', (req,res) => {
  res.send('404')
}) 
  
// LISTEN
const start = async () => {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to database')
  app.listen(PORT, () => {
    console.log('listening on port', PORT);
  })
}

start()
