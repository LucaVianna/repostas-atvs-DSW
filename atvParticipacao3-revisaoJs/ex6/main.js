const fs = require('fs')
const readline = require('readline')

const filePath = process.argv[2]
if (!filePath) {
    console.error('Erro: Você precisa fornecer o caminho do arquivo como argumento no comando.')
    console.error('Exemplo: node main.js arquivo-html.html')
    process.exit(1)
}

const fileStream = fs.createReadStream(filePath)
const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
})


rl.on('line', (line) => {
    console.log(line)
})

rl.on('error', (err) => {
    console.error('Erro ao ler o arquivo:', err.message)
})

rl.on('close', () => {
    console.log('Leitura finalizada.')
})
