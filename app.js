const hbs = require('hbs')
const express = require('express')

const config = require('./config/config')

const app = express()

// HANDLEBARS
app.set('view engine', 'hbs')
hbs.registerPartials( __dirname + '/views/partials' )

// CONTENIDO ESTATICO
app.use( express.static('public') )

// RUTAS
app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Steven Mosquera',
        proyecto: 'Web Server'
    })
})

app.get('/elements', (req,res) => {
    res.render('elements', {
        nombre: 'Steven Mosquera',
        proyecto: 'Web Server'
    })
})

app.get('/generic', (req,res) => {
    res.render('generic', {
        nombre: 'Steven Mosquera',
        proyecto: 'Web Server'
    })
})

app.get('*', (req,res) => {
    res.sendFile(__dirname + '/public/404.html')
})

// SERVIDOR
app.listen(config.port, () => console.log(`||ON|| ${config.port}`))