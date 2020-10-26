const express = require("express")
const app = express()
const socketio = require("socket.io")

app.use(express.static(__dirname + "/public"))

const PORT =  process.env.PORT || 8000

const expressServer = app.listen(PORT, ()=>{console.log(`server is listing on ${PORT}`)})
const io = socketio(expressServer)
io.on("connection", (socket)=>{
    socket.on("newMessageToServer", (data)=>{
        io.emit("messageToClients", data)
    })
})