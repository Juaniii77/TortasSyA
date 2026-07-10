let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const resumenLista = document.getElementById("resumen-lista");
const resumenTotal = document.getElementById("resumen-total");
const form = document.getElementById("form-checkout");

function mostrarResumen() {
    resumenLista.innerHTML = "";
    let total = 0;

    carrito.forEach(function (producto) {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        resumenLista.innerHTML += `
            <p>${producto.nombre}${producto.cantidad > 1 ? " (" + producto.cantidad + ")" : ""} - $${subtotal}</p>
        `;
    });

    resumenTotal.textContent = "Total: $" + total;
}

form.addEventListener("submit", function (evento) {
    evento.preventDefault(); // evita que la página se recargue al enviar el formulario

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const entrega = document.getElementById("entrega").value;
    const comprobante = document.getElementById("comprobante").files[0];

    if (!comprobante) {
        alert("Por favor subí el comprobante de la transferencia");
        return;
    }

    // Por ahora solo simulamos el pedido (después esto va a ir a un backend real)
    console.log("Pedido confirmado:", {
        nombre: nombre,
        telefono: telefono,
        entrega: entrega,
        carrito: carrito,
        comprobante: comprobante.name
    });

    alert("¡Pedido confirmado! Te contactaremos para coordinar la entrega.");

    // Vaciamos el carrito porque el pedido ya se "envió"
    localStorage.removeItem("carrito");

    // Lo mandamos de vuelta al inicio
    window.location.href = "index.html";
});

mostrarResumen();