/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */

/* function contador(texto) {
    if (typeof texto === "number"){
        texto = texto.toString().length
    }
    else {
        texto = texto.length
    }
    return texto
}
console.log(contador("Fabricio Joel Miranda Quezada"))
console.log(contador(21))


function contador2(text) {
    if(!text) {
        console.warn("No ingresaste ninguna cadena")
    }else if(typeof text === "number") {
        console.info(`La cadena ${text} tiene ${text.toString().length} caracteres`)
    }else {
        console.info(`La cadena ${text} tiene ${text.length} caracteres`)
    }
}
contador2()
contador2(21)
contador2("Fabricio Joel Miranda Quezada")


const contador3 = (text) => 
    (!text) 
        ? console.warn("No ingresaste ninguna cadena") 
        : console.info(`La cadena ${text} tiene ${text.length} caracteres`);
contador3()
contador3("Fabricio Joel Miranda Quezada") */




/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

/* function recortar(texto, caracteresIndicados) {
    if (typeof texto === "number"){
        texto = texto.toString().slice(0, caracteresIndicados)
    }
    else {
        texto = texto.slice(0, caracteresIndicados)
    } 
    return texto
}
console.log(recortar("Fabricio", 5))
console.log(recortar(1000000, 3))


const recortar2 = (text, caracteresIndicados) => 
    (!text) 
        ? console.warn("No ingresaste ninguna cadena de texto") 
        : (caracteresIndicados === undefined)
            ? console.warn("No ingresaste la longitud para recortar el texto") 
            :console.info(text.slice(0, caracteresIndicados));
recortar2()
recortar2("", 3)
recortar2("Fabricio")
recortar2("Fabricio", 3) */



/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

/* function separador(texto, separar) { 
    texto = texto.split(separar)
    return texto
}
console.log(separador("Fabricio Joel Miranda Quezada", " "))
console.log(separador("Fabricio Joel Miranda Quezada", ""))

const separador2 = (texto ="", longitud = undefined) =>
    (!texto)
        ? console.warn("No ingresaste ninguna cadena de texto")
        : (longitud === undefined)
            ? console.warn("No ingresaste el caracter separador")
            : console.info(texto.split(longitud))
separador2()
separador2("ENE,FEB,MAR,ABR,MAY,JUN,JUL,AGO,SET,OCT,NOV,DIC", ",")
separador2("Fabricio Joel Miranda Quezada")
separador2("Fabricio Joel Miranda Quezada", " ")
separador2("Fabricio Joel Miranda Quezada", "") */




/* Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

/* function repetir(texto, repeticion) {
    texto+=" ";
    if (typeof texto === "number") {
        texto = texto.toString()
    }
    else {
        texto = texto.repeat(repeticion)
    }
    return texto
}
console.log(repetir("Hola Mundo", 4))
console.log(repetir(21, 4))

const repetirTexto = (texto = "",repeticion = undefined) => {
    if(!texto) return console.warn("No ingresaste un texto")

    if(repeticion === undefined) return console.warn("No ingresaste la cantidad de veces que se va a repetir el texto");

    if(repeticion === 0) return console.error("El numero de veces no puede ser 0");

    if(Math.sign(repeticion) === -1) return console.error("El numero de veces no puede ser negativo");

    if(texto) return console.log((texto + " ").repeat(3))
}

repetirTexto()
repetirTexto("Hola")
repetirTexto("Hola", 0)
repetirTexto("Hola", 2) */


/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

/* const reverso = (texto) => 
    (!texto)
        ? console.warn("No ingresaste una cadena de texto") 
        : console.log(texto.split("").reverse().join(""))

reverso()
reverso("Fabricio Miranda") */

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

/* const contadorRepeticion = (cadena = "", texto = "") => {
    if (!cadena) return console.warn("No ingresaste el texto") 
    if (!texto) return console.warn("No ingresaste la palabra a contar");

    let i = 0,
     cont = 0;

    while (i !== -1) {
        i = cadena.indexOf(texto, i)
        if(i !== -1) {
            i++
            cont++
        }
    }
    return console.info(`La palabra ${texto} se repite ${cont} veces`)

}

contadorRepeticion()
contadorRepeticion("minecraft")
contadorRepeticion("minecraft", "a")
contadorRepeticion("holi mundo adios mundo yolo mundo jajam mundo", "mundo") */

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

