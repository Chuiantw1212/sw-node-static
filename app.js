const express = require('express')
const path = require('path')
const cors = require('cors')
// const bodyParser = require('body-parser')
const app = require('express')()
const http = require('http')
// Middleware
app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// Serve statics
app.use("/css", express.static(path.join(__dirname, "Vues", "dist", "css")))
app.use("/img", express.static(path.join(__dirname, "Vues", "dist", "img")))
app.use("/js", express.static(path.join(__dirname, "Vues", "dist", "js")))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "Vues", "dist", "index.html"))
})
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