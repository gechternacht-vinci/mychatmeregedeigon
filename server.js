const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const PORT = process.env.PORT;
const server = app.listen(PORT,()=> console.log(`running on ${PORT}`))
const cors = require('cors')

app.use(cors())
app.use(express.static('public'))

const io = require('socket.io')(server)
io.sockets.on('connection',socket=>{
    console.log(socket.id) 
    socket.emit("welcome",`hello and wellcome, ${socket.id}`)
    
    socket.on("bodyClick",data=>{
        console.log(`serverside data: ${data}`); 
        socket.broadcast.emit("bodyClick",data)
    })

})