/* const polindromo = (texto) => {
    if (!texto) console.warn("No ingresaste una cadena de texto") 
    texto = texto.toUpperCase()
    textoAlReves = texto.split("").reverse().join("");
    return (texto === textoAlReves)
        ? console.log(`Si es palindromo. Palabra original ${texto}. Palabra al reves ${textoAlReves}`)
        : console.log(`No es palindromo. Palabra original ${texto}. Palabra al reves ${textoAlReves}`)
        
}
polindromo("anna")
polindromo("Fabri")
polindromo("Salas") */


/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.  */

/* const eliminarCaracteres = (texto,patron) =>
    (!texto)
        ? console.warn("No ingresaste un texto")
        : (!patron)
            ? console.warn("No ingresaste un patrón de caracteres")
            : console.info(texto.replace(new RegExp(patron, "ig"),""))

eliminarCaracteres()
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5")
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") */

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

/* let numeroAleatorio = () => console.info(Math.round(Math.random()*100)+500)
numeroAleatorio() */

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

/* let capicua = (num) => {
    if (!num) return console.warn("No ingresaste un número")

    if(typeof num !== "number") return console.error(`El valor ${num}. No es un número`)

    num = num.toString()
    let numReves = num.split("").reverse().join("");
    
    return (num === numReves)
        ? console.log(`Si es capicuá. Número original ${num}. Número al revés ${numReves}`)
        : console.log(`No es capicuá. Número original ${num}. Número al revés ${numReves}`)
}
capicua()
capicua("xd")
capicua(101)
capicua(102)
capicua(101.101)
capicua(102.684) */

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

/* const factorial = (num = undefined) => {
    if(num === undefined) return console.warn("No ingresaste un número")

    if(typeof num !== "number") return console.error(`El valor ${num}. No es un número`)

    if(num === 0) return console.error("El número no puede ser 0")

    if(Math.sign(num) === -1) return console.log("El número no puede ser negativo")

    let factorial = 1

    for (let i = num; i > 1; i--){
        factorial *= i
    }
    return console.info(`El factorial de ${num} es ${factorial}`)
}

factorial()
factorial("a")
factorial(0)
factorial(5) */

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

/* const numeroPrimo = (num = undefined) => {
    if(num === undefined) return console.warn("No ingresaste un número")

    if(typeof num !== "number") return console.error(`El valor ${num}. No es un número`)

    if(num === 0) return console.error("El número no puede ser 0")

    if(num === 1) return console.error("El número no puede ser 1")

    if(Math.sign(num) === -1) return console.error("El número no puede ser negativo")

    let divisible = false

    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            divisible = true
            break
        }
    }
    return(divisible)
    ? console.log(`El número ${num}. No es primo`)
    : console.log(`El número ${num}. Si es primo`)
}
numeroPrimo()
numeroPrimo("200")
numeroPrimo("true")
numeroPrimo(0)
numeroPrimo(1)
numeroPrimo(-3)
numeroPrimo(13)
numeroPrimo(12) */


/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

/* let imparPar = (num = undefined) => {
    if(!num === undefined) return console.error("No ingresaste un número")
    
    if(typeof num !== "number") return console.error(`El valor ${num} no es un número`)  
    
    if(num === 0) return console.error("El número no puede ser 0")

    return ((num % 2) === 0)
        ? console.log(`El número ${num} es Par`)
        : console.log(`El número ${num} es Impar`)
}
imparPar()
imparPar("ayya")
imparPar(0)
imparPar(2)
imparPar(3)
imparPar(319)
imparPar(3190)
imparPar(13541454651651) */

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

/* const convertirGrados = (grados = undefined, unidad = undefined) => {
    if(grados === undefined) return console.warn(`No ingresaste grados a convertir`)

    if(typeof grados !== "number") return console.error(`El valor ${grados} ingresado. NO es un número`)

    if(unidad === undefined) return console.warn(`No ingresase el tipo de grado a convertir`)

    if(typeof unidad !== "string") return console.error(`El valor ${unidad}, NO es una cadena de texto`)

    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn(`Valor de unidad no reconocido`)

    if(unidad === "C") {
        return console.info(`${grados}°C = ${Math.round((grados * 9/5) + 32)}°F`)
    }else if (unidad === "F") return console.info(`${grados}°F = ${Math.round((grados - 32) * 5/9)}°C`)
} 

convertirGrados()
convertirGrados("asdsa")
convertirGrados(10)
convertirGrados(10, 1)
convertirGrados(10, "Ss")
convertirGrados(10, "C")
convertirGrados(0, "C")
convertirGrados(21, "C")
convertirGrados(32, "F")
convertirGrados(10, "F") */

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */

