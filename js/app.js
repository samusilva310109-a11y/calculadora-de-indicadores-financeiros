const calcular = function(){

    const ativoCirc = document.getElementById('ac').value
    const passCirc = document.getElementById('pc').value
    const estoque = document.getElementById('es').value
    const realizavel = document.getElementById('rlp').value
    const passNC = document.getElementById('pnc').value
    const disponivel = document.getElementById('disp').value

    const resultado = document.getElementById('result')
    
    

    const indices = [{nome: "Liquidez Corrente", val: calcularIndiceCorrente(ativoCirc, passCirc)}, 
        {nome: "Liquidez Seca: ", val: calcularLiquidezSeca(ativoCirc, passCirc, estoque)},
        {nome: "Liquidez Imediata: ", val: calcularLiquidezImediata(disponivel, passCirc)},
        {nome: "Liquidez Geral: ", val: calcularLiquidezGeral(ativoCirc, realizavel, passCirc, passNC)} 
    ]
    


    indices.forEach(i => {
       const card = document.createElement('div')
       card.className = 'card'

       const valor = document.createElement('span')
       valor.className = 'val'
       valor.textContent = i.val.toFixed(2)

       const titulo = document.createElement('small')
       titulo.textContent = i.nome

       card.appendChild(titulo)
       card.appendChild(valor)

       resultado.appendChild(card)
    })

    
    
}

const calcularIndiceCorrente = function(ac, pc){
    let ativoCirc = Number(ac)
    let passivoCirc = Number(pc)

    let resultado = ativoCirc / passivoCirc
    return resultado
}

const calcularLiquidezSeca = function(ac, pc, est){
    let ativoCirc = Number(ac)
    let passivoCirc = Number(pc)
    let estoque = Number(est)

    let resultado = (ativoCirc - estoque) / passivoCirc
    return resultado
}

const calcularLiquidezImediata = function(disp, pc){
    let disponivel = Number(disp)
    let passivoCirc = Number(pc)

    let resultado = disponivel / passivoCirc
    return resultado
}

const calcularLiquidezGeral = function(ac, rlp, pc, pnc){
    let ativoCirc = Number(ac)
    let passivoCirc = Number(pc)
    let realizavelLP = Number(rlp)
    let passivoNC = Number(pnc)

    let liquidezGeral = (ativoCirc + realizavelLP) / (passivoCirc + passivoNC)
    return liquidezGeral
}

