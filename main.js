// --------------------------------------- VARIABLES ------------------------------//
let Saldo= 5000
let tarjeta = document.getElementById('NumeroTarjeta').value
let clave = document.getElementById('clave').value

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

function ActivarForm(){
    document.getElementById('formulario').classList.remove('modal');
}  

const ENTRADA1 = document.getElementById('ticket1');
ENTRADA1.addEventListener('click', ActivarForm);
ENTRADA1.addEventListener('click', PagoTicket1);

const ENTRADA2 = document.getElementById('ticket2');
ENTRADA2.addEventListener('click', ActivarForm);

const ENTRADA3 = document.getElementById('ticket3');
ENTRADA3.addEventListener('click', ActivarForm);

const ENTRADA4 = document.getElementById('ticket4');
ENTRADA4.addEventListener('click', ActivarForm);
ENTRADA4.addEventListener('click', PagoTicket4);

const FORMULARIO = document.getElementById('formulario');
document.getElementById('formulario').classList.add('modal')


//--------------------------------------funciones que suceden una vez eligo entrada---------------------------------//



/*function IngreseTarjeta(){
    let tarjeta = Number(prompt("ingrese su tarjeta"))
    do {    
    tarjeta==1515 ? alert("ingrese clave") : alert("tarjeta no valida")
    } while (tarjeta) 
}*/
function IngreseTarjeta(){
do{
    if (tarjeta.length > 5) {
        alert("ingrese clave")
        tarjeta = false
    }else{
        alert("tarjeta no valida")
    }
}while(tarjeta)
}

function IngreseClave() {
    do{
        if (clave.length = 3) {
            alert("Tarjeta registrada")
            clave = false
        }else{
            alert("clave no valida")
        }
    }while(clave)
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
function PagoTicket1(){
    IngreseTarjeta()
    IngreseClave()
    MontoTicket1()         
} 

function PagoTicket2(){
    IngreseTarjeta()
        IngreseClave()
            MontoTicket2() 
}

function PagoTicket3(){
    IngreseTarjeta()
        IngreseClave()
            MontoTicket3() 
}

function PagoTicket4(){
    IngreseTarjeta()
        IngreseClave()
            MontoTicket4()
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