num = parseInt(process.argv[2])

if (!num) {
    console.error("Você deve passar um numero como parametro")
    console.error("Ex: node nome-arquivo 6")
    process.exit(1)
}

function dobrarEm5Segundos(numero) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const novoNum = Math.pow(numero, 2)
            resolve(novoNum)
        }, 5000);
    });
}

dobrarEm5Segundos(num)
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.log(error)
    })
   