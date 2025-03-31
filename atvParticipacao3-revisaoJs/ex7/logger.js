import util from 'node:util'

const cores = {
    INFO: '\x1b[32m',
    WARNING: '\x1b[33m',
    ERROR: '\x1b[31m'
}

export const error = (message) => {
    util.debuglog('ERROR')(`${cores.ERROR}[ERROR] ${message}\x1b[0m`)
}
export const warning = (message) => {
    util.debuglog('WARNING')(`${cores.WARNING}[WARNING] ${message}\x1b[0m`)
}
export const info = (message) => {
    util.debuglog('INFO')(`${cores.INFO}[INFO] ${message}\x1b[0m`)
}

// util.inspect(message): Converte o conteúdo da mensagem em um formato mais legível.
// Se você passar um objeto como mensagem, ele será exibido com todas as propriedades 
// detalhadas.