/* const aplicarDescuento = (monto = undefined, descuento = 0) => {
    
    if(monto === undefined) return console.warn("No ingresaste un monto")

    if(typeof monto !== "number") return console.error(`El valor ${monto} ingresado. NO es un número.`)

    if(monto === 0) return console.error(`El monto no puede ser 0`)

    if(Math.sign(monto) === -1) return console.error(`El monto no puede ser negativo`)

    if(typeof descuento !=="number") return console.error(`El valor ${descuento} ingresado. NO es un número`)

    if(Math.sign(descuento) === -1) return console.error(`El descuento no puede ser negativo`)

    return console.info(`${monto} - ${descuento}% = ${monto - ((monto * descuento)/100)}`)
}
aplicarDescuento()
aplicarDescuento("100")
aplicarDescuento(0)
aplicarDescuento(-1)
aplicarDescuento(100)
aplicarDescuento(100, "10")
aplicarDescuento(100,-5)
aplicarDescuento(100,45) */

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

/* const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined) return console.warn("No ingresaste la fecha")

    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste NO es una fecha válida")

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMs = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs)

    return(Math.sign(aniosHumanos) === -1)
        ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
        : (Math.sign(aniosHumanos) === 1)
            ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
            : console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}
calcularAnios()
calcularAnios("ay")
calcularAnios({})
calcularAnios(new Date())
calcularAnios(new Date(2001,3,04))
calcularAnios(new Date(2050,3,04)) */

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

/* const contador = (texto = "") => {

    if(!texto) return console.warn("No ingresaste una cadena de texto.")

    if(typeof texto !== "string") return console.error(`El valor ${texto} ingresado. NO es una cadena de texto.`)

    let vocales = 0,
    consonantes = 0

    texto = texto.toLowerCase();

    for (let letra of texto) {

        if(/[aeiouáéíóú]/.test(letra)) vocales++

        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++
    }

    return console.info({
        texto,
        vocales,
        consonantes
    })
}

contador()
contador(2)
contador("Hola mundo")
contador("Ñoño")
contador("lorem") */


/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

/* const validarNombre = (nombre = "") => {
    if(!nombre) return console.warn("No ingresaste un nombre")
    if(typeof nombre !== "string") return console.error(`El valor ${nombre} ingresado. NO es una cadena de texto`)

    let expREG = /^[A-Za-zÁáÉéÍíÓóÚú\s]+$/g.test(nombre)
    return(expREG)
        ? console.info(`${nombre} es un nombre válido`)
        : console.warn(`${nombre}, NO es un nombre válido`)
}

validarNombre()
validarNombre(15)
validarNombre("Fabricio")
validarNombre("Fabricio Miranda")
validarNombre("Fabricio Miranda3") */

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

/* const validarEmail = (correo = "") => {
    if(!correo) return console.warn("No ingresaste un correo")
    if(typeof correo !== "string") return console.error(`El valor ${correo} ingresado. NO es una cadena de texto`)

    let expREG = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo)
    return(expREG)
        ? console.info(`${correo} es un correo válido`)
        : console.warn(`${correo}, NO es un correo válido`)
}

validarEmail()
validarEmail(15)
validarEmail("Fabricio")
validarEmail("Fabricio Miranda")
validarEmail("Fabricio Miranda3")
validarEmail("1870904461@undc.edu.pe")
validarEmail("mirandaquezadafabriciojoel@gmail.com") */


/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

/* const devolverCuadrados = (arr = undefined) => {

    if(arr === undefined) return console.warn("No ingresaste un arreglo de números")

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")

    if(arr.length === 0) return console.error("El arreglo esta vacío")
    
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado. NO es un número`)
    }

    const newArr = arr.map(el => el * el)
    return console.info(`Arreglo Original ${arr}.\nArreglo Elevado al Cuadrado ${newArr}`)
}

devolverCuadrados()
devolverCuadrados(2)
devolverCuadrados([])
devolverCuadrados([10,"g"]) */

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

/* const arrayMinMax = (arr = undefined) => {

    if(arr === undefined) return console.warn("No ingresaste un arreglo de números")

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")

    if(arr.length === 0) return console.error("El arreglo esta vacío")
    
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado. NO es un número`)
    }

    return console.info(`Array ingresado: ${arr}\nArray Mayor: ${Math.max(...arr)}\nArray Menor:${Math.min(...arr)} `)
}

arrayMinMax()
arrayMinMax(10)
arrayMinMax([])
arrayMinMax([10,"s"])
arrayMinMax([10,20,30,40,50,60]) */

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

