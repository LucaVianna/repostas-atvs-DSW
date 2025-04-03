const retornaResp = (num) => {
    return new Promise((resolve, reject) => {
        if (isNaN(num)){
            reject("erro")
        }
        else if (num % 2 == 1) {
            setTimeout(() => {
                resolve("impar")
            }, 1000)
        } else {
            setTimeout(() => {
                resolve("par")
            }, 2000)
        }
    })
}

retornaResp(1) // teste usando 2 e 'hello' para ver as diferentes respostas!
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.log(error)
    })