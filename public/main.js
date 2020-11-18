function messageBox(message){

    const box= document.createElement("div");
    box.innerHTML = message;
    document.getElementById("chat-box").appendChild(box);
}


const socket = io.connect("https://mychatmeregedeigon.herokuapp.com/")
socket.on("welcome",data => document.querySelector('header').innerHTML = data)
socket.on("bodyClick",data => {
    console.log(`received: ${data}`)
    messageBox(`received: ${data}`)
});

document.querySelector('body').addEventListener("click",()=>{
    let messageContent = document.querySelector('input').value;
    socket.emit("bodyClick",messageContent);

    messageBox(`sending message:${messageContent}`)
    console.log(`sending message:${messageContent}`);
})


