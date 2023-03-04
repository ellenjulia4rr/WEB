function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //ou 
    const comprarTv50 = trabalho1 && trabalho2 //i
    const comprarTv32 = trabalho1 != trabalho2 //ou exclusivo
    const manterSaudavel = !comprarSorvete //operador binário

    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))
console.log(compras(false, true))