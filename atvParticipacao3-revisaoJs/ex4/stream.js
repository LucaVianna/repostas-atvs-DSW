const fs = require('fs')

function leArquivoStream() {
    let init = Date.now()
    const stream = fs.createReadStream('./arquivo-html.html', {encoding: 'utf-8'})
    let data = ''

    stream.on('data', (chunk) => {
        data += chunk
    })

    stream.on('end', () => {
        console.log(data)
        let end = Date.now()
        console.log('Tempo total (ms): ', end - init)
    })

    stream.on('error', (err) => {
        console.log('Erro ao ler o arquivo: ', err)
    })
}

leArquivoStream()