// Atividade 3. Verifique o uso de var, let e const e veja as saídas do código em um script. Explique o porque do resultado apresentado:
var a = 1;
let b = 2;
const c = 3;
a = 10 // Qual a saída? 10
b = 20 // Qual a saída? 20
c = 30 // Qual a saída? 3 Pois a "const" é declarada e seu valor naão pode ser alterado, diferente da "let" e "var"

console.log(a, b, c)