const botonesAgregar = document.querySelectorAll('.agregar-carrito');
const notificacionAgregado = document.getElementById('notificacion-agregado');
const listaCarrito = document.getElementById('lista-carrito');

botonesAgregar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
});

function agregarAlCarrito(event) {
    const producto = event.target.parentElement;
    const nombre = producto.querySelector('h2').textContent;
    const precio = parseFloat(producto.querySelector('p').textContent.replace('Precio: $', ''));

    const item = {
        nombre,
        precio
    };

    mostrarNotificacion(nombre);
    mostrarEnCarrito(item);
}

function mostrarNotificacion(nombre) {
    notificacionAgregado.textContent = `${nombre} agregado al carrito`;
    notificacionAgregado.style.display = 'block';

    setTimeout(() => {
        notificacionAgregado.style.display = 'none';
    }, 3000); // Ocultar la notificación después de 3 segundos
}

function mostrarEnCarrito(item) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${item.nombre}</span>
        <span>$${item.precio}</span>
    `;

    listaCarrito.appendChild(li);
}
