var boton = document.getElementsByClassName("BotonAñadir")[0];
var texto = document.getElementsByClassName("AñadirElemento");
var lista = document.getElementsByClassName("lista")[0];

boton.addEventListener("click", () =>{
  var ul =  lista.firstElementChild.nextElementSibling
  var nuevoLi = document.createElement("li")
  var t=texto[0].value;
  if(t.length>0){
     nuevoLi.innerHTML = t;
     ul.appendChild(nuevoLi);
  }
})
