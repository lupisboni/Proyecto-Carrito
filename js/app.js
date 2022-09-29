//variable
const carritos = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('vaciar-carrito');

cargarEventsListener();
function cargarEventsListener();{
    //cuando agregas un curso presionado agregar al carrito
    listaCursos.addEventListener('click', agregarCurso);
}

//Funciones 
function agregarCurso (e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
    console.log(e.target.parentElement.parentElement);

    leerDatosCurso(cursoSeleccionado);

    }
}

//lee contenido del html al que dimos click y extraer la informacion del curso
function leerDatosCurso(curso){
    console.log(curso);

    //crear objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        ttulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio spam').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad:1
    }
    console.log(infoCurso)
}
