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


const contenedorRemeras = document.getElementById('contenedor-remeras');

ArrayRemera.forEach((producto) => {
    const divProducto = document.createElement('div');
    divProducto.classList.add('card');
    divProducto.innerHTML = `
                            <div class="container-fluid row justify-content-center justify-content-around mt-5">
                            <div class="card" style="width: 18rem;">
                            <img src="img/${producto.img}.jpg" class="card-img-top mt-2">
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