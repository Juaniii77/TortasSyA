// 1. Leemos el "id" que viene en la URL (ej: producto.html?id=torta-chocolate)
const parametros = new URLSearchParams(window.location.search);
const idProducto = parametros.get("id");

// 2. Buscamos ese producto dentro del array que viene de data-productos.js
const producto = productos.find(function (item) {
    return item.id === idProducto;
});

const contenedor = document.getElementById("producto-detalle");

// 3. Si no se encontró el producto (URL rota, id mal escrito, etc.)
if (!producto) {
    contenedor.innerHTML = `
        <h1>Producto no encontrado</h1>
        <p><a href="productos.html">Volver al catálogo</a></p>
    `;
} else {
    // 4. Armamos la lista de ingredientes como <li>
    const listaIngredientes = producto.ingredientes
        .map(function (ingrediente) {
            return `<li>${ingrediente}</li>`;
        })
        .join("");

    // 5. Armamos el mensaje pre-cargado para WhatsApp
    const mensajeWhatsapp = encodeURIComponent(
        "Hola! Quiero consultar por: " + producto.nombre
    );

    // 6. Pintamos todo el detalle en el contenedor
    contenedor.innerHTML = `
        <div class="detalle-grid">
            <div class="detalle-imagen">
                <img id="imagen-principal" src="${producto.imagen}" alt="${producto.nombre}">
                <p class="hint-zoom"> Click en la imagen para hacer zoom</p>
            </div>

            <div class="detalle-info">
                <span class="categoria">${producto.categoria}</span>
                <h1>${producto.nombre}</h1>
                <p class="precio">$${producto.precio}</p>
                <p class="descripcion">${producto.descripcion}</p>

                <h3>¿Qué lleva?</h3>
                <ul class="lista-ingredientes">
                    ${listaIngredientes}
                </ul>

                <a href="https://wa.me/549358000000?text=${mensajeWhatsapp}" target="_blank" class="btn-whatsapp">
                     Consultar por WhatsApp
                </a>
            </div>
        </div>
    `;

    // 7. Lógica del zoom
    const imagenPrincipal = document.getElementById("imagen-principal");
    const overlay = document.getElementById("zoom-overlay");
    const imagenZoom = document.getElementById("zoom-imagen");

    imagenPrincipal.addEventListener("click", function () {
        imagenZoom.src = producto.imagen;
        overlay.classList.add("activo");
    });

    overlay.addEventListener("click", function () {
        overlay.classList.remove("activo");
    });
}