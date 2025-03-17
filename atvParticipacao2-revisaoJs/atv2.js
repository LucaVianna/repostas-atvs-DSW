// Atividade 2. O operador == compara objetos pela identidade. Mas às vezes é preferível comparar os valores
// de suas propriedades reais. Escreva uma função chamada deepEqual que recebe dois valores e retorna true
// apenas se eles forem o mesmo valor ou forem objetos com as mesmas propriedades, onde os valores das
// propriedades são iguais quando comparados com uma chamada recursiva a deepEqual.
// Para descobrir se os valores devem ser comparados diretamente (use o operador === para isso) ou se suas
// propriedades devem ser comparadas, você pode usar o operador typeof.
// Se ele produzir "object" para ambos os valores, você deve fazer uma comparação profunda.
// Você precisa levar em conta uma exceção boba: por causa de um acidente histórico, typeof null
// também produz "object".
// A função Object.keys será útil quando você precisar percorrer as propriedades dos objetos para
// compará-las.
// Os objetos que a função deepEqual são os definidos pela notação {"param1": "valor1",
// "param2": "valor"}.

const deepEqual = (val1, val2) => {
    
    if (val1 === val2){
        return true
    }
    if (typeof val1 == 'object' && val1 !== null && typeof val2 == 'object' && val2 !== null ){
        const keysVal1 = Object.keys(val1)
        const keysVal2 = Object.keys(val2)

        if (keysVal1.length !== keysVal2.length){
            return false
        }
        
        for(let key of keysVal1){
            if (!keysVal2.includes(key) || !deepEqual(val1[key], val2[key])){
                return false
            }
        }

        return true
    }

    return false
}

class Eu {
    constructor(name, age){
        this.nome = name
        this.idade = age
    }
}
class Tu {
    constructor(name, age){
        this.nome = name
        this.idade = age
    }
}
class Ele {
    constructor(name, age){
        this.nome = name
        this.idade = age
    }
}


const eu = new Eu("Luca", 21)
const tu = new Tu("Luca", 21)
const ele = new Ele("Joao", 21)

console.log(deepEqual(1, 1)) //true
console.log(deepEqual(1, 3)) //false
console.log(deepEqual(eu, tu)) //true
console.log(deepEqual(eu, ele)) //false