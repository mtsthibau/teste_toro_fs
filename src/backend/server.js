const express = require('express')
const path = require('path')
const cors = require("cors")
const app = express()
const database = require('./database/index')
const server = require("http").Server(app)
const socketIo = require("socket.io")(server)

socketIo.on("connection", socket => {
    socket.on('connectRoom', box => {
        socket.join(box)
    })
})

app.use(cors())

app.use((req, res, next) => {
    req.io = socketIo
    return next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes'))

database.connect()

server.listen(process.env.PORT || 3333)