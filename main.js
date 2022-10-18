// --------------------------------------- VARIABLES ------------------------------//
let Saldo= 5000
let tarjeta = 0011

// ------------------------------------- ARRAY ---------------------------------//
const precioEntradas = [2500, 5000, 7500, 10000]
precioEntradas.push('precio a definir')
console.log(precioEntradas)

//------------------------------------ EVENTOS DE ENTRADAS --------------------------------//
function clickEntrada() {
    PagoTicket1()
}

function clickEntrada2() {
    PagoTicket2()
}

function clickEntrada3() {
    PagoTicket3()
}

function clickEntrada4() {
    PagoTicket4()
}

const ENTRADA1 = document.getElementById('ticket1');
ENTRADA1.addEventListener('click', clickEntrada);

const ENTRADA2 = document.getElementById('ticket2');
ENTRADA2.addEventListener('click', clickEntrada2);

const ENTRADA3 = document.getElementById('ticket3');
ENTRADA3.addEventListener('click', clickEntrada3);

const ENTRADA4 = document.getElementById('ticket4');
ENTRADA4.addEventListener('click', clickEntrada4);


//--------------------------------------funciones que suceden una vez elijo entrada---------------------------------//

function IngreseTarjeta(){  
    Number(prompt("ingrese su tarjeta"))
    if (tarjeta === 0011){ 
    } 
    }


function IngreseClave() {
    Number(prompt("ingrese su clave"))
    if (clave == 1234){    
    } 
    else {
        return;
    }
}   

function MontoTicket1(){
   if (Saldo >= precioEntradas[0]){
        alert("pago realizado con exito!")
    } else{
        alert("saldo insuficiente")
    }
}

function MontoTicket2(){
    if (Saldo >= precioEntradas[1]){
         alert("pago realizado con exito!")
     } else{
         alert("saldo insuficiente")
     }
}

function MontoTicket3(){
    if (Saldo >= precioEntradas[2]){
         alert("pago realizado con exito!")
     } else{
         alert("saldo insuficiente")
     }
}

function MontoTicket4(){
    if (Saldo >= precioEntradas[3]){
         alert("pago realizado con exito!")
     } else{
         alert("saldo insuficiente")
     }
}



//--------------------------------------funciones a la hora de elegir entrada---------------------------------//

/*function PagoTicket1(){
    let tarjeta = prompt("ingrese su tarjeta")
    IngreseTarjeta(tarjeta); {
        if (IngreseTarjeta(tarjeta)=true){ 
            let clave = prompt("ingrese su clave")
        IngreseClave(clave);{
            if (IngreseClave(clave)=true){
                MontoTicket1();
            } else { 
                alert("numero de clave incorrecto")
            }
        }
    }
}
} */

function PagoTicket1(){
    IngreseTarjeta() ? IngreseClave() ? MontoTicket1() ? alert("compra realizada") : alert("saldo insuficiente") : 
    alert("clave no valida") : alert("tarejta no valida")
}

function PagoTicket2(){
    let tarjeta = prompt("ingrese su tarjeta")
    IngreseTarjeta(tarjeta);
    let clave = prompt("ingrese su clave")
    IngreseClave(clave);
    MontoTicket2();
}

function PagoTicket3(){
    let tarjeta = prompt("ingrese su tarjeta")
    IngreseTarjeta(tarjeta);
    let clave = prompt("ingrese su clave")
    IngreseClave(clave);
    MontoTicket3();
}

function PagoTicket4(){
    let tarjeta = prompt("ingrese su tarjeta")
    IngreseTarjeta(tarjeta);
    let clave = prompt("ingrese su clave")
    IngreseClave(clave);
    MontoTicket4();
}

//---------------------------------- OBJETOS ----------------------------------------------//

function producto(nombre, precio, color){
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
}
 console.log(producto)

let producto1 = new producto("remera basica", 1500, "blanca y negra")
console.log(producto1)

let producto2 = new producto("remera degrade", 2000, "blanca y gris")
console.log(producto2)

let producto3 = new producto("remera marina", 5500, "celeste azul blanca")
console.log(producto3)

let producto4 = new producto("remera francesa", 6000, "franja roja y azul fondo blanco")
console.log(producto4)