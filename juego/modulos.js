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

function repetir(texto, repeticion) {
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

const repetirTexto = (texto ="",repeticion = undefined) => {
    if(!texto) return console.warn("No ingresaste un texto")

    if(repeticion === undefined) return console.warn("No ingresaste la cantidad de veces que se va a repetir el texto");

    if(repeticion === 0) return console.error("El numero de veces no puede ser 0");

    if(Math.sign(repeticion) === -1) return console.error("El numero de veces no puede ser negativo");

    if(texto === "string") return texto.repeat(repeticion)
}

repetirTexto()
repetirTexto("Hola")
repetirTexto("Hola", 0)
repetirTexto("Hola", 2)

