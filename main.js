// --------------------------------------- VARIABLES ------------------------------//
let Saldo= 5500
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
/*
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
*/
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
  
  const contenedorProductos = document.getElementById('contenedorProductos');
  
  ArrayEntrada.forEach((ProductoEntrada) => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('card', 'col-xl-3', 'col-md-6', 'col-sm-12');
    divProducto.innerHTML = `
                            <div>
                                <img src="img/${ProductoEntrada.id}.jpg" class="card-img-top img-fluid py-3">
                                <div class="card-body">
                                    <h3 class="card-title"> ${ProductoEntrada.nombre} </h3>
                                    <p class="card-text"> ${ProductoEntrada.precio} </p>
                                    <button id="boton${ProductoEntrada.id}" class="btn btn-primary"> Agregar al Carrito </button>
                                </div>
                            </div>`;
    contenedorProductos.appendChild(divProducto);
    //Agregar un evento al boton de agregar al carrito:
    const boton = document.getElementById(`boton${ArrayEntrada.id}`);
    boton.addEventListener('click', () => {
      agregarAlCarrito(ArrayEntrada.id);
    });
  });

//---------------------------------- OBJETOS ----------------------------------------------//

class ProductoEntrada {
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }}

    const productoEntrada1 = new ProductoEntrada(1, 'Sector campo', 2000, 1);
    const productoEntrada2 = new ProductoEntrada(2, 'Sector platea baja', 3000, 1);
    const productoEntrada3 = new ProductoEntrada(3, 'Sector platea alta', 7000, 1);
    const productoEntrada4 = new ProductoEntrada(4, 'Sector vip', 10000, 1);

class productoRemera{   
    constructor(id, color, precio, cantidad){
        this.id = id;
        this.color = color;
        this.precio = precio;
        this.cantidad = cantidad;
}}

    const productoRemera1 = new productoRemera (1, "blanca y negra", 1500, 1)
    const productoRemera2 = new productoRemera(2, "blanca y gris", 2000, 1)
    const productoRemera3 = new productoRemera(3, "celeste azul blanca", 5500, 1)
    const productoRemera4 = new productoRemera(4, "franja roja y azul fondo blanco", 6000, 1)

// ------------------------------------- ARRAY ---------------------------------//

const ArrayEntrada = [productoEntrada1 , productoEntrada2, productoEntrada3, productoEntrada4];

const ArrayRemera = [productoRemera1, productoRemera2, productoRemera3, productoRemera4];
  