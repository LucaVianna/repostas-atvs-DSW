const olaMundo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Olá, Mundo!")
        }, 2000)
    })
}

olaMundo()
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.log(error)
    })