const somar = (a, b)  => {
    return new Promise((resolve, reject) => {
        const resultado = a + b

        if (resultado % 2 === 0) {
            resolve(callbackSucesso(resultado))
        } else {
            reject(callbackError(resultado))
        }
    })
}

function callbackSucesso(data){
    return `Operação concluída com sucesso. O número ${data} é par`
}
function callbackError(data){
    return `Operação falhou. O número ${data} é ímpar`
}

somar(2, 2) // tente com 1 e 2 para ver outro resultado!
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
   
