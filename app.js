const http = require('http')

http.createServer( (req,res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    const persona = {
        id: 1,
        nombre: 'Steven'
    }
    res.write(persona)
    res.end()
}).listen( 3000 )

console.log('||ON|| 3000')