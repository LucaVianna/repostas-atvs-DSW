every = (array, func) => {
    for(let aux=0; aux<array.length; aux++){
        if (!func(array[aux])){
            return false
        } 
    }
    return true
}

const nums = [1, 2, 3, 4, 5]

const par = every(nums, (numero) => numero % 2 === 0) //false
console.log(par)
const menorQueseis = every(nums, (numero) => numero < 6) //true
console.log(menorQueseis)