/* const devolverObjeto = (arr = undefined) => {

    if(arr === undefined) return console.warn("No ingresaste un arreglo de números")

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")

    if(arr.length === 0) return console.error("El arreglo esta vacío")
    
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado. NO es un número`)
    }

    return console.info({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 === 1)
    })

}
devolverObjeto()
devolverObjeto(1)
devolverObjeto([])
devolverObjeto(["a"])
devolverObjeto([1,2,3,4,5,6,7,8,9,0])
 */

/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */

/* const ordenarArray = (arr = undefined) => {

    if(arr === undefined) return console.warn("No ingresaste un arreglo de números")

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")

    if(arr.length === 0) return console.error("El arreglo esta vacío")
    
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado. NO es un número`)
    }

    console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()

    })
}

ordenarArray()
ordenarArray(true)
ordenarArray([])
ordenarArray([2,{}])
ordenarArray([2,4,8,7,3]) */

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */

/* const quitarDuplicados = (arr = undefined) => {

    if(arr === undefined) return console.warn("No ingresaste un arreglo de números")

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")

    if(arr.length === 0) return console.error("El arreglo esta vacío")

    if(arr.length === 1) return console.error("El arreglo debe tener al menos 2 elementos")

     return console.info({
        original: arr,
        sinDuplicar: arr.filter((value,index,self) => self.indexOf(value) === index)
    }) 
    return console.info({
        original: arr,
        sinDuplicar: [...new Set(arr)]
    })
} 

quitarDuplicados()
quitarDuplicados("s")
quitarDuplicados([])
quitarDuplicados([1,2,2,3,4,5,6,6]) */

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

/* const arrPromedio = (arr = undefined) => {

    if(arr === undefined) return console.warn("No ingresaste un arreglo de números")

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo")

    if(arr.length === 0) return console.error("El arreglo esta vacío")
    
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor ${num} ingresado. NO es un número`)
    }

    return console.info(
        arr.reduce((total,num,index,arr) => {
            total += num
            if(index === arr.length-1) {
                return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`
            }else {
                return total
            }
        })
    )
}
arrPromedio()
arrPromedio(true)
arrPromedio([])
arrPromedio([1,"t"])
arrPromedio([9,8,7,6,5,4,3,2,1,0]) */

/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

