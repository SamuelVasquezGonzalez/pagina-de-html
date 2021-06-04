// let rotarImagen = document.getElementById("img1");
// var bandera = false;

// rotarImagen.addEventListener("click", function(){
//     if(!bandera){
//         rotarImagen = rotarImagen.style.transform="rotate(90deg)";
//         bandera = true;
//     }else{
//         rotarImagen = rotarImagen.style.transform="rotate(180deg)";
//     }
//     console.log(bandera);

// });

let rotateAngle = 90;

function animacion(image) {
    image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
    rotateAngle = rotateAngle + 90;
    
    
}
