const express = require('express')
const path = require('path')
const cors = require('cors')
const app = require('express')()
const http = require('http')
// Middleware
app.use(cors())
app.use('/', express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "Vues", "dist", "index.html"))
// })
// Allow Cross Origin
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
// Start server
const httpServer = new http.Server(app)
const portNumber = 51202
httpServer.listen(portNumber)
console.log(`Server listen on ${portNumber}`)