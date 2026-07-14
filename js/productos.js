const contenedorCatalogo = document.getElementById("contenedor-productos");
const filtrosContainer = document.getElementById("filtros");

function renderizarCatalogo(filtro) {
    const productosFiltrados = filtro === "todos"
        ? productos
        : productos.filter(function (p) { return p.categoria === filtro; });

    const cards = productosFiltrados.map(function (producto) {
        const webpSrc = producto.imagen.replace(/\.(png|jpg)$/, ".webp");
        return `
            <a href="producto.html?id=${producto.id}" class="card fade-in visible">
                <picture>
                    <source srcset="${webpSrc}" type="image/webp">
                    <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" width="335" height="335">
                </picture>
                <span class="categoria">${producto.categoria}</span>
                <h3>${producto.nombre}</h3>
            </a>
        `;
    });

    contenedorCatalogo.innerHTML = cards.join("");
}

function inicializarFiltros() {
    if (!filtrosContainer) return;

    const categorias = [];
    productos.forEach(function (p) {
        if (categorias.indexOf(p.categoria) === -1) {
            categorias.push(p.categoria);
        }
    });

    categorias.forEach(function (cat) {
        const btn = document.createElement("button");
        btn.className = "filtro-btn";
        btn.dataset.categoria = cat;
        btn.textContent = cat;
        filtrosContainer.appendChild(btn);
    });

    filtrosContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("filtro-btn")) {
            document.querySelectorAll(".filtro-btn").forEach(function (b) {
                b.classList.remove("activo");
            });
            e.target.classList.add("activo");
            renderizarCatalogo(e.target.dataset.categoria);
        }
    });
}

renderizarCatalogo("todos");
inicializarFiltros();
