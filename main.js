// --------------------------------------- VARIABLES ------------------------------//
let Saldo= 5500

// ------------------------------------- ARRAY ---------------------------------//
const precioEntradas = [2500, 5000, 7500, 10000]
precioEntradas.push('precio a definir')
console.log(precioEntradas)

//------------------------------------ EVENTOS DE ENTRADAS --------------------------------//
function ComprarEntrada1() {
    PagoTicket1()
}

function ComprarEntrada2() {
    PagoTicket2()
}

function ComprarEntrada3() {
    PagoTicket3()
}

function ComprarEntrada4() {
    PagoTicket4()
}

//------------------------EVENTOS VISUALISAR FORMULARIO-----------------------------------//

function ActivarForm(){
    document.getElementById('formulario').classList.remove('modal');
}  

function ActivarForm2(){
    document.getElementById('formulario2').classList.remove('modal');
} 

function ActivarForm3(){
    document.getElementById('formulario3').classList.remove('modal');
} 

function ActivarForm4(){
    document.getElementById('formulario4').classList.remove('modal');
} 

//--------------------------------consts sobre seleccion de entrada------------------------------//

const ENTRADA1 = document.getElementById('ticket1');
ENTRADA1.addEventListener('click', ActivarForm);

const ENTRADA2 = document.getElementById('ticket2');
ENTRADA2.addEventListener('click', ActivarForm2);

const ENTRADA3 = document.getElementById('ticket3');
ENTRADA3.addEventListener('click', ActivarForm3);

const ENTRADA4 = document.getElementById('ticket4');
ENTRADA4.addEventListener('click', ActivarForm4);



const COMPRA = document.getElementById('boton-comprar');
COMPRA.addEventListener('click', ComprarEntrada1);

const COMPRA2 = document.getElementById('boton-comprar2');
COMPRA2.addEventListener('click', ComprarEntrada2);

const COMPRA3 = document.getElementById('boton-comprar3');
COMPRA3.addEventListener('click', ComprarEntrada3);

const COMPRA4 = document.getElementById('boton-comprar4');
COMPRA4.addEventListener('click', ComprarEntrada4);

//--------------------------------------funciones que suceden una vez eligo entrada---------------------------------//

function IngreseTarjeta() {
    let tarjeta = document.getElementById('NumeroTarjeta').value

    do{
        if (tarjeta.length >= 5) {
            tarjeta = false
        }else{
            break
        }
    }while(tarjeta)
    
}

function IngreseClave() {
    let clave = document.getElementById('clave').value
     
    do{
    if (clave.length >= 3) {
        clave = false
        }else{
           break
        } 
    }while(clave)
}

/*
function IngreseTarjeta(){
    if (tarjeta.value.length > 5) {
        //alert("ingrese clave")
        
    }else{
        alert("tarjeta no valida")
    }
}

function IngreseClave() {
        if (clave.length > 3) {
            //alert("Tarjeta registrada")
            
        }else{
            alert("clave no valida")
        }
}
*/

function MontoTicket1(){
   if (Saldo > precioEntradas[0]){
        alert("pago realizado con exito!")
    } else{
        alert("saldo insuficiente")
    }
}

function MontoTicket2(){
    if (Saldo > precioEntradas[1]){
         alert("pago realizado con exito!")
     } else{
         alert("saldo insuficiente")
     }
}

function MontoTicket3(){
    if (Saldo > precioEntradas[2]){
         alert("pago realizado con exito!")
     } else{
         alert("saldo insuficiente")
     }
}

function MontoTicket4(){
    if (Saldo > precioEntradas[3]){
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