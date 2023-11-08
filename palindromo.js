function palindromo(palabra)
{
    let rev_word = [0]
    let word_array = [0]

    palabra = palabra.toLowerCase()             //Se pasa a minusculas

    /*
        Se pasa a array quitando los espacios en balanco
        con split, y luego con join, se pasa a string con todas las letras juntas
    */
    
    word_array = palabra.split(" ").join("")    
    /*
        Hasta el primer join hace lo mismo que la linea anterior, luego con 
        se pasa de nuevo a array con split con cada letra como un elemento del array,
        luego con reverse se cambia el orden del array y luego se pasa de nuevo
        a string.
    */
    rev_word = palabra.split(" ").join("").split("").reverse().join("") 
    
    return rev_word === word_array
}

console.log(palindromo("Anita lava la tina"))
