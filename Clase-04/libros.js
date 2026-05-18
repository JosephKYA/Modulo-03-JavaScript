const librosLeidos = [];

function agregarLibro(titulo) {
	if (!titulo || typeof titulo !== 'string') {
		console.log('Título inválido');
		return;
	}
	librosLeidos.push(titulo);
	console.log(`Libro agregado: ${titulo}`);
}

function mostrarLibrosLeidos() {
	console.log('Libros leídos');
	if (librosLeidos.length === 0) {
		console.log('No hay libros registrados.');
		return;
	}
	librosLeidos.forEach((titulo, i) => {
		console.log(`${i + 1}. ${titulo}`);
	});
}

const librosLeidos = [
	'Cuando llegues al otro lado',
	'Los ojos de mi princesa',
	'La bailarina de Auschwitz',
	'El principito',
	'La hipótesis del amor',
	'Mujercitas'
];

librosLeidos.forEach(agregarLibro);

mostrarLibrosLeidos();



