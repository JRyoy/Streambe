let boton = document.querySelector("#LoginForm button");
function cambiarTexto(event) {
    event.preventDefault(); 
    boton.textContent = "¡Enviado!";
}
boton.addEventListener("click", cambiarTexto);
