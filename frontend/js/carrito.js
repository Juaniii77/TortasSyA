let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");

function mostrarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(function (producto, index) {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        listaCarrito.innerHTML += `
            <div class="item-carrito">
                <p>${producto.nombre}${producto.cantidad > 1 ? " (" + producto.cantidad + ")" : ""} - $${subtotal}</p>
                <button onclick="eliminarProducto(${index})">Quitar</button>
            </div>
`;
    });

    totalElemento.textContent = "Total: $" + total;
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

mostrarCarrito();