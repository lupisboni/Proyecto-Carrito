//variable
const carritos = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('vaciar-carrito');

cargarEventsListener();
function cargarEventsListener();{
    //
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones 
function agregarCurso (e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
    console.log(e.target);
    }
}

