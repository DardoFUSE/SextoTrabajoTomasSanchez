

let nombre = []
let apellido = []
let cuadro = []
nombre.push(prompt("ingrese nombre"))
apellido.push(prompt("ingrese apellido"))
cuadro.push(prompt("ingrese club del que es hincha"))

console.log(nombre+" "+apellido+" hincha de "+cuadro);
if(cuadro[0] === "boca") {
console.log(" hincha de un ex club");
}



//inicio caja de comentarios
function agregarComentario() {
    // Obtener el valor del campo de comentario
    var comentarioInput = document.getElementById("comentario").value;
  console.log("se creo una nota: " + comentarioInput)
    // Verificar si el campo de comentario está vacío
    if (comentarioInput === "") {
      alert("Por favor ingresa un comentario");
      return;
    }
  
    // Obtener el contenedor de comentarios
    var contenedorComentarios = document.getElementById("contenedor-comentarios");
  
    // Crear un nuevo elemento div para el comentario
    var nuevoComentario = document.createElement("div");
  
    // Establecer el contenido del nuevo comentario con el valor del campo de comentario
    nuevoComentario.innerHTML = comentarioInput;
  
    // Agregar la clase "comentario" al nuevo comentario
    nuevoComentario.classList.add("comentario");
  
    // Crear un nuevo elemento botón para eliminar el comentario
    var botonEliminar = document.createElement("button");
  
    // Establecer el texto del botón eliminar
    botonEliminar.textContent = "eliminar";
  
    // Agregar la clase "botonEliminar" al botón
    botonEliminar.classList.add("botonEliminar");
  
    // Agregar el evento de clic al botón eliminar para eliminar el comentario
    botonEliminar.addEventListener("click", function() {
      nuevoComentario.remove();
    });
  
    // Agregar el botón eliminar al nuevo comentario
    nuevoComentario.appendChild(botonEliminar);
  
    // Agregar el nuevo comentario al contenedor de comentarios
    contenedorComentarios.appendChild(nuevoComentario);
  
    // Limpiar el campo de comentario después de agregar el comentario
    document.getElementById("comentario").value = "";
  
    // Cambiar el texto del elemento h2
    var h2Element = document.getElementById("H2coment");
    h2Element.innerHTML = "Nota agregada";
  }
  
  
  
  