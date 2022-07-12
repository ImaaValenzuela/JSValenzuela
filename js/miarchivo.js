const productos = [
    {id:01, tipo:"Zapas", nombre:"Dakiti Reflex", precio: 6500, foto: "./media/dakiti.jpeg" },
    {id:02, tipo:"Zapas", nombre:"Queen Reflex", precio: 6300, foto: "./media/queen.jpeg" },
    {id:03, tipo:"Zapas", nombre:"Jack Reflex", precio: 7000, foto: "./media/jack.jpeg" },
    {id:04, tipo:"Gorras", nombre:"Gorra LA", precio: 2000, foto: "./media/gorrala.jpeg" },
    {id:05, tipo:"Gorras", nombre:"Gorra NY", precio: 2000, foto: "./media/gorrany.jpeg" },
    {id:06, tipo:"Gorras", nombre:"Gorra RB", precio: 2300, foto: "./media/gorrarb.jpeg" },
];


let carrito = [];
let sectionProductos = document.getElementById("section-productos");
let sectionCarrito = document.getElementById("section-carrito");

let totalCompra = document.createElement("div");
totalCompra.innerHTML = "<h2>Total: $</h2>";
sectionCarrito.appendChild(totalCompra);

let montoTotalCompra = document.createElement("h2");
montoTotalCompra.innerText = "0";
totalCompra.appendChild(montoTotalCompra);

let cantidadProductos = document.createElement("div");
cantidadProductos.innerHTML = "<h3>Mi Carrito: </h3>";
sectionCarrito.appendChild(cantidadProductos);

let cantProductos = document.createElement("h3");
cantProductos.innerText = " 0";
cantidadProductos.appendChild(cantProductos);

let botonFinalizar = document.createElement("button");
botonFinalizar.innerText = "Finalizar compra";
sectionCarrito.appendChild(botonFinalizar);
botonFinalizar.setAttribute("class", "boton");

botonFinalizar.onclick = () => {
    const precioFinal = montoTotalCompra.innerText;
    alert("Muchas Gracias por su compra, el total es: $" + precioFinal);
    vaciarCarrito();
}

for (const producto of productos) {
    let container = document.createElement("div");
    container.setAttribute("class", "card-product");
    container.innerHTML = ` <div class="img-container">
                            <img src="${producto.foto}" alt="${producto.nombre}" class="img-product"/>
                            </div>
                            <div class="info-producto">
                            <p class="font">${producto.nombre}</p>
                            <strong class="font">$${producto.precio}</strong>
                            <button class="boton" id="${producto.id}"> Agregar al carrito </button>
                            </div>`;
    sectionProductos.appendChild(container);
    document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);
}


function agregarAlCarrito(id) {
    carrito.push(productos.find(p => p.id == id));
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotalCarrito();
}

function calcularTotalCarrito() {
    let total = 0;
    for (const producto of carrito) {
        total += producto.precio;
    }
    montoTotalCompra.innerText = total;
    cantProductos.innerText = carrito.length;
}

function vaciarCarrito() {
    montoTotalCompra.innerText = "0";
    cantProductos.innerText = "0";
    localStorage.clear();
    carrito=[];
}