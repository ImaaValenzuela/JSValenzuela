class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

const dakiti = new Producto ("Dakiti", 7050)
const queen = new Producto ("Queen", 6950)
const jack = new Producto ("Jack", 7250)
const gorraVisera = new Producto ("Visera", 1800)
const gorraRasgada = new Producto ("Gorra Rasgada", 2000)
const gorraPlana = new Producto ("Gorra Plana", 1800)

function inicio(){
    let nombre = prompt('Hola de nuevo! Por favor, ingrese su nombre de usuario')
    alert(`Hola ${nombre}! Bienvenido a la Magic Tienda`)
}
inicio()

function seguirComprando(){
    let repregunta = prompt('¿Desea comprar algo mas? (si/no)')
    let eleccion = repregunta.toUpperCase()
    if(eleccion == 'SI'){
        compra()
    }else if(eleccion == 'NO'){
        alert(`Usted compro: \n ${total}`)
        alert('Muchas gracias por tu compra, nos ayudarias compartiendo el producto en Instagram y etiquetandonos @Magic.Tienda')
    }else{
        alert('Ingrese una opción valida')
        seguirComprando()
    }
}

let total = []

function compra(){
    let pregunta = prompt('¿Qué desea comprar? \n 1- Zapatillas \n 2- Gorras')
    let eleccion = pregunta.toUpperCase()
    if(eleccion == 1){
        let opciones = parseFloat(prompt(`Nuestras opciones son: \n 1. ${dakiti.nombre}: $${dakiti.precio} \n 2. ${queen.nombre}: $${queen.precio} \n 3. ${jack.nombre}: $${jack.precio}`))
        switch(opciones){
            case 1:
                total.push(`${dakiti.nombre}: ${dakiti.precio}\n`)
                seguirComprando()
                break
            case 2:
                total.push(`${queen.nombre}: ${queen.precio}\n`)
                seguirComprando()
                break
            case 3:
                total.push(`${jack.nombre}: ${jack.precio}\n`)
                seguirComprando()
                break
            default:
                alert("Por favor, seleccione una opcion valida")
                compra()
        }
    }else if(eleccion == 2){
        let opciones = parseInt(prompt(`Nuestras opciones son: \n 1. ${gorraPlana.nombre}: $${gorraPlana.precio} \n 2. ${gorraRasgada.nombre}: $${gorraRasgada.precio} \n 3. ${gorraVisera.nombre}: $${gorraVisera.precio}`))
        switch(opciones){
            case 1:
                total.push(`${gorraPlana.nombre}: ${gorraPlana.precio}\n`)
                seguirComprando()
                break
            case 2:
                total.push(`${gorraRasgada.nombre}: ${gorraRasgada.precio}\n`)
                seguirComprando()
                break
            case 3:
                total.push(`${gorraVisera.nombre}: ${gorraVisera.precio}\n`)
                seguirComprando()
                break
            default: 
                alert("Por favor, seleccione una opcion valida")
                compra()
        }
    }else{
            alert('Por favor, seleccione una opcion valida')
            compra()
    }
}
compra()