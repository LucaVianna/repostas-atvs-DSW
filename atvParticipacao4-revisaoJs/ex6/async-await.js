// Função delay aciona o .then após 1s
const delay = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

async function umPorSegundo() {
    await delay()
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');    
}

umPorSegundo();