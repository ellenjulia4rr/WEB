//Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4 ,5, 6) //no JavaScrip quando você não passa os parametros ela simplismente o ignora
imprimirSoma()

//Função com retorno

function soma(a, b=0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
