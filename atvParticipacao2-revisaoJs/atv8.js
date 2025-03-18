escreveData = (data) => {
    const array = data.split("/")
    const dia = array[0]
    const mes = parseInt(array[1]-1)
    const ano = array[2]
    
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

    return `${dia} de ${meses[mes]} de ${ano}`
    
}

const escrito = escreveData("21/01/2004")
console.log(escrito)