function messageCreate(message){

    const box= document.createElement("div");
    box.innerHTML = message;
    document.querySelector("#chat-box").appendChild(box);
    box.scrollIntoView();
}


const socket = io.connect("https://mychatmeregedeigon.herokuapp.com/")
socket.on("welcome",data => document.querySelector('header').innerHTML = data)
socket.on("messageSend",data => {
    console.log(`received: ${data}`)
    messageCreate(`received: ${data}`)
});

function sendMessage(){
    let messageContent = document.querySelector('input');
    if (messageContent.value !== ""){ 
        socket.emit("messageSend",messageContent.value);
        messageCreate(`sending message:${messageContent.value}`)
        messageContent.value = "";
    }
}
document.querySelector('#send-btn').addEventListener("click",sendMessage)


