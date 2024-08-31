const portafolio = document.querySelector(".portafolio");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const contenedor = document.querySelector(".container");

contact.addEventListener("click", () => {
    contenedor.innerHTML = "";
    contenedor.style = "";
    contenedor.innerHTML = `<div class="container">
    <form action="/backend" method="POST" id="ContactForm">
    <p>nombre</p>
        <input type="text" name="nombre" id="nombre">
    <p>email</p>
        <input type="text" name="email" id="email">
    <p>Numero</p>
        <input type="text" name="Numero" id="Numero">
    <p>Mensaje</p>
        <input type="text" name=""Mensaje id="Mensaje">
    <div class="button" >
    <button type="submit">RegistrarContacto</button>
    </div>
    </form>`;
});


about.addEventListener("click", () => {
    contenedor.innerHTML = "";
    contenedor.style = "";
    contenedor.innerHTML = `<div class="container">
        <img src="/Jos.png">
        <p>Nombre: Josbert</p>
        <p>Apellido: Rizzo</p>
        <p>Descripcion: En la Escuela Técnica N°12 de San Martín, he adquirido formación integral en programación, destacando conocimientos avanzados en C# y .NET. El programa incluyó:
            C#: Desarrollo de aplicaciones con un enfoque en la programación orientada a objetos.
            .NET Framework: Creación de aplicaciones web, de escritorio y servicios web, integrando diversas tecnologías.
            Desarrollo de Software: Prácticas en todo el ciclo de vida del desarrollo de software, desde el diseño hasta el mantenimiento.
            Además, he aprendido a trabajar en equipo y aplicar metodologías ágiles, fortaleciendo mis habilidades en el campo tecnológico.</p>
    </div>`;
});


portafolio.addEventListener("click", () => {
    contenedor.innerHTML = "";
    contenedor.style = "";
    contenedor.style.display = "flex";
    contenedor.style.justifyContent = "space-around"
    contenedor.innerHTML = `
    <p style="%;">Proyectos</p>
    <a href="/Proyectos/">Documentos</a>
    <div class="container">
    <img style="width: 100%; height: 75%; object-fit: contain; margin-top: 75px; opacity: 0.7;" src="/Tortu.png" >
    </div> 
    `;
});