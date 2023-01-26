const body = document.getElementsByTagName("body")[0];
const texto = document.getElementById("texto");

body.addEventListener("click",pintarOpcion);

function pintarOpcion(evt) {
    var text = "";
    if(evt.target.tagName == "H3"){
    var posicion = evt.target;
    var ul = posicion.nextElementSibling
    
    var arrayElements = ul.children;
    text = "Has elegido " + posicion.textContent.trim() + " en turno de " + posicion.parentElement.id + "</br>Los nº de grupos que se imparten son " + ul.childElementCount + ": ";
    
        for (let i = 0; i < arrayElements.length; i++) {
            if(i != arrayElements.length -1){
                text += arrayElements[i].textContent + ", "
            }else{
                text += "y " + arrayElements[i].textContent;
            }

        }
        texto.innerHTML = text;

}
}


