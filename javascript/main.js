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
//--------------------------------consts sobre seleccion de entrada------------------------------//
/*
const ENTRADA1 = document.getElementById('ticket1');
ENTRADA1.addEventListener('click', ActivarForm);
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

//---------------------------------- OBJETOS ----------------------------------------------//
class ProductoEntrada {
    constructor(id, img, nombre, precio, cantidad) {
        this.id = id;
        this.img= img;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }}

    const productoEntrada1 = new ProductoEntrada(1, 'ejemplo-ticket','Sector campo', 2000, 1);
    const productoEntrada2 = new ProductoEntrada(2, 'ejemplo-ticket2', 'Sector platea baja', 3000, 1);
    const productoEntrada3 = new ProductoEntrada(3, 'ejemplo-ticket3' , 'Sector platea alta', 7000, 1);
    const productoEntrada4 = new ProductoEntrada(4, 'ejemplo-ticket4', 'Sector vip', 10000, 1);

class productoRemera{   
    constructor(id, img, color, precio, cantidad){
        this.id = id;
        this.img= img;
        this.color = color;
        this.precio = precio;
        this.cantidad = cantidad;
}}

    const productoRemera1 = new productoRemera(1, 'remera1', 'blanca y negra', 1500, 1);
    const productoRemera2 = new productoRemera(2, 'remera2' , 'blanca y gris', 2000, 1);
    const productoRemera3 = new productoRemera(3, 'remera3' , 'celeste azul blanca', 5500, 1);
    const productoRemera4 = new productoRemera(4, 'remera4' , 'franja roja y azul fondo blanco', 6000, 1);

// ------------------------------------- ARRAY ---------------------------------//

const ArrayEntrada = [productoEntrada1 , productoEntrada2, productoEntrada3, productoEntrada4];

const ArrayRemera = [productoRemera1, productoRemera2, productoRemera3, productoRemera4];

const contenedorProductos = document.getElementById('contenedor-productos');

ArrayEntrada.forEach((producto) => {
    const divProducto = document.createElement('div');
    //divProducto.classList.add('card');
    divProducto.innerHTML = `
                    <div class="container-fluid row justify-content-center justify-content-arounD mt-5">
                    <div class="card" style="width: 18rem;">
                    <img src="img/${producto.img}.jpg" class="card-img-top mt-2 img">
                    <h3 class="card-title"> ${producto.color} </h3>
                    <p class="card-text"> ${producto.precio} </p>
                    <button id="boton${producto.id}" class="btn btn-primary"> Agregar al Carrito </button>
                    </div>
                    </div>`;
    contenedorProductos.appendChild(divProducto);
    //Agregar un evento al boton de agregar al carrito:
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id);
    });
});

const contenedorRemeras = document.getElementById('contenedor-remeras');

ArrayRemera.forEach((producto) => {
    const divProducto = document.createElement('div');
    //divProducto.classList.add('card');
    divProducto.innerHTML = `
                            <div class="container-fluid row justify-content-center justify-content-around mt-5">
                            <div class="card" style="width: 18rem;">
                            <img src="../img/${producto.img}.jpg" class="card-img-top mt-2">
                                    <h3 class="card-title"> ${producto.color} </h3>
                                    <p class="card-text"> ${producto.precio} </p>
                                    <button id="boton${producto.id}" class="btn btn-primary"> Agregar al Carrito </button>
                                </div>
                            </div>`;
    contenedorRemeras.appendChild(divProducto);
    //Agregar un evento al boton de agregar al carrito:
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id);
    });
  });

  //Creo el carrito de compras y una función que busque el producto por id y lo agregue al carrito.

const carrito = [];
//Versión Simple:

/*
const agregarAlCarrito = (id) => {
  const producto = productos.find(producto => producto.id === id);
  carrito.push(producto);
}
*/

//Versión que chequea las cantidades:

const agregarAlCarrito = (id) => {
const tickets = ArrayEntrada.find((producto) => producto.id === id);
const remeras = ArrayRemera.find((producto) => producto.id === id);

const productoEnCarrito = carrito.find((producto) => producto.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push (tickets);
    carrito.push (remeras);
    
  }
  actualizarCarrito();
};


//Muestro el carrito de compras modificando el DOM.

const contenedorCarrito = document.getElementById('contenedorCarrito');
const verCarrito = document.getElementById('verCarrito');

verCarrito.addEventListener('click', actualizarCarrito);

function actualizarCarrito() {
  let aux = '';
  carrito.forEach((producto) => {
    aux += `
              <div class="col-xl-3 col-md-6 col-sm-12">
                  <img src="img/${producto.id}.jpg" class="card-img-top img-fluid py-3">
                  <div class="card-body">
                      <h3 class="card-title"> ${producto.nombre} </h3>
                      <p class="card-text"> ${producto.precio} </p>
                      <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
                  </div>
              </div>
              `;
  });

  contenedorCarrito.innerHTML = aux;
  calcularTotalCompra();
}

//Agrego una función que elimine el producto del carrito:

const eliminarDelCarrito = (id) => {
const producto = carrito.find((producto) => producto.id === id);
  carrito.splice(carrito.indexOf(producto), 1);
  actualizarCarrito();
};

///Función para vaciar todo el carrito por completo:

const vaciarCarrito = document.getElementById('vaciarCarrito');
vaciarCarrito.addEventListener('click', () => {
  carrito.splice(0, carrito.length);
  actualizarCarrito();
});

//Creo una función que me calcule el total del carrito:

const totalCompra = document.getElementById('totalCompra');

const calcularTotalCompra = () => {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio * producto.cantidad;
  });
  totalCompra.innerHTML = total;
};