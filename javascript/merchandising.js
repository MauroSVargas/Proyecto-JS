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


    const ArrayRemera = [productoRemera1, productoRemera2, productoRemera3, productoRemera4];

const contenedorRemeras = document.getElementById('contenedor-remeras');

ArrayRemera.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('card');
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
  const producto = ArrayRemera.find((producto) => producto.id === id);
  const productoEnCarrito = carrito.find((producto) => producto.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push(producto);
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