var boton = document.getElementById("boton");
var body = document.getElementsByTagName("body")[0];

boton.addEventListener("click", () =>  {
    body.classList.toggle("inverso");
    (boton.innerHTML == "Fondo oscuro" ? boton.innerHTML = "Fondo claro" : boton.innerHTML = "Fondo oscuro");
})