/* class Pelicula {
    constructor(id, titulo, director, estreno, pais, generos, calificacion) {
        this.id = id,
        this.titulo  = titulo,
        this.director = director,
        this.estreno = estreno,
        this.pais = pais,
        this.estreno = estreno,
        this.generos = generos,
        this.calificacion = calificacion

        this.validadIMDB(id)
        this.validadTitulo(titulo)
        this.validadDirector(director)
        this.validadEstreno(estreno)
        this.validadPais(pais)
        this.validadGeneros(generos)
        this.validadCalificacion(calificacion)
    }

    static get listaGeneros () {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War, Western"] 
    }

    static generosAcetados() {
        return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`)
    }

    validarCadena(propiedad,valor) {

        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`)

        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado. NO es una cadena de texto`)

        return true
    }

    validarNumero(propiedad,valor) {
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`)

        if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado. NO es número`)

        return true
    }

    validadArreglo(propiedad,valor) {
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacío`)

        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado. NO es un arreglo`)

        if(valor.length === 0) return console.error("El arreglo esta vacío")
    
        for (let cadena of valor) {
            if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado. NO es una cadena de texto`)
        }
        return true 
    }
    validadLongitudCadena(propiedad,valor,longitud) {
        if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud})`)
        return true
    }

    validadIMDB(id) {
        if(this.validarCadena("ID", id)) 

            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) 
            return console.error(`ID ${id} no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números.`)
    }

    validadTitulo(titulo) {
        if(this.validarCadena("Titulo", titulo)) 
            this.validadLongitudCadena("Titulo", titulo, 100)
    }

    validadDirector(director) {
        if(this.validarCadena("Director", director)) 
            this.validadLongitudCadena("Director", director, 50)
    }

    validadEstreno(estreno) {
        if(this.validarNumero("Año de Estreno", this.estreno)) 

        if(!(/^([0-9]{4})$/.test(this.estreno))) 
        return console.error(`Año de Estreño ${estreno} no es válido, debe ser un número de 4 dígitos`)
    }

    validadPais(pais) {
        this.validadArreglo("Pais", pais)
    }

    validadGeneros(generos) {
        if(this.validadArreglo("Géneros", generos)) {
            for (let gener of generos) {
                /* console.log(gener, Pelicula.listaGeneros.includes(gener)) */

       /*          if(!Pelicula.listaGeneros.includes(gener)) {
                    console.error(`Género(s) incorrectos "${generos.join(",")}"`)
                    Pelicula.generosAcetados()
                }
            }
        }
    }

    validadCalificacion(calificacion) {
        if(this.validarNumero("Calificación", calificacion)) 
        return (calificacion < 0 || calificacion > 10) 
        ? console.error("La calificación tiene que estar en un rango entre 0 y 10")
        : this.calificacion = calificacion.toFixed(1)
    }

    fichaTecnica() {
        console.info(`Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPais: "${this.pais}"\nGéneros: "${this.generos}"\nCalificación: "${this.calificacion}"\nId: "${this.id}"`)
    }
} */
/* const peli = new Pelicula(
    "ii7865441",
    "El Hoyo",
    "Fabricio Miranda",
    2023,
    ["Perú","Argentina"],
    ["Comedy","Sport"],
    9.12
)

peli.fichaTecnica()  */
/* const misPelis = [
    {
    id: "ii7865441",
    titulo: "El Hoyo",
    director:"Fabricio Miranda",
    estreno: 2023,
    pais: ["Perú","Argentina"],
    generos: ["Comedy","Sport"],
    calificacion: 9.12
    },
    {
    id: "ii7865441",
    titulo: "El Hoyo",
    director:"Fabricio Miranda",
    estreno: 2023,
    pais: ["Perú","Argentina"],
    generos: ["Comedy","Sport"],
    calificacion: 9.12
    },
    {
    id: "ii7865441",
    titulo: "El Hoyo",
    director:"Fabricio Miranda",
    estreno: 2023,
    pais: ["Perú","Argentina"],
    generos: ["Comedy","Sport"],
    calificacion: 9.12
    }
]

misPelis.forEach(el => new Pelicula(el).fichaTecnica) */

/* console.log("Inicio");

ASINCRONIA

setTimeout(() => {
    console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez")
}, 3000)

setInterval(() => {
    console.log("Ejecutando un setTinterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo")
}, 1000) */


/* let temporizador = setTimeout(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000); */


/* function cuadradoCallback(value,callback) {
    setTimeout(() => {
        callback(value, value * value)
    }, 0 | Math.random() * 1000);
} 

cuadradoCallback(0, (value, resultado) => {
    console.log("Inical Callback")
    console.log(`Callback: ${value} ${resultado}`)
    cuadradoCallback(1, (value, resultado) => {
        console.log(`Callback: ${value} ${resultado}`)
        cuadradoCallback(2, (value, resultado) => {
            console.log(`Callback: ${value} ${resultado}`)
            cuadradoCallback(3, (value, resultado) => {
                console.log(`Callback: ${value} ${resultado}`)
                cuadradoCallback(4, (value, resultado) => {
                    console.log(`Callback: ${value} ${resultado}`)
                    cuadradoCallback(5, (value, resultado) => {
                        console.log(`Callback: ${value} ${resultado}`)
                    })
                })
            })
        })
    })
    
}) */

/* PROMESA  */
/* PROMESA  */
/* PROMESA  */
/* PROMESA  */

/* function cuadradoPromise(value) {
    if(typeof value !== "number") 
        return Promise.reject(`Error, el valor "${value}" ingresado no es un número`)
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                value,
                resultado: value * value
            })
        }, 0 | Math.random() * 1000);
    })
} 
cuadradoPromise(0)
    .then(obj => {
        console.log(obj)
        console.log("Inicio Promise")
        console.log(`Promise: ${obj.value}, ${obj.resultado}`)
        return cuadradoPromise(1)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.resultado}`)
        return cuadradoPromise(2)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.resultado}`)
        return cuadradoPromise(3)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.resultado}`)
        return cuadradoPromise(4)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.resultado}`)
        return cuadradoPromise(5)
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.resultado}`)
        console.log("Fin del Promise")
    })
    .catch(err => console.error(err)) */


  /*   ASYNC AWAIT
    ASYNC AWAIT
    ASYNC AWAIT
    ASYNC AWAIT
    ASYNC AWAIT 
    */
   
