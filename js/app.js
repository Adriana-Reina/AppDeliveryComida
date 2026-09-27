let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function registrarUsuario() {

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    if (nombre === "" || correo === "" || password === "") {
        alert("Completa todos los campos");
        return;
    }

    localStorage.setItem("usuario", nombre);

    alert("Registro exitoso");

    window.location.href = "catalogo.html";
}


function iniciarSesion() {

    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    if (correo === "" || password === "") {
        alert("Completa todos los campos");
        return;
    }

    window.location.href = "catalogo.html";
}


function agregarCarrito(nombre, precio) {

    carrito.push({
        nombre: nombre,
        precio: precio
    });

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(nombre + " agregado al carrito");
}


function mostrarCarrito() {

    let contenedor = document.getElementById("productos");

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";

    let subtotal = 0;

    carrito.forEach(function(producto) {

        subtotal += producto.precio;

        contenedor.innerHTML += `
            <p>
                ${producto.nombre} - $${producto.precio}
            </p>
        `;
    });

    let envio = 30;
    let impuestos = subtotal * 0.16;
    let total = subtotal + envio + impuestos;

    document.getElementById("subtotal").textContent =
        "Subtotal: $" + subtotal.toFixed(2);

    document.getElementById("impuestos").textContent =
        "Impuestos: $" + impuestos.toFixed(2);

    document.getElementById("total").textContent =
        "Total: $" + total.toFixed(2);
}


function confirmarPedido() {

    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    alert("Pedido confirmado");

    localStorage.removeItem("carrito");

    window.location.href = "catalogo.html";
}


mostrarCarrito();