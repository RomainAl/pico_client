const socket = io.connect("http://192.168.10.2:1337");
// const socket = io.connect("https://pico-server-late-breeze-8245.fly.dev");
socket.emit("join", "Pico", false);
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

const btns = document.getElementsByTagName("button");
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = () => {
    let mess = btns[i].getAttribute("id");
    socket.emit("mess", mess);
    console.log(mess);
    if (navigator.vibrate) {
      navigator.vibrate(500);
    }
  };
}
