
/*
//--------------Ejercicio resuelto con getElementById
var color= document.getElementById("colorTexto");
var cambiar=document.getElementById("cambiar");
var titulo=document.getElementById("titulo");



cambiar.addEventListener('click', () => {

    var elegido= color.value;
    color.select();
    titulo.style.color = elegido;
})

color.addEventListener("input", actualizar, false);

 // detecta el nuevo color 
function actualizar(event) {
    elegido= event.target.value;
}
*/


//--------------Ejercicio resuelto con getElementByTagName


var color= document.getElementById("colorTexto");
var cambiar=document.getElementById("cambiar");
var titulo=document.getElementsByTagName("h2")[0];



cambiar.addEventListener('click', () => {

    var elegido= color.value;
    color.select();
    titulo.style.color=elegido;
})

color.addEventListener("input", actualizar, false);

 // detecta el nuevo color 
function actualizar(event) {
    elegido= event.target.value;
} 