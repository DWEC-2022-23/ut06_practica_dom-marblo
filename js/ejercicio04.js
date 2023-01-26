var boton = document.getElementsByClassName("BotonAñadir")[0];
var texto = document.getElementsByClassName("AñadirElemento");
var lista = document.getElementsByClassName("lista")[0];
var borrUlt= document.getElementById("BorrarUltimo");
var borrPrim= document.getElementById("BorrarPrimero");
var ul =  lista.firstElementChild.nextElementSibling

boton.addEventListener("click", () =>{
  var nuevoLi = document.createElement("li")
  var t=texto[0].value;
  if(t.length>0){
     nuevoLi.innerHTML = t;
     ul.appendChild(nuevoLi);
  }
})

borrUlt.addEventListener("click", () =>{
    if(ul.childElementCount>0){ //comprobamos si hay elementos que borrar
    var ultimo= ul.lastElementChild;
    ul.removeChild(ultimo)
    }
})

borrPrim.addEventListener("click", () =>{
    if(ul.childElementCount>0){
    var primero= ul.firstElementChild;
    ul.removeChild(primero)
    }
})