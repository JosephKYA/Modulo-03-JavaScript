const formulario = document.getElementById("formComentario");
const campoComentario = document.getElementById("comentario");
const listaComentarios = document.getElementById("listaComentarios");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const textoComentario = campoComentario.value.trim();

    if (textoComentario === "") {
        alert("Por favor escribe un comentario antes de agregarlo.");
        return;
    }

    const mensajeVacio = document.querySelector(".sin-comentarios");
    if (mensajeVacio) {
        mensajeVacio.remove();
    }

    const fechaActual = new Date();
    const fechaTexto = fechaActual.toLocaleString();

    const nuevoComentario = document.createElement("div");
    nuevoComentario.className = "comentario";

    const texto = document.createElement("p");
    texto.textContent = textoComentario;

    const fecha = document.createElement("p");
    fecha.className = "fecha";
    fecha.textContent = "Publicado el: " + fechaTexto;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "boton-eliminar";

    botonEliminar.addEventListener("click", function() {
        nuevoComentario.remove();

        if (listaComentarios.children.length === 0) {
            const mensaje = document.createElement("p");
            mensaje.className = "sin-comentarios";
            mensaje.textContent = "Todavía no hay comentarios.";
            listaComentarios.appendChild(mensaje);
        }
    });

    nuevoComentario.appendChild(texto);
    nuevoComentario.appendChild(fecha);
    nuevoComentario.appendChild(botonEliminar);

    listaComentarios.appendChild(nuevoComentario);

    campoComentario.value = "";
});
