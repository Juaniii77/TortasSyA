function agregarAlCarrito(nombre, precio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Buscamos si el producto ya está en el carrito
    const productoExistente = carrito.find(function (item) {
        return item.nombre === nombre;
    });

    if (productoExistente) {
        // Si ya existe, le sumamos 1 a la cantidad
        productoExistente.cantidad += 1;
    } else {
        // Si no existe, lo agregamos con cantidad 1
        carrito.push({ nombre: nombre, precio: precio, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(nombre + " agregado al carrito");
}