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
        this.matrix = []
        this.eixoX = x
        this.eixoY = y
        for (let aux1=this.eixoY-1; aux1>=0; aux1--){
            this.matrix[aux1] = []
            for (let aux2=this.eixoX-1; aux2>=0; aux2--)
                this.matrix[aux1][aux2] = 0
        }
    }

    plus(vetor){
        let eixoNovoX = vetor[0].length
        let eixoNovoY = vetor.length

        return console.log(`Soma dos Eixos X: ${eixoNovoX+this.eixoX}\nSoma dos Eixos Y: ${eixoNovoY+this.eixoY}`)
    }

    minus(vetor){
        let eixoNovoX = vetor[0].length
        let eixoNovoY = vetor.length

        return console.log(`Sub dos Eixos X: ${this.eixoX-eixoNovoX}\nSub dos Eixos Y: ${this.eixoY-eixoNovoY}`)
    }
}

matrizNova = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

matriz = new Vec(5, 8) //x e y da matriz
console.log(matriz.matrix)

matriz.plus(matrizNova) //soma dos eixos x e y das matrizes
matriz.minus(matrizNova) //sub dos eixos x e y das matrizes