const livros = require('./listaLivros');

let maisBarato = 0
let maisCaro = 0
for(let atual = 0; atual < livros.length; atual++){
    if(livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual
    }
    if(livros[atual].preco > livros[maisCaro].preco){
        maisCaro = atual
    }
}

console.log(`O mais barato é o livro ${livros[maisBarato].titulo} que custa R$ ${livros[maisBarato].preco}`)
console.log('O mais caro é o livro ' + livros[maisCaro].titulo + ' que custa R$ ' + livros[maisCaro].preco)
