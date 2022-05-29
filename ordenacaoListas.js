const {edFolha,edGalho}  = require('./arrays')

function juntaListas(arr1, arr2) {
    let arrFinal = []
    let posicaoLista1 = 0
    let posicaoLista2 = 0    

    while(posicaoLista1 < arr1.length && posicaoLista2 < arr2.length){

        let produtoAtual1 = arr1[posicaoLista1]
        let produtoAtual2 = arr2[posicaoLista2]

        if(produtoAtual1.preco < produtoAtual2.preco){
            arrFinal.push(produtoAtual1)
            posicaoLista1++
        } else {
            arrFinal.push(produtoAtual2)
            posicaoLista2++
        }
        
        if(posicaoLista1 === arr1.length){
           for(let i = posicaoLista2; i < arr2.length; i++){
               arrFinal.push(arr2[i])
           }
        }else if(posicaoLista2 === arr2.length){
            for(let i = posicaoLista1; i < arr1.length; i++){
                arrFinal.push(arr1[i])
            }
        }


    }

    return arrFinal




}


const final = juntaListas(edGalho,edFolha)
console.log(final)