const inputContrasena = document.getElementById('contrasena');
const botonCopiar = document.getElementById('botonCopiar');
const mensajeCopiado = document.getElementById('mensajeCopiado');
const formulario = document.getElementById('formularioGenerador');
const inputLongitud = document.getElementById('longitud');
const valorLongitud = document.getElementById('valorLongitud');
const inputMayusculas = document.getElementById('mayusculas');
const inputMinusculas = document.getElementById('minusculas');
const inputNumeros = document.getElementById('numeros');
const inputSimbolos = document.getElementById('simbolos');
const textoSeguridad = document.getElementById('textoSeguridad');
const barras = document.querySelectorAll('.barra');
const mensajeError = document.getElementById('mensajeError');

const caracteres = {
  mayusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  minusculas: 'abcdefghijklmnopqrstuvwxyz',
  numeros: '0123456789',
  simbolos: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

function actualizarTextoLongitud() {
  valorLongitud.textContent = inputLongitud.value;
}

function obtenerConjuntosSeleccionados() {
  const conjuntos = [];

  if (inputMayusculas.checked) conjuntos.push(caracteres.mayusculas);
  if (inputMinusculas.checked) conjuntos.push(caracteres.minusculas);
  if (inputNumeros.checked) conjuntos.push(caracteres.numeros);
  if (inputSimbolos.checked) conjuntos.push(caracteres.simbolos);

  return conjuntos;
}

function obtenerCaracterAleatorio(texto) {
  const indiceAleatorio = Math.floor(Math.random() * texto.length);
  return texto[indiceAleatorio];
}

function mezclarTexto(texto) {
  return texto
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
}

function generarContrasena() {
  const longitud = Number(inputLongitud.value);
  const conjuntosSeleccionados = obtenerConjuntosSeleccionados();

  if (conjuntosSeleccionados.length === 0) {
    mensajeError.textContent = 'Selecciona al menos una opción.';
    return '';
  }

  mensajeError.textContent = '';

  let contrasena = '';
  let todosLosCaracteres = '';

  conjuntosSeleccionados.forEach((conjunto) => {
    contrasena += obtenerCaracterAleatorio(conjunto);
    todosLosCaracteres += conjunto;
  });

  while (contrasena.length < longitud) {
    contrasena += obtenerCaracterAleatorio(todosLosCaracteres);
  }

  return mezclarTexto(contrasena);
}

function calcularSeguridad(contrasena) {
  let puntuacion = 0;

  if (contrasena.length >= 9) puntuacion++;
  if (contrasena.length >= 12) puntuacion++;
  if (/[A-Z]/.test(contrasena) && /[a-z]/.test(contrasena)) puntuacion++;
  if (/\d/.test(contrasena)) puntuacion++;
  if (/[^A-Za-z0-9]/.test(contrasena)) puntuacion++;

  if (puntuacion <= 2) return { texto: 'DEBIL', nivel: 1 };
  if (puntuacion === 3) return { texto: 'MEDIA', nivel: 2 };
  if (puntuacion === 4) return { texto: 'FUERTE', nivel: 3 };
  return { texto: 'MUY FUERTE', nivel: 4 };
}

function actualizarSeguridad(contrasena) {
  const seguridad = calcularSeguridad(contrasena);
  textoSeguridad.textContent = seguridad.texto;

  barras.forEach((barra, indice) => {
    if (indice < seguridad.nivel) {
      barra.classList.add('active');
    } else {
      barra.classList.remove('active');
    }
  });
}

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const nuevaContrasena = generarContrasena();

  if (nuevaContrasena === '') {
    return;
  }

  inputContrasena.value = nuevaContrasena;
  actualizarSeguridad(nuevaContrasena);
  mensajeCopiado.textContent = '';
});

botonCopiar.addEventListener('click', async function () {
  if (!inputContrasena.value) {
    mensajeCopiado.textContent = 'No hay contraseña para copiar.';
    return;
  }

  try {
    await navigator.clipboard.writeText(inputContrasena.value);
    mensajeCopiado.textContent = 'Contraseña copiada.';
  } catch (error) {
    inputContrasena.select();
    document.execCommand('copy');
    mensajeCopiado.textContent = 'Contraseña copiada.';
  }
});

inputLongitud.addEventListener('input', function () {
  actualizarTextoLongitud();
  const contrasenaActual = inputContrasena.value;
  if (contrasenaActual) actualizarSeguridad(contrasenaActual);
});

[inputMayusculas, inputMinusculas, inputNumeros, inputSimbolos].forEach((input) => {
  input.addEventListener('change', function () {
    const contrasenaActual = generarContrasena();
    if (contrasenaActual) {
      inputContrasena.value = contrasenaActual;
      actualizarSeguridad(contrasenaActual);
    }
  });
});

actualizarTextoLongitud();
actualizarSeguridad(inputContrasena.value);
