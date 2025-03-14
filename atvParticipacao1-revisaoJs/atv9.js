// Atividade 9. Utilize as funções das Atividades 7 e 8 e cria uma nova função que as receba como parâmetro. A função deve mostrar o valor resultante:
const add = (a, b) => {
    return a + b
}
const multiply = (a, b) => {
    return a * b
}

const executeFunction = (func, a, b) => {
     return func(a, b)
}

console.log(executeFunction(add, 2, 3)); // 5
console.log(executeFunction(multiply, 2, 3)); // 6