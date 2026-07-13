const formContacto = document.getElementById("form-contacto");

formContacto.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Por ahora solo lo mostramos en consola (después esto va a un backend real)
    console.log("Mensaje de contacto:", { nombre, email, mensaje });

    alert("¡Gracias " + nombre + "! Te responderemos a la brevedad.");

    formContacto.reset(); // limpia el formulario
});