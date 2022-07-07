class Producto{
    constructor(nombre, precio, foto, categoria, id){
        this.nombre = nombre
        this.precio = precio
        this.foto = foto
        this.categoria = categoria
        this.id = id
    }
};
class Carrito {
    constructor(id, productos) {
    this.id = id;
    this.productos = productos;
    }
    calcularTotal() {
    let sumatoria = 0;
    for(let i = 0; i < this.productos.length; i++) {
        sumatoria = sumatoria + this.productos[i].precio; 
    }
    return sumatoria;
    }
};
let carrito = new Carrito(1, []);
let totalCompra = document.getElementById("totalCompra");
let card = document.getElementById("card");
const listaProductos = [];
const catalogo = [];
let nombre = prompt('¡Hola! Bienvenido a la Magic Tienda ¿Cómo es tu nombre?');
const jack = new Producto ("Jack Black", 7100, "./media/jack.jpeg", "zapa", 1);
const dakiti = new Producto ("Dakiti Black", 6500, "./media/dakiti.jpeg", "zapa", 2);
const queen = new Producto ("Queen Black", 6200, "./media/queen.jpeg", "zapa", 3);
const gorraLa = new Producto ("Gorra Los Angeles", 2000, "./media/gorrala.jpeg", "gorra", 4);
const gorraNy = new Producto ("Gorra New York", 2000, "./media/gorrany.jpeg", "gorra", 5);
const gorraRb = new Producto ("Gorra Red Bull", 2300, "./media/gorrarb.jpeg", "gorra", 6);
catalogo.push(jack);
catalogo.push(dakiti);
catalogo.push(queen);
catalogo.push(gorraLa);
catalogo.push(gorraNy);
catalogo.push(gorraRb);

function cards(){
for(const producto of listaProductos){
    let columna = document.createElement("div");
    columna.className = "col-md-3 col-sm-12 mt-5";
    columna.id = `columna-${producto.id}`;
    columna.innerHTML = 
                `<div class="card">
                    <img src=${producto.foto} style="width: 16rem; height: 16rem;" class="card-img-top" alt="Producto">
                    <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio}</p>
                    </div>
                </div>`
    card.append(columna);
}
};

function seguirComprando(){
let repregunta = prompt('¿Le gustaria comprar algo mas? (si/no)');
let eleccion = repregunta.toUpperCase();
if(eleccion == 'SI'){
    menu();
}else if(eleccion == 'NO'){
    carrito.productos = listaProductos;
    cards();
    const total = carrito.calcularTotal();
    totalCompra.innerHTML = `<p>El total de su compra es de: <b>$${total}</b></p>`;
}else{
    alert('Ingrese una opción valida');
    seguirComprando();
}
};

function menu(){
    let codigo = parseInt(prompt(`${nombre}, nuestro catalogo es el siguiente: \n 1. ${jack.nombre}: $${jack.precio} \n 2. ${dakiti.nombre}: $${dakiti.precio} \n 3. ${queen.nombre}: $${queen.precio} \n 4. ${gorraLa.nombre}: $${gorraLa.precio} \n 5. ${gorraNy.nombre}: $${gorraNy.precio} \n 6. ${gorraRb.nombre}: $${gorraRb.precio}\n IMPORTANTE: Por Favor seleccione un numero de la opcion que desee`));
    let productoSeleccionado = catalogo.find(producto => producto.id == codigo);
    listaProductos.push(productoSeleccionado);
    seguirComprando();
};
menu();