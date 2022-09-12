/**-------------------------------------------------*
 *       SENAC - TADS - Programacao Web             *                
 *                Exemplo de array                  *
 *--------------------------------------------------*/
 
// Delcarando array
var listaDeProdutos = ["Camisa manga madura", 
                        "Chinelos Ava Iana",
                        "Galochas happy horse",
                        "Metacapacete magntico",
                        "Luvas Bionicas"
                      ];
//obtendo o tamanho da lista
console.log("Lista de Produtos possui "+listaDeProdutos.length+" itens");
//------------------------------------------------------
//acessando um item específico
console.log("O primeiro item da lista e: "+listaDeProdutos[0]+" e o último é: "+listaDeProdutos[4]);
//acessando um item específico
console.log("Outra forma de chegar no ultimo item : "+listaDeProdutos[listaDeProdutos.length-1]);
/*pesquisando um item na lista
  devolve a posicao naqual se encontra o argumento de pesquisa
  se não encontrar o item, devolve -1 (um negativo)
*/   
console.log(listaDeProdutos.indexOf("Galochas happy horse")); 
//
//alterando um item (Em nosso exemplo: item "Chinelos Ava Iana" será alterado para "Chinelo do Havai")
listaDeProdutos[1]="Chinelo do Havai";
console.log(listaDeProdutos);
//
//Adicionando um item na lista
listaDeProdutos.push("Sacolas de palha de Coco Verde")
console.log(listaDeProdutos);
console.log("Novo tamanho da lista:  "+listaDeProdutos.length);
//
//removendo o primeiro item da listaDeProdutos: "Camisa manga madura"
listaDeProdutos.shift();
console.log(listaDeProdutos);
//
//removendo o ultimo item da listaDeProdutos: "Sacolas de palha de Coco Verde"
listaDeProdutos.pop();
console.log(listaDeProdutos);
//
/*Remover um elemento de acordo com sua posição; Nsso exemplo "Galochas happy horse"
  neste caso, proceder: 
           1 - Localizar o índice do item desejado: metodo "indexOf"
           2 - usar método splice (se índice for direrente de -1, é claro)
           O método splice recebe dois parâmetros: 
           o primeiro é a posição no array e 
           o segundo é a quantidade de elementos a remover
*/
let indiceDoItem=listaDeProdutos.indexOf("Galochas happy horse");
if (indiceDoItem>-1){
  listaDeProdutos.splice(indiceDoItem,1);
  console.log("Item excluido com Sucesso!!!");
}
console.log(listaDeProdutos);

