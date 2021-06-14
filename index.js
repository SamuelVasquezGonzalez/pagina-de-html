let subir = document.getElementById("subir");
let rotateAngle = 90;

function animacion(image) {
    image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
    rotateAngle = rotateAngle + 90;  
}