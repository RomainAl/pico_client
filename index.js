const socket = io.connect("http://192.168.10.2:1337");
socket.emit("join", "Pico", false);
const v1 = document.getElementById('V1');
const v2 = document.getElementById('V2');
const v3 = document.getElementById('V3');
const v4 = document.getElementById('V4');
const v5 = document.getElementById('V5');

v1.onclick = ()=>{
    let mess = "Vib1";
    socket.emit("mess", mess);
    console.log(mess)
}
v2.onclick = ()=>{
    let mess = "Vib2";
    socket.emit("mess", mess);
    console.log(mess)
}
v3.onclick = ()=>{
    let mess = "Vib3";
    socket.emit("mess", mess);
    console.log(mess)
}
v4.onclick = ()=>{
    let mess = "Vib4";
    socket.emit("mess", mess);
    console.log(mess)
}
v5.onclick = ()=>{
    let mess = "Vib5";
    socket.emit("mess", mess);
    console.log(mess)
}
