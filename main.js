let Saldo= 5000
let Entrada1= 2500
let Entrada2= 5000
let Entrada3= 7500
let Entrada4= 10000


//--------------------------------------funciones que suceden una vez elijo entrada---------------------------------//

function IngreseTarjeta(tarjeta){     
    if (tarjeta === "0011"){
        let clave = prompt("ingrese su clave")
        IngreseClave(clave)
    } else {
        alert("numero de tarjeta incorrecto")
    }
}

function IngreseClave(clave) {
    if (clave === "1234"){
        alert("tarjeta registrada")
    } else {
        alert("clave incorrecta")
    }

}

function MontoTicket1(){
   if (Saldo >= Entrada1){
        alert("pago realizado con exito!")
    } else{
        alert("saldo insuficiente")
    }
}

function MontoTicket2(){
    if (Saldo >= Entrada2){
         alert("pago realizado con exito!")
     } else{
         alert("saldo insuficiente")
     }
}

function MontoTicket3(){
    if (Saldo >= Entrada3){
         alert("pago realizado con exito!")
     } else{
         alert("saldo insuficiente")
     }
}

function MontoTicket4(){
    if (Saldo >= Entrada4){
         alert("pago realizado con exito!")
     } else{
         alert("saldo insuficiente")
     }
}



//--------------------------------------funciones a la hora de elegir entrada---------------------------------//

function PagoTicket1(){
    prompt("ingrese su tarjeta")
    IngreseTarjeta();
    IngreseClave();
    MontoTicket1();
}

function PagoTicket2(){
    let tarjeta = prompt("ingrese su tarjeta")
    IngreseTarjeta(tarjeta)
    IngreseClave(clave); { 
        if (clave === "1234"){ 
        MontoTicket2()
    }
     else {
        alert ("clave incorrecta")
     }
}
}

function PagoTicket3(){
    let tarjeta = prompt("ingrese su tarjeta")
    IngreseTarjeta(tarjeta)
    IngreseClave(clave); { 
        if (clave === "1234"){ 
        MontoTicket3()
    }
     else {
        alert ("clave incorrecta")
     }
}
}

function PagoTicket4(){
    let tarjeta = prompt("ingrese su tarjeta")
    IngreseTarjeta(tarjeta)
    IngreseClave(clave); { 
        if (clave === "1234"){ 
        MontoTicket4()
    }
     else {
        alert ("clave incorrecta")
     }
}
}


/*function PagoTicket3(){
    let tarjeta = prompt("ingrese su tarjeta")
    IngreseTarjeta(tarjeta)
    let clave = prompt("ingrese su clave")
    IngreseClave(clave)
    MontoTicket3()
}*/
