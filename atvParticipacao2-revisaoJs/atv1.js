// Atividade 1. Escreva uma classe Vec que represente um vetor no espaço bidimensional (Use qualquer uma
//     das notações apresentadas em aula). Ela recebe parâmetros x e y (números), que deve salvar como
//     propriedades com os mesmos nomes.
//     Forneça ao protótipo/classe de Vec dois métodos, plus e minus, que recebem outro vetor como parâmetro e
//     retornam um novo vetor que contém a soma ou diferença dos valores x e y dos dois vetores (o vetor atual e o
//     parâmetro).
//     Adicione uma propriedade getter length ao protótipo que calcula o comprimento do vetor - isto é, a distância
//     do ponto (x, y) à origem (0, 0).
//     Teste sua classe criando dois objetos com new e demonstrando as saídas das operações dos métodos
//     implementados na classe.

class Vec {
    constructor(x , y){
        this.eixoX = x
        this.eixoY = y
    }

    plus(novoX, novoY){
        let somaX = novoX + this.eixoX
        let somaY = novoY + this.eixoY

        console.log(`Soma dos Eixos X: ${somaX}\nSoma dos Eixos Y: ${somaY}`)
    }

    minus(novoX, novoY){
        let menosX = this.eixoX - novoX
        let menosY = this.eixoY - novoY

        console.log(`Sub dos Eixos X: ${menosX}\nSub dos Eixos Y: ${menosY}`)
    }

    get length(){
        return Math.sqrt((this.eixoX ** 2) + (this.eixoY ** 2))
    }
}

matriz = new Vec(5, 8) //x e y da matriz

matriz.plus(3, 3) //soma dos eixos x e y das matrizes

matriz.minus(3, 3) //sub dos eixos x e y das matrizes

console.log(`A distância dos eixos (${matriz.eixoX}, ${matriz.eixoY}) até a origem (0, 0) é ${matriz.length}`)