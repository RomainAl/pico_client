if (location.protocol !== 'https:') { // TODO
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
    alert("Go HTTPS !");
  }
const socket = io.connect("https://mypicoserv-unuojesj3q-od.a.run.app");
socket.emit("join", "Pico", false);
const v1 = document.getElementById('V1');
const v2 = document.getElementById('V2');
const v3 = document.getElementById('V3');
const v4 = document.getElementById('V4');
const v5 = document.getElementById('V5');
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate; 

v1.onclick = ()=>{
    let mess = "Vib1";
    socket.emit("mess", mess);
    console.log(mess);
    if (navigator.vibrate){ navigator.vibrate(500); }
}
v2.onclick = ()=>{
    let mess = "Vib2";
    socket.emit("mess", mess);
    console.log(mess);
    if (navigator.vibrate){ navigator.vibrate(500); }
}
v3.onclick = ()=>{
    let mess = "Vib3";
    socket.emit("mess", mess);
    console.log(mess);
    if (navigator.vibrate){ navigator.vibrate(500); }
}
v4.onclick = ()=>{
    let mess = "Vib4";
    socket.emit("mess", mess);
    console.log(mess);
    if (navigator.vibrate){ navigator.vibrate(500); }
}
v5.onclick = ()=>{
    let mess = "Vib5";
    socket.emit("mess", mess);
    console.log(mess);
    if (navigator.vibrate){ navigator.vibrate(500); }
}
