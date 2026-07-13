const parametros = new URLSearchParams(window.location.search);
const idProducto = parametros.get("id");

const producto = productos.find(function (item) {
    return item.id === idProducto;
});

const contenedor = document.getElementById("producto-detalle");

if (!producto) {
    contenedor.innerHTML = `
        <h1>Producto no encontrado</h1>
        <p><a href="productos.html">Volver al catálogo</a></p>
    `;
} else {
    const webpSrc = producto.imagen.replace(/\.(png|jpg)$/, ".webp");

    const listaIngredientes = producto.ingredientes
        .map(function (ingrediente) {
            return `<li>${ingrediente}</li>`;
        })
        .join("");

    const mensajeWhatsapp = encodeURIComponent(
        "Hola! Quiero consultar por: " + producto.nombre
    );

    contenedor.innerHTML = `
        <div class="detalle-grid">
            <div class="detalle-imagen">
                <picture>
                    <source srcset="${webpSrc}" type="image/webp">
                    <img id="imagen-principal" src="${producto.imagen}" alt="${producto.nombre}" width="554" height="554">
                </picture>
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
