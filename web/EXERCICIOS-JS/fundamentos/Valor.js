// par nome/valor 
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //ontexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Ellen',
    idade: 20,
    peso: 71,
    endereco: {
        logradouro: 'Rua muito legal',
        nome:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)