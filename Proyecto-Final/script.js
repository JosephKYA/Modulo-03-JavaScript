const formulario = document.getElementById("formComentario");
const campoComentario = document.getElementById("comentario");
const listaComentarios = document.getElementById("listaComentarios");

let comentarios = [];

const comentariosGuardados = localStorage.getItem("comentariosLibros");

if (comentariosGuardados) {
    comentarios = JSON.parse(comentariosGuardados);
    mostrarComentarios();
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const textoComentario = campoComentario.value.trim();

    if (textoComentario === "") {
        alert("Por favor escribe un comentario antes de agregarlo.");
        return;
    }

    const fechaActual = new Date();
    const fechaTexto = fechaActual.toLocaleString();

    const nuevoComentario = {
        texto: textoComentario,
        fecha: fechaTexto
    };

    comentarios.push(nuevoComentario);
    guardarComentarios();
    mostrarComentarios();

    campoComentario.value = "";
});

function mostrarComentarios() {
    listaComentarios.innerHTML = "";

    if (comentarios.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.className = "sin-comentarios";
        mensaje.textContent = "Todavía no hay comentarios.";
        listaComentarios.appendChild(mensaje);
        return;
    }

    comentarios.forEach(function(comentario, indice) {
        const cajaComentario = document.createElement("div");
        cajaComentario.className = "comentario";

        const texto = document.createElement("p");
        texto.textContent = comentario.texto;

        const fecha = document.createElement("p");
        fecha.className = "fecha";
        fecha.textContent = "Publicado el: " + comentario.fecha;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "boton-eliminar";

        botonEliminar.addEventListener("click", function() {
            comentarios.splice(indice, 1);
            guardarComentarios();
            mostrarComentarios();
        });

        cajaComentario.appendChild(texto);
        cajaComentario.appendChild(fecha);
        cajaComentario.appendChild(botonEliminar);

        listaComentarios.appendChild(cajaComentario);
    });
}

function guardarComentarios() {
    localStorage.setItem("comentariosLibros", JSON.stringify(comentarios));
}
