//---------------------------------- OBJETOS ----------------------------------------------//class ProductoEntrada {
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
const ComprarCarrito= document.getElementById('ComprarCarrito')

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


//----------------FUNCIONES PAGAR PRODUCTOS------------------//
let Saldo= 25000

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
            text: 'compra realizada!',
        })
    } else{
        Swal.fire({
            icon: 'error',
            text: 'saldo insuficiente!',
        })
    }
}
 
 function PagoTicket(){
     IngreseTarjeta()
     IngreseClave()
     MontoTicket()
} 

//------------------------EVENTOS VISUALISAR FORMULARIO-----------------------------------//
const formulario = document.getElementById('activarForm');
formulario.addEventListener('click', ActivarForm);

function ActivarForm(){
    document.getElementById('formulario').classList.remove('modal');
} 

ComprarCarrito.addEventListener('click', PagoTicket);