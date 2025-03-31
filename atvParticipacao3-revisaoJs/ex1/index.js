import { media, desvioPadrao } from './stats.mjs'

const m = media([1, 3, 5, 7, 9])
const desvio = desvioPadrao([1, 3, 5, 7, 9])

console.log(m) // => 5
console.log(desvio) // => Math.sqrt(10)