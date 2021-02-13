const express = require('express')
const app = express()

// CONTENIDO ESTATICO
app.use( express.static('public') )

// RUTAS
app.get('/', (req,res) => {
    res.send('hola mundo')
})

app.get('*', (req,res) => {
    res.sendFile(__dirname + '/public/404.html')
})

// SERVIDOR
app.listen(3000, () => console.log('||ON|| 3000'))