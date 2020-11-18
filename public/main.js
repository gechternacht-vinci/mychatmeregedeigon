const socket = io.connect("https://mychatmeregedeigon.herokuapp.com/")
socket.on("welcome",data => document.querySelector('header').innerHTML = data)
socket.on("bodyClick",data => console.log(`received: ${data}`));

document.querySelector('body').addEventListener("click",()=>{
    let messageContent = document.querySelector('input').value;
    socket.emit("bodyClick",messageContent);
    console.log(`sending message:${messageContent}`);
})


