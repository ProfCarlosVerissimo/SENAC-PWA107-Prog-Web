/**------------------------------------------*
 *      SENAC - TADS - Programacao Web       *               
 *         Exemlo de utilização de  Map      *
 *------------------------------------------*/
 var numerosAleatorios = [2, 4, 6, 8]; //vetor original

var dobroDaLista = numerosAleatorios.map(function(itemAtual){
   let itemAlterado = itemAtual * 2 
   return itemAlterado; //retorna o item original multiplicado por 2
});

console.log(dobroDaLista); //imprime 4, 8, 12, 16   
/*
* Exemplo #2 - 
*/
var produtosMercado = [
    {
        idProduto : "LT1234",
        nmProduto : "Leite em Pó Vaquinha Feliz",
        qtdEstoque: "10"
    },
    {
        idProduto : "FR543",
        nmProduto : "Farinha de Trigo - Trigo Bom",
        qtdEstoque: "101"
    },
    {
        idProduto : "PR6543",
        nmProduto : "Bacon - Porquinho Feliz",
        qtdEstoque: "40"
    },
    {
        idProduto : "RC9876",
        nmProduto : "Rúcula - Prato Saboroso",
        qtdEstoque: "40"
    }
    
 ];
 
 var produtoDaPrateleira = produtosMercado.map(function(item, indice){
    return item.nmProduto;
 });
 /* mostra: 
    [
  'Leite em Pó Vaquinha Feliz',
  'Farinha de Trigo - Trigo Bom',
  'Bacon - Porquinho Feliz',
  'Rúcula - Prato Saboroso'
]
 */   
 console.log(produtoDaPrateleira); 