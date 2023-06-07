
window.onload = function(){

//Funciones encriptar-desencriptar
var con1= "enter";
var con2="imes";
var con3="ai";
var con4="ober";
var con5="ufat";

function encriptar(palabra){
    let palabraEncriptar = Array.from(palabra);
    let palabraEncriptada= [];

    for(let i= 0; i<palabraEncriptar.length; i++){
        if(palabraEncriptar[i] == "e"){
            palabraEncriptada.push(con1);
        }
        else if(palabraEncriptar[i] == "i"){
            palabraEncriptada.push(con2);
        }

        else if(palabraEncriptar[i] == "a"){
            palabraEncriptada.push(con3);
        }

        else if(palabraEncriptar[i] == "o"){
            palabraEncriptada.push(con4);
        }

        else if(palabraEncriptar[i] == "u"){
            palabraEncriptada.push(con5);
        }
        else{
            palabraEncriptada.push(palabraEncriptar[i]);
        }

    }

    let resultado = palabraEncriptada.join("");
    return resultado;
}

    function desencriptar(palabra){

      

      let res = palabra.replace(new RegExp( con1 ,"ig"),"e");
      let res2 = res.replace(new RegExp( con2 ,"ig") , "i");
      let res3 = res2.replace(new RegExp( con3 ,"ig" ), "a");
      let res4=  res3.replace(new RegExp( con4 ,"ig"), "o");
      let res5=  res4.replace(new RegExp( con5 ,"ig" ), "u");
      return res5;

    }

    function crearElemento(elemento, contenido){
        let parrafoRes = document.createElement(elemento);
        parrafoRes.textContent = contenido;
        return parrafoRes;
    }

    function validarTexto(texto){
        if(/^[a-z0-9\s]+$/.test(texto)){
            return false 
        } else{
            return true
        }
    }

//Interacciones

const botonEncriptar = document.getElementById('btn-encriptar');
const botonDesencriptar = document.getElementById('btn-desencriptar');
const muneco = document.getElementById("muneco");
const munieco = document.getElementById("munieco");
const res1 = document.getElementById("p-res1");
const res2 = document.getElementById("p-res2");

const resZona = document.getElementById("resultado");

/////////ENCRIPTAR///////////////////
botonEncriptar.onclick = function(){
    
    let textoUsuario = document.getElementById("text-area").value;
    if(textoUsuario.length<1){
        return alert("Debes insertar texto");
    }
    if (validarTexto(textoUsuario)){
        return alert("Solo puedes insertar texto en minúsculas, sin carácteres ni acentos.");
    }


    let textoEncriptadoTest = document.getElementById("respuesta");
    if(textoEncriptadoTest){
        let textoRemplazo = encriptar(textoUsuario);
         textoEncriptadoTest.innerHTML = textoRemplazo;
    } else{

    muneco.remove();
    munieco.remove();
    res1.remove();
    res2.remove();
    let resultado = encriptar(textoUsuario);
    let textoEncriptado =  crearElemento("p" ,resultado);
    textoEncriptado.setAttribute("id", "respuesta");
    
    
    textoEncriptado.innerHTML = resultado;
    resZona.insertAdjacentElement("afterbegin", textoEncriptado);

    const button = document.createElement('button'); 
    button.type = 'button'; 
    button.setAttribute("id", "copiar");
    let copiarTexto = crearElemento("p", "copiar");
    copiarTexto.innerText = "Copiar";
    copiarTexto.setAttribute("id", "copiar-texto");
    button.appendChild(copiarTexto);

    
    botonCopiar.style.display = "flex";
    resZona.insertAdjacentElement("beforeend", botonCopiar);

     
     
     
    
     
      

    }    
}

/////////////////DESENCRIPTAR///////////////////////////////////
botonDesencriptar.onclick = function(){
    let textoUsuario = document.getElementById("text-area").value;
    if(textoUsuario.length<1){
        return alert("Debes insertar texto");
    } 
    if (validarTexto(textoUsuario)){
        return alert("Solo puedes insertar texto en minúsculas, sin carácteres ni acentos.");
    }

    let textoEncriptadoTest = document.getElementById("respuesta");
    if(textoEncriptadoTest){
        let textoRemplazo = desencriptar(textoUsuario);
         textoEncriptadoTest.innerHTML = textoRemplazo;
    }else{
        muneco.remove();
        munieco.remove();
        res1.remove();
        res2.remove();
        let resultado = desencriptar(textoUsuario);
        let textoEncriptado =  crearElemento("p" ,resultado);
        textoEncriptado.setAttribute("id", "respuesta");
        
        
        textoEncriptado.innerHTML = resultado;
        resZona.insertAdjacentElement("afterbegin", textoEncriptado);
    
        
        

        const button = document.createElement('button'); 
        button.type = 'button'; 
        button.setAttribute("id", "copiar");
        let copiarTexto = crearElemento("p", "copiar");
        copiarTexto.innerText = "Copiar";
        copiarTexto.setAttribute("id", "copiar-texto");
        button.appendChild(copiarTexto);
    
        
        botonCopiar.style.display = "flex";
        resZona.insertAdjacentElement("beforeend", botonCopiar);
        
        }    
    }

}

