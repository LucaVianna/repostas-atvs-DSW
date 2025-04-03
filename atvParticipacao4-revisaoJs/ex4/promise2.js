const firstPromise = (num) => {
    return new Promise((resolve, reject) => {
        if(num > 2){
            resolve(num)
        } else {
            reject('não passou da promise 1')
        }
    })
}

const secondPromise = (num) => {
    return new Promise((resolve, reject) => {
        if((num + 1) % 2 == 0){
            resolve(`o numero ${num} passou pelas 2 promises!`)
        } else {
            reject('não passou da promise 2')
        }
    })
}

firstPromise(1) // teste com 3 e 4 para ver os diferentes resultados!
    .then(
        data => secondPromise(data)
    )
    .then((resultado) =>{
        console.log(resultado)
    })
    .catch(e => {
        console.log(e)
    })