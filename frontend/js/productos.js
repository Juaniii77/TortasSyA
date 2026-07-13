const contenedorCatalogo = document.getElementById("contenedor-productos");

function renderizarCatalogo() {
    const cards = productos.map(function (producto) {
        const webpSrc = producto.imagen.replace(/\.(png|jpg)$/, ".webp");
        return `
            <a href="producto.html?id=${producto.id}" class="card">
                <picture>
                    <source srcset="${webpSrc}" type="image/webp">
                    <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" width="335" height="335">
                </picture>
                <span class="categoria">${producto.categoria}</span>
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
            </a>
        `;
    });

    contenedorCatalogo.innerHTML = cards.join("");
}

renderizarCatalogo();
