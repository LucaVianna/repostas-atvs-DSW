prepend = (elemento, lista) => {
    return {
        valor: elemento.valor,
        restante: lista
    }
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
const elemento = {
    valor: 0,
    restante: {}
}

const novaLista = prepend(elemento, lista)
console.log(JSON.stringify(novaLista, null, 2))