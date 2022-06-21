function inicio(){
    let nombre = prompt('¿Cómo es tu nombre?')
    alert(`Hola ${nombre} Bienvenido a la Magic Tienda`)
}
inicio()

function menuSecundario(){
    let menuSec = prompt('¿Desea comprar otro producto? (si/no)')
    if(menuSec == 'si' || menuSec == 'SI' || menuSec == 'Si' ){
        menu()
    }else if(menuSec == 'no' || menuSec == 'NO' || menuSec == 'No'){
        alert('Muchas gracias por tu compra, nos ayudarias compartiendo el producto en Instagram y etiquetandonos @Magic.Tienda')
    }else{
        alert('Ingrese una opción valida')
        menuSecundario()
    }
}

function metodoPago(){
    let pago = prompt('Seleccione su metodo de pago \n 1. Efectivo o Transferencia (15% OFF) \n 2. Tarjeta de Credito (Con Recargo)')
    if(pago == 1){
        let monto = parseFloat(prompt('Ingrese el monto total a pagar de su producto deseado UNICAMENTE EN NUMEROS (Precio Zapatillas: \n Dakiti Reflex: $7050 \n Jack: $7250 \n Queen: $6950 \n Precio Gorras\n Gorra Visera: $1800 \n Gorra Rasgada: $2000 \n Gorra Plana: $1800)')) 
        let descuento = monto * 0.10
        let total = monto - descuento
        alert(`Su pago es de: ${total}`)
    }else if(pago == 2){
        let monto = parseFloat(prompt('Ingrese el monto total a pagar de su producto deseado UNICAMENTE EN NUMEROS (Precio Zapatillas: \n Dakiti Reflex: $7050 \n Jack: $7250 \n Queen: $6950 \n Precio Gorras\n Gorra Visera: $1800 \n Gorra Rasgada: $2000 \n Gorra Plana: $1800)')) 
        alert('Usted tiene para elegir:')
        for(let i = 1; i <= 6; i++){
            let interes = monto * (i * 0.05)
            let cuota = Math.round((monto + interes) / i) 
            let total = Math.round(monto + interes)
            alert(`${i} cuota/s de: $ ${cuota} \nTotal de: $ ${total}`)
        }
        let cuotas = parseInt(prompt('¿En cuantas cuotas desea pagar?')) 
        if(cuotas == 1 || cuotas == 2 || cuotas == 3 || cuotas == 4 ||cuotas == 5 ||cuotas == 6){
            alert(`Enhorabuena su pago se ha concretado en ${cuotas} cuota/s`)
        }else{
            alert('Ingrese una opción valida')
            metodoPago()
        }
    }
}

function zapatillas(){
    let seleccionZapa = prompt('Nuestras opciones son: \n 1- Dakiti Reflex: $7050 \n 2- Jack: $7250 \n 3- Queen: $6950')
    if(seleccionZapa == 1){
        alert('Por favor seleccione su metodo de pago')
        metodoPago()
        menuSecundario()
    }else if(seleccionZapa == 2){
        alert('Por favor seleccione su metodo de pago')
        metodoPago()
        menuSecundario()
    }else if(seleccionZapa == 3){
        alert('Por favor seleccione su metodo de pago')
        metodoPago()
        menuSecundario()
    }else{
        alert('No se encontró la opción')
        zapatillas()
    }
}

function gorras(){
    let seleccionGorra = prompt('Nuestras opciones son: \n 1- Gorra Visera: $1800 \n 2- Gorra Rasgada: $2000 \n 3. Gorra Plana: $1800')
    if(seleccionGorra == 1){
        alert('Por favor seleccione su metodo de pago')
        metodoPago()
        menuSecundario()
    }else if(seleccionGorra == 2){
        alert('Por favor seleccione su metodo de pago')
        metodoPago()
        menuSecundario()
    }else if(seleccionGorra == 3){
        alert('Por favor seleccione su metodo de pago')
        metodoPago()
        menuSecundario()
    }else{
        alert('No se encontró la opción')
        gorras()
    }
}


function menu(){
    let pregunta = prompt('¿Que desea comprar? \n 1- Zapatillas \n 2- Gorras')
    if(pregunta == 1){
        zapatillas()
    }else if(pregunta == 2){
        gorras()
    }else{
        alert('Ingrese una opcion válido')
        menu()
    }
}
menu()