function copiarTextoFun(boton, origen) {
    // Obtener el elemento de origen del texto
    const elementoOrigen = document.getElementById(`"${origen}"`);
  
    // Seleccionar el texto del elemento de origen

    console.log(origen);
    console.log(elementoOrigen)
    elementoOrigen.select();
  
    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");
  
    // Desseleccionar el texto
    window.getSelection().removeAllRanges();
  
    console.log("texto copiado " + elementoOrigen.value);
  
    // Devolver el texto copiado para que se pueda utilizar en la lógica de la aplicación
     
    return elementoOrigen.value;
  }

  
const botonCopiar = document.createElement("button");
botonCopiar.id = "copiar";
botonCopiar.type = "button";

let copiarTextoBoton = document.createElement("p");
copiarTextoBoton.innerHTML = "Copiar";
copiarTextoBoton.id = "copiar-texto";

botonCopiar.appendChild(copiarTextoBoton);

botonCopiar.style.display = "none";


botonCopiar.onclick = function(){
    let textoaCopiar = document.getElementById("respuesta");
    let textoACopiarInput = document.createElement("input");


    textoACopiarInput.value = textoaCopiar.innerHTML;
     textoACopiarInput.setAttribute("id", "textCopy");
   
    document.body.insertAdjacentElement("beforeend", textoACopiarInput);
     console.log(textoACopiarInput.id);

     console.log(textoACopiarInput);
    
     textoACopiarInput.select();

     document.execCommand("copy");

     
    textoACopiarInput.remove();

    let textoT = document.getElementById("copiar-texto");

    textoT.innerHTML = "Texto copiado!";

    setTimeout(() => {
    textoT.innerHTML = "Copiar";       
    }, 2000);
    
     


    } 




/*

  const button = document.createElement('button'); 
    button.type = 'button'; 
    button.setAttribute("id", "copiar");
    let copiarTexto = crearElemento("p", "copiar");
    copiarTexto.innerText = "Copiar";
    copiarTexto.setAttribute("id", "copiar-texto");
    button.appendChild(copiarTexto);

    let textoACopiar = crearElemento("input", textoEncriptado.innerHTML);
     textoACopiar.setAttribute("id", "textCopy");
     document.body.insertAdjacentElement('beforeend', textoACopiar);
     textoACopiar.value= textoEncriptado.innerHTML;


const button = document.createElement('button'); 
button.type = 'button'; 
button.setAttribute("id", "copiar");
let copiarTexto = crearElemento("p", "copiar");
copiarTexto.innerText = "Copiar";
copiarTexto.setAttribute("id", "copiar-texto");
button.appendChild(copiarTexto);




*/


