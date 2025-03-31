const fs = require('fs')

async function leArquivoAsync() {
    let init = Date.now()
    try{
        const data = await fs.promises.readFile('./arquivo-html.html', {encoding: 'utf-8'})
        //const lines = data.split('\n')
        console.log(data)
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err)
    }
    let end = Date.now()
    console.log('Tempo total (ms): ', end - init)
}

leArquivoAsync()