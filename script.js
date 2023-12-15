
//Creamos un array con numeros del 0 al 99
const listaNumeros = []
const jugador = new Set()
const maquina = new Set()

for (cont = 0; cont < 100; cont++) {
    listaNumeros.push(cont)
}

console.log(listaNumeros)

inicializar(jugador)
inicializar(maquina)

function inicializar(set) {
    while (set.size < 15) {
        set.add(Math.floor(Math.random() * 100) + 1)
    }
    console.log(set)
}












// Mantengo estos comentarios ya que me resulta una manera curiosa de hacerlo

// Los 3 puntos permiten convertir la sintaxis que se ve a continuación para que se convierta en los datos del array y no de problemas volviendolo así en un valor en conjunto
// Creamos un array usando la funcion Set, esta funcion se utiliza para evitar números repetidos
// Array.from crea un array a partir de un objeto
// length: 15 se utiliza para que el array creado sea si o si con una longitud de 15, que combinado con el set tendremos 15 numeros aleatorios únicos en el array o, esa es mi conclusión
// El resto es usado para generar números aleatorios

// const jugador = [...new Set(Array.from({ length: 15 }, () => Math.floor(Math.random() * 100)))];

// console.log(jugador);

// const maquina = [...new Set(Array.from({ length: 15 }, () => Math.floor(Math.random() * 100)))];

// console.log(maquina);

