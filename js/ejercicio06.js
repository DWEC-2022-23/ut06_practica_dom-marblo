let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";


 window.addEventListener("load",iniciar);
 function iniciar(){
  listDiv = document.querySelector('.list');
  listUl = listDiv.querySelector('ul');
  lis = listUl.children;
  toggleList = document.getElementById('toggleList');
  descriptionInput = document.querySelector('input.description');
  descriptionP = document.querySelector('p.description');
  descriptionButton = document.querySelector('button.description');
  addItemInput = document.querySelector('input.addItemInput');
  addItemButton = document.querySelector('button.addItemButton');

  for (let i = 0; i < lis.length; i += 1) {
     attachListItemButtons(lis[i]);
    }
  listUl.addEventListener('click', crearbotones); 
  toggleList.addEventListener('click', MostrarOcultarLista);
  descriptionButton.addEventListener('click', CambiarTextoLista); 
  addItemButton.addEventListener('click', AñadirElemento); 
}
 
 function attachListItemButtons(li) {
   let subir = document.createElement('button');
   subir.className = 'subir';
   subir.textContent = 'subir';
   li.appendChild(subir);

   let bajar = document.createElement('button');
   bajar.className = 'bajar';
   bajar.textContent = 'bajar';
   li.appendChild(bajar);  

   let borrar = document.createElement('button');
   borrar.className = 'borrar';
   borrar.textContent = 'borrar';
   li.appendChild(borrar);
 }

 function crearbotones(event) {

  if(event.target.className == "borrar"){
    var boton = event.target;
    var padreLi = boton.parentElement
    var padreUl = padreLi.parentElement;

    padreUl.removeChild(padreLi)
                
 }

 if(event.target.className == "subir"){
  var boton = event.target;
  var elementoLiSubir = boton.parentElement
  var elementoLiBajar = elementoLiSubir.previousElementSibling
  if(elementoLiBajar!=null){
    var padreUl = elementoLiSubir.parentElement;
  var aux2= elementoLiBajar;
  const node = elementoLiSubir;
  const clone = node.cloneNode(true);
  padreUl.replaceChild(clone,elementoLiBajar);
  padreUl.replaceChild(aux2,elementoLiSubir);
  }
           
}

if(event.target.className == "bajar"){
  var boton = event.target;
  var elementoLiBajar = boton.parentElement
  var elementoLiSubir = elementoLiBajar.nextElementSibling
  if(elementoLiSubir!=null){
    var padreUl = elementoLiBajar.parentElement;
  var aux2= elementoLiSubir;
  const node = elementoLiBajar;
  const clone = node.cloneNode(true);
  padreUl.replaceChild(clone,elementoLiSubir);
  padreUl.replaceChild(aux2,elementoLiBajar);
              
}
}
 }

 function MostrarOcultarLista(){
  if(toggleList.innerHTML == "Ocultar lista"){
    listDiv.style.visibility = "hidden"
    toggleList.innerHTML = "Mostrar lista"
  }else{
    listDiv.style.visibility = "visible"
    toggleList.innerHTML = "Ocultar lista"
  }


 }
 function CambiarTextoLista(){
  descriptionP.innerHTML = descriptionInput.value;

 }
 function AñadirElemento(){
  
  var nuevoLi = document.createElement("li")
  var t=addItemInput.value;
  if(t.length>0){
     nuevoLi.innerHTML = t;
      listUl.appendChild(nuevoLi);
  }

  attachListItemButtons(nuevoLi);

 }

