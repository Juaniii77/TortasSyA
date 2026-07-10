const contenedorCatalogo = document.getElementById("contenedor-productos");

function renderizarCatalogo() {
    productos.forEach(function (producto) {
        contenedorCatalogo.innerHTML += `
            <a href="producto.html?id=${producto.id}" class="card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <span class="categoria">${producto.categoria}</span>
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
            </a>
        `;
    });
}

renderizarCatalogo();