nth = (numero, lista) => {    
    if (numero == 0){
        return lista.valor
    }

    for(let aux=1; aux<=numero; aux++){
        if(lista.restante == null){
            return undefined
        }
        lista = lista.restante
    }

    return lista.valor 
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

const pegaElemento = nth(2, lista)
console.log(pegaElemento)