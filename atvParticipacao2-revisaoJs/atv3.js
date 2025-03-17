// Objetos, que são os agrupamentos genéricos de valores, podem ser usados para construir diversos tipos de
// estruturas de dados. Uma estrutura de dados comum é a lista (não confundir com array). Uma lista é um
// conjunto aninhado de objetos, em que o primeiro objeto mantém uma referência para o segundo, o segundo
// para o terceiro, e assim por diante. Uma característica interessante das listas é que elas podem compartilhar partes de sua estrutura. Por exemplo, se eu criar dois novos valores {valor: 0, restante: lista} e {valor: -1, restante: lista} (com lista referindo-se à vinculação definida anteriormente), eles são listas independentes, mas compartilham a estrutura que compõe seus últimos três elementos. A lista original ainda é uma lista válida de três elementos.

arrayToList = (array) => {

    if (array.length == 0){
        return null
    }
    
    return {
        valor: array[0],
        restante: arrayToList(array.slice(1))
    }

}

const array = [1, 2, 3]
const lista = arrayToList(array)
console.log(JSON.stringify(lista, null, 2))