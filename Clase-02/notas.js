// Programa que evalúa la nota de un estudiante y muestra un mensaje

function evaluarNota(nota) {
	console.log('Nota obtenida:', nota);

	// Verificar que la nota sea un número dentro del rango esperado
	if (typeof nota !== 'number' || Number.isNaN(nota)) {
		console.log('Valor inválido: la nota debe ser un número.');
		return;
	}

	if (nota > 0) {
		if (nota >= 90 && nota <= 100) {
			console.log('Resultado: Excelente — ¡Aprueba con excelente!');
		} else if (nota >= 75 && nota <= 89) {
			console.log('Resultado: Bien — ¡Aprueba!');
		} else if (nota >= 60 && nota <= 74) {
			console.log('Resultado: Suficiente — Aprueba por poco.');
		} else if (nota < 60) {
			console.log('Resultado: No aprueba.');
		} else {
			console.log('Nota fuera de rango (mayor que 100).');
		}
	} else {
		console.log('La nota debe ser mayor que 0 para entrar en la evaluación.');
	}
}

// Ejemplo: nota aleatoria entre 0 y 100
const notaAleatoria = Math.floor(Math.random() * 101);
evaluarNota(notaAleatoria);

// Pruebas adicionales solicitadas
evaluarNota(45);
evaluarNota(60);
evaluarNota(75);
evaluarNota(0);

