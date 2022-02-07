//contenedor de carga
window.addEventListener('load', () => {
  const contenedor = document.getElementById('contenedor_carga')
  const contenedor_carga_image = document.getElementById(
    'contenedor-carga-image'
  )
  contenedor.classList.add('hide-image')
  contenedor_carga_image.classList.add('hide-image')
  
})

//google function
window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}

gtag('js', new Date())
gtag('config', 'UA-163406834-2')

//typed words
const typed = new Typed('.typed', {
  strings: [
    '<i class="texto1">Freedom User</i>',
    '<i class="texto2">Content Creator</i>',
    '<i class="texto3">Cybersecurity Enthusiast</i>',
    '<i class="texto1">Player and Creator of CTFs</i>',
    '<i class="texto2">Supporter of the FOSS ecosystem</i>',
    '<i class="texto3">Gnu/Linux Disseminator</i>',
    '<i class="texto1">Founder of the ShellDredd Society</i>',
    '<i class="texto2">SysAdmin - Front-End Web Designer</i>',
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
})
