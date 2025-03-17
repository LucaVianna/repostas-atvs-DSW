listToArray = (lista) => {
    const array = []

    while(lista !== null){
        array.push(lista.valor)
        lista = lista.restante
    }

    return array
}

const lista = {
    valor: 1,
    restante: {
        valor: 2,
        restante: {
            valor: 3,
            restante: null
        }
    }
}

const array = listToArray(lista)
console.log(array)