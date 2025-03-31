import fs from 'node:fs'

export function leArquivoStream(arquivo) {
    let init = Date.now()
    const stream = fs.createReadStream(arquivo, {encoding: 'utf-8'})
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