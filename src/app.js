const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()
const port = process.env.PORT || 3000;


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index')
})
app.get('/livescore', (req, res) => {
  res.render('livescore')
})
app.get('/schedule', (req, res) => {
  res.render('schedule')
})
app.get('/cricket', (req, res) => {
  res.render('cricket')
})
app.get('/football', (req, res) => {
  res.render('football')
})
app.get('/tennis', (req, res) => {
  res.render('tennis')
})


app.get('*', (req, res) => {
  res.send('<h1 style="text-align:center;">404!</h1>')
})
app.listen(port, (req, res) => {
  console.log("Server is running on port " + port)
})