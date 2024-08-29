let boton=document.querySelector("button")
let parrafo = document.querySelector("p")


function cambiarTexto(){
    parrafo.textContent = "¡Alguien hizo click!"
}
boton.addEventListener("click", cambiarTexto)
