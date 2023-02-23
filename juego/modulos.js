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

const aplicarDescuento = (monto = undefined, descuento = 0) => {
    
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
aplicarDescuento(100,45)

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

