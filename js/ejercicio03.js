var boton = document.getElementsByClassName("BotonAñadir")[0];
var lista = document.getElementsByClassName("lista")[0];
boton.addEventListener("click", () =>{
  var ul =  lista.firstElementChild.nextElementSibling
  var nuevoLi = document.createElement("li")
  nuevoLi.innerHTML = "prueba"
  ul.appendChild(nuevoLi);
    console.log(ul.children)
})
