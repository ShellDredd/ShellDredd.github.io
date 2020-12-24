const typed = new Typed('.typed', {
	strings: [
		'<i class="texto1">Usuari@s Freedom</i>',
		'<i class="texto2">Comunidad FOSS</i>',
		'<i class="texto3">Sociedad Tecnológica</i>',
		'<i class="texto1">Aprendizaje</i>',
		'<i class="texto2">Proyectos</i>',
		'<i class="texto3">Gnu/Linux</i>',
		'<i class="texto1">Programación</i>',
		'<i class="texto2">Divulgación</i>',
	],	
	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 50, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});