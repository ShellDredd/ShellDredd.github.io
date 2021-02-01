const typed = new Typed('.typed', {
	strings: [
		'<i class="texto1">Usuari@ Freedom</i>',
		'<i class="texto2">Partidari@ del ecosistema FOSS</i>',
		'<i class="texto3">Programador Front-End</i>',
		'<i class="texto1">Entusiasta de InfoSec</i>',
		'<i class="texto2">Jugador de CTF</i>',
		'<i class="texto3">Creador de máquinas y retos</i>',
		'<i class="texto1">Divulgador Gnu/Linux</i>',
		'<i class="texto2">Tecnópata</i>',
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
