const express = require('express')
const app = express()
const PORT = 3000;
const server = app.listen(PORT,()=> console.log(`running on ${PORT}`))
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