/* function cuadradoPromise(value) {
    if(typeof value !== "number") 
    return Promise.reject(`Error, el valor "${value}" ingresado no es un número`)
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                value,
                resultado: value * value
            })
        }, 0 | Math.random() * 1000);
    })
    
} 
async function funcionAsincronaDeclarada() {
    try{
        console.log("Incio Async Function")
        let obj = await cuadradoPromise(0)
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)
        
        obj = await cuadradoPromise(1)
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)

        obj = await cuadradoPromise(2)
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)
        
        obj = await cuadradoPromise(3)
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)

        obj = await cuadradoPromise(4)
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)

        obj = await cuadradoPromise(5)
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)

        obj = await cuadradoPromise("6")
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)
    }catch(err ){
        console.error(err)
    }
}

funcionAsincronaDeclarada()


const funcionAsincronaExpresada = async () => {
    
    try{
        console.log("Incio Async Function")
        let obj = await cuadradoPromise(0)
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)
        
        obj = await cuadradoPromise(1)
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)

        obj = await cuadradoPromise(2)
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)
        
        obj = await cuadradoPromise(3)
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)

        obj = await cuadradoPromise(4)
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)

        obj = await cuadradoPromise(5)
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)

        obj = await cuadradoPromise("6")
        console.log(`Async Function ${obj.value}, ${obj.resultado}`)
    }catch(err ){
        console.error(err)
    }
}

funcionAsincronaExpresada() */

/* const a = Symbol("a")
const b = Symbol("b")

console.log(typeof a, typeof b); */
/* const NOMBRE = Symbol("Nombre")
const SALUDAR = Symbol("Saludar")

const persona = {
    [NOMBRE]: "Fabricio"
}

console.log(persona[NOMBRE]);

persona[SALUDAR] = function() {
    console.log("Hola")
}

console.log(persona)
persona[SALUDAR]();

persona.edad = 10
console.log(persona)
console.log(Object.getOwnPropertySymbols(persona)) */

/* SETS
SETS
SETS
SETS */

/* const unset = new Set([1,2,3,3,4,5,true,false,true,{},{},11])

console.log(unset) 

unset.add(12)
console.log(unset) 
console.log(unset.size)

for (const i of unset) {
    console.log(i)
}

unset.forEach(item => console.log(item))

let aya = Array.from(unset)
console.log(aya[0])

unset.delete(3)
console.log(unset);
console.log(unset.has(6));
console.log(unset.has(5));

unset.clear()
console.log(unset) */

/* 
MAP MAP MAP MAP MAP MAP
MAP MAP MAP MAP MAP MAP
MAP MAP MAP MAP MAP MAP
MAP MAP MAP MAP MAP MAP */

/* let mapa = new Map()
mapa.set("nombre","Fabricio")
mapa.set("apellido","Miranda")
mapa.set("edad",21)

console.log(mapa)
console.log(mapa.size)
console.log(mapa.has("nombre"))
console.log(mapa.has("carrera"))
console.log(mapa.get("nombre"))


mapa.set("nombre","Fabri")
console.log(mapa)

for (const [key,value] of mapa) {
    console.log(`Llave ${key}, Valor ${value}`);
}


let mapa2 = new Map([
    ["nombre","Arturo"],
    ["edad",3]
])
console.log(mapa2); */


/* const ws = new WeakSet()

let valor1 = {"valor1": 1},
valor2 = {"valor2": 2},
valor3 = {"valor3": 3}

ws.add(valor1)
ws.add(valor2)

console.log(ws)

ws.add(valor3)

console.log(ws);

ws.delete(valor2)

console.log(ws);

ws.add(valor2)

setInterval(() => {
    console.log(ws)
}, 1000);

setTimeout(() => {
    valor1 = null,
    valor2 = null,
    valor3 = null
}, 5000); */

/* const wm = new WeakMap()

let llave1 = {}
let llave2 = {}
let llave3 = {}

wm.set(llave1, 1)
wm.set(llave2, "Fabricio")
console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave3)); */

/* const iterable = new Set([1,2,3,4,5])
const iterable = new Map([["nombre","Fabricio"],["edad",21]])

const iterador = iterable[Symbol.iterator]()

console.log(iterable)
console.log(iterador)
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())
console.log(iterador.next())

let next = iterador.next()

while (!next.done) {
    console.log(next.value)
    next = iterador.next()
} */

