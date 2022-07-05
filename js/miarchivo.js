class Zapatillas{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
;}

const zapatillas = [
    dakiti = (new Zapatillas("1. Dakiti", "6300")),
    queen = (new Zapatillas("2. Queen", "6200")),
    jack = (new Zapatillas("3. Jack", "7000")),
];

const zapatillasConDescuento = zapatillas.map(function(producto){
    if (producto.precio < 6400){
        return producto;
    }
    return{
        ...producto,
        precio: producto.precio - 500
    }
});

const infoZapatillas = zapatillas.map(({nombre}) => nombre);


class Gorras{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
    sumaIva(){
        this.precio = this.precio*1.21;
    }
};

const gorras = [
    gorrany = (new Gorras("1. Gorra New York", "1800")),
    gorraLa = (new Gorras("2. Gorra Los Angeles", "1900")),
    gorraCuero = (new Gorras("3. Gorra de CUERO", "2100")),
];

const infoGorras = gorras.map(({nombre}) => nombre);

const hoy = new Date("July 4,2022");
const entrega = new Date("July 9,2022");
const milisegundosPorDia = 86400000;
const envio = (entrega-hoy) / milisegundosPorDia;

function inicio(){
    alert(`Hola! Bienvenido a la Magic Tienda`)
};
inicio();

function datos(){
    let localidad  = prompt('Por favor ingrese su localidad para la entrega');
    let nombre = prompt ('Ahora ingrese el nombre y apellido de la persona que recibira el pedido');
    alert(`Muchas gracias por tu compra, tu pedido llegara en ${envio} dias, a la localidad de ${localidad} y lo recibira ${nombre}`);
}


let total = [];

function menuGorras (){
    let seleccionGorra = prompt(`Los modelos que tenemos son los siguientes: ${infoGorras.join("\n")}`);
    if (seleccionGorra == 1 ||seleccionGorra == "Gorra New York"){
        total.push(gorrany.precio);
        pago();
    } else if (seleccionGorra == 2 || seleccionGorra == "Gorra Los Angeles"){
        total.push(gorraLa.precio);
        pago();
    } else if (seleccionGorra == 3 || seleccionGorra == "Gorra de CUERO"){
        total.push(gorraCuero.precio);
        pago();
    } else {
        alert("Por favor, seleccione una opcion valida");
    }
};

function menuZapatillas (){
    let seleccionZapa = prompt(`Los modelos que tenemos son los siguientes: ${infoZapatillas.join("\n")}`);
    if (seleccionZapa == 1 ||seleccionZapa == "Dakiti"){
        total.push(dakiti.precio);
        pago();
    } else if (seleccionZapa == 2 || seleccionZapa == "Queen"){
        total.push(queen.precio);
        pago();
    } else if (seleccionZapa == 3 || seleccionZapa == "Jack"){
        total.push(jack.precio);
        pago();
    } else {
        alert("Por favor, seleccione una opcion valida");
        menuZapatillas();
    }
};

function pago (){
    let pago = prompt("Seleccione su metodo de pago:\n 1. Efectivo\n 2.Tarjeta de Credito ");
    if (pago == 1){
        alert(`El total a pagar es: \n ${total}`);
        datos();
    } else if(pago==2){
        alert ("Usted tiene para elegir:");
        for(let i=1; i<=6; i++){
            let interes = parseInt(`${total}`) + 700;
            let cuota = Math.round(interes / i);
            let final = interes;
            alert(`${i} cuota/s de: $${cuota} \n Total de: ${final}`);
        } 
        let cuotas = parseInt(prompt("¿En cuantas cuotas desea pagar?"));
        if(cuotas == 1|| cuotas == 2 || cuotas == 3 || cuotas== 4|| cuotas== 5|| cuotas== 6){
            alert(`Su pago se concreto en ${cuotas} cuota/s`);
        } else{
            alert("Por favor, seleccione una opcion valida");
            (pago);
        }
        datos();
    } else {
        alert("Por favor, ingrese el numero de la opcion que desee");
        pago();
    }
};

function menu (){
    let menu = prompt('¿Que desea comprar? \n 1. Zapatillas\n 2. Gorras');
    if(menu == 1 || menu == '1' || menu == 'Zapatillas'){
        menuZapatillas();
    } else if(menu == 2|| menu == '2' || menu== 'Gorras') {
        menuGorras();
    } else {
        alert("Por favor, seleccione una opcion valida");
        menu();
    }
};

menu();