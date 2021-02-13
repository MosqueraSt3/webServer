const express = require('express')
const app = express()

// HBS
app.set('view engine', 'hbs')

// CONTENIDO ESTATICO
app.use( express.static('public') )

// RUTAS
app.get('/', (req,res) => {
    res.render('home')
})

app.get('/elements', (req,res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('/generic', (req,res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('*', (req,res) => {
    res.sendFile(__dirname + '/public/404.html')
})

// SERVIDOR
app.listen(3000, () => console.log('||ON|| 3000'))