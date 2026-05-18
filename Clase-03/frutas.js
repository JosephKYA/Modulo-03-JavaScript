// Arreglo de frutas
const frutas = [
	'manzana', 'naranja', 'plátano', 'manzana', 'kiwi', 'naranja', 'pera', 'kiwi', 'manzana'
];

// Cuenta usando un bucle for
function contarConFor(arreglo) {
	const conteo = {};
	for (let i = 0; i < arreglo.length; i++) {
		const fruta = arreglo[i];
		conteo[fruta] = (conteo[fruta] || 0) + 1;
	}

	console.log('Conteo usando for');
	Object.keys(conteo).forEach((f) => console.log(f + ':', conteo[f]));
	return conteo;
}

// Cuenta usando un bucle while
function contarConWhile(arreglo) {
	const conteo = {};
	let i = 0;
	while (i < arreglo.length) {
		const fruta = arreglo[i];
		conteo[fruta] = (conteo[fruta] || 0) + 1;
		i++;
	}

	console.log('Conteo usando while');
	Object.keys(conteo).forEach((f) => console.log(f + ':', conteo[f]));
	return conteo;
}

// Ejecutar ambas implementaciones
contarConFor(frutas);
contarConWhile(frutas);

