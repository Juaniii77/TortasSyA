const contenedorDestacados = document.getElementById("productos-destacados");

if (contenedorDestacados) {
    const destacados = productos.slice(0, 3);
    const cards = destacados.map(function (producto) {
        const webpSrc = producto.imagen.replace(/\.(png|jpg)$/, ".webp");
        return `
            <a href="producto.html?id=${producto.id}" class="card">
                <picture>
                    <source srcset="${webpSrc}" type="image/webp">
                    <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" width="335" height="335">
                </picture>
                <span class="categoria">${producto.categoria}</span>
                <h3>${producto.nombre}</h3>
            </a>
        `;
    });
    contenedorDestacados.innerHTML = cards.join("");
}
