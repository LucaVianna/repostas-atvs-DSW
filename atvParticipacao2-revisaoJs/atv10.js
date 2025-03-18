toUpperCase = (str) => {
    let result = ""

    for (let aux=0; aux < str.length; aux++){
        let codigo = str.charCodeAt(aux)

        if (codigo >= 97 && codigo <= 122){
            result += String.fromCharCode(codigo-32)
        } else {
            result += str[aux]
        }
    }
    
    return result
}

console.log(toUpperCase("Olá, Mundo!"))
console.log(toUpperCase("aprendendo nodejs!!!"))
console.log("lá".toUpperCase())