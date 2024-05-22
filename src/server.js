require ('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// Express settings from rest-rant
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride('_method'))

app.use('/places', require ('./controllers/videos-controller'))

app.get('/', (req, res) => {
    res.send('i dont like panos')
})

app.get('*', (req, res) => {
    res.status(404).render('error404')
})

app.listen(3000)