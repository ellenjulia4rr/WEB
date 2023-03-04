function tratarErroELancar(erro) {
    throw new Error('Ops... ocorreu um erro')
}


function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!') } catch (e) {
        tratarErroELancar(e)
     } finally {
            console.log('Finall!')
        }
    
}

const obj ={ nome: 'Roberto'}
imprimirNomeGritado(obj)