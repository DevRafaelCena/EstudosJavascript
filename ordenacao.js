function menorValor(arrProdutos){
    let maisBarato = 0;
    for(let atual = 0; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual
        }
        
    }

    return arrProdutos[maisBarato];
}

function maiorValor(arrProdutos){
    let maisCaro = 0
    for(let atual = 0; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco > arrProdutos[maisCaro].preco){
            maisCaro = atual
        }
        
    }

    return arrProdutos[maisCaro];
}

module.exports = {maiorValor, menorValor};