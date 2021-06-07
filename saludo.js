var time = document.getElementById("saludo");

function writeDate () {
var today = new Date();
time.innerHTML = "" + today.getHours() +":" + today.getMinutes() + ":" + today.getSeconds();
}

setInterval(writeDate, 1000);