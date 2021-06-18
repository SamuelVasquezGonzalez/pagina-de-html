let dalto = document.getElementById("dalto");
let rotateAngle = 90;

function animacion(image) {
    image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
    rotateAngle = rotateAngle + 90;  
}


window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
      for(var i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
  })