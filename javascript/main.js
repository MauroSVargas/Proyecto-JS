// --------------------------------------- VARIABLES ------------------------------//
const Saldo= 25000
//------------------------------------ EVENTOS DE ENTRADAS --------------------------------//
//function ComprarEntrada1() {
  //  PagoTicket1()
//}

//------------------------EVENTOS VISUALISAR FORMULARIO-----------------------------------//

function ActivarForm(){
    document.getElementById('formulario').classList.remove('modal');
} 
//--------------------------------consts sobre seleccion de entrada------------------------------//

const formulario = document.getElementById('ComprarCarrito');
formulario.addEventListener('click', ActivarForm);


const validarForm = document.getElementById('boton-comprar-carrito') ;

validarForm.addEventListener('click', PagoTicket);

//--------------------------------------funciones que suceden una vez eligo entrada---------------------------------//
/*
function IngreseTarjeta() {
    let tarjeta = document.getElementById('NumeroTarjeta').value

    do{
        if (tarjeta.length === 16) {
            tarjeta = false
        }else{
            break
        }
    }while(tarjeta)
    
}

function IngreseClave() {
    let clave = document.getElementById('clave').value
     
    do{
        if (clave.length === 3) {
            clave = false
        }else{
            break
        } 
    }while(clave)
}
*/

function IngreseTarjeta(){
   tarjeta.value.length === 16
}   

function IngreseClave() {
clave.length === 3
}

function MontoTicket(){
   if (Saldo >= carrito){
    Swal.fire({
        icon: 'sucess',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    } else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
    }
}

//--------------------------------------funciones a la hora de elegir entrada---------------------------------//
function PagoTicket(){
    IngreseTarjeta()
    IngreseClave()
    MontoTicket()
} 

//---------------------------------- OBJETOS ----------------------------------------------//
/*class ProductoEntrada {
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

const contenedorProductos = document.getElementById('contenedor-productos');

ArrayEntrada.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('card');
    divProducto.innerHTML = `
                    <div class="container-fluid justify-content-center justify-content-arounD mt-5">
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
        agregarAlCarritoTicket(producto.id);
    });
});

const ArrayRemera = [productoRemera1, productoRemera2, productoRemera3, productoRemera4];

const contenedorRemeras = document.getElementById('contenedor-remeras');

ArrayRemera.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('card');
    divProducto.innerHTML = `
                            <div class="container-fluid justify-content-center justify-content-around mt-5">
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
      agregarAlCarritoRemera(producto.id);
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
/*
const agregarAlCarritoTicket = (id) => {
const tickets = ArrayEntrada.find((producto) => producto.id === id);

const productoEnCarrito = carrito.find((producto) => producto.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push (tickets); 
  }
  actualizarCarrito();
};


const agregarAlCarritoRemera = (id) => {
    const remeras = ArrayRemera.find((producto) => producto.id === id);
    
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
      if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
      } else {
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






const encodedParams = new URLSearchParams();
encodedParams.append("eventId", 'sound festival');
encodedParams.append("apiKey", 'f84b17b53fmsh05f8ceb0acd5fe3p140ad1jsn9041c7e6fac5');

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'f84b17b53fmsh05f8ceb0acd5fe3p140ad1jsn9041c7e6fac5',
		'X-RapidAPI-Host': 'Ticketmasterstefan-skliarovV1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://ticketmasterstefan-skliarovv1.p.rapidapi.com/getSingleEvent', options)
	.then(response => response.json())
	.then(response => console.log(response))
	//.catch(err => console.error(err));
    */

class Producto {
    constructor(id, img, nombre, precio, cantidad) {
        this.id = id;
        this.img= img;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }}

    const producto1 = new Producto(1, 'ejemplo-ticket','Sector campo', 2000, 1);
    const producto2 = new Producto(2, 'ejemplo-ticket2', 'Sector platea baja', 3000, 1);
    const producto3 = new Producto(3, 'ejemplo-ticket3' , 'Sector platea alta', 7000, 1);
    const producto4 = new Producto(4, 'ejemplo-ticket4', 'Sector vip', 10000, 1);
    const producto5 = new Producto(5, 'remera1', 'blanca y negra', 1500, 1);
    const producto6 = new Producto(6, 'remera2' , 'blanca y gris', 2000, 1);
    const producto7 = new Producto(7, 'remera3' , 'celeste azul blanca', 5500, 1);
    const producto8 = new Producto(8, 'remera4' , 'franja roja y azul fondo blanco', 6000, 1);

const ArrayProductos = [producto1 , producto2, producto3, producto4, producto5 , producto6, producto7, producto8];

const contenedorProductos = document.getElementById('contenedor-productos');

ArrayProductos.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('card');
    divProducto.innerHTML = `
                    <div class="container gap-3">
                    <div class="card" style="width: 20rem;">
                            <img src="img/${producto.img}.jpg" class="card-img-top mt-2 img">
                            <h3 class="card-title"> ${producto.nombre} </h3>
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
const producto = ArrayProductos.find((producto) => producto.id === id);

const productoEnCarrito = carrito.find((producto) => producto.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push (producto); 
  }
  actualizarCarrito();
};

//Muestro el carrito de compras modificando el DOM.

const contenedorCarrito = document.getElementById('contenedorCarrito');
const verCarrito = document.getElementById('verCarrito');
//const ComprarCarrito= document.getElementById('ComprarCarrito')

verCarrito.addEventListener('click', actualizarCarrito);

function actualizarCarrito() {
  let aux = '';
  carrito.forEach((producto) => {
    aux += `
              <div>
                <ul class="container">
                  <img src="img/${producto.img}.jpg"  style="width:15rem"; py-3">
                  <div class="card-body">
                      <h3 class="card-title"> ${producto.nombre} </h3>
                      <p class="card-text"> ${producto.precio} </p>
                      <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
                </ul>                  
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

function IngreseTarjeta(){
    tarjeta.value.length === 16
 }   
 
 function IngreseClave() {
 clave.length === 3
 }
 
 function MontoTicket(){
    if (Saldo >= carrito){
     Swal.fire({
         icon: 'sucess',
         title: 'Oops...',
         text: 'Something went wrong!',
       })
     } else{
         Swal.fire({
             icon: 'error',
             title: 'Oops...',
             text: 'Something went wrong!',
           })
     }
 }
 
 //--------------------------------------funciones a la hora de elegir entrada---------------------------------//
 function PagoTicket(){
     IngreseTarjeta()
     IngreseClave()
     MontoTicket()
 } 