/**-------------------------------------------------*
 *       SENAC - TADS - Programação Web             *                
 *                Exemplos de foreach               *
 *--------------------------------------------------*
 **---------------------------------------*
  *           Exemplo #01                  *
  *----------------------------------------*/
 var arrayNumeros = [12,22,33,44,45,667];
function verificaPares1(elemento){
    if (elemento % 2 == 0) 
    console.log(`O numero ${elemento} eh par`);
}
arrayNumeros.forEach(verificaPares1);
/*saída em console:
O numero 12 eh par
O numero 22 eh par
O numero 44 eh par
*/
/**---------------------------------------*
  *           Exemplo #02                  *
  *----------------------------------------*/
 var arrayNumeros = [12,22,33,44,45,667];
function verificaPares2(elemento, indice){
    if (elemento % 2 == 0) 
        console.log(`O numero ${elemento} é Par e corresponde ao indice numero ${indice} do "arrayNumeros"`)
}
arrayNumeros.forEach(verificaPares2);
/*saída:
 numero 12 é Par e corresponde ao indice numero 0 do "arrayNumeros"
O numero 22 é Par e corresponde ao indice numero 1 do "arrayNumeros"
O numero 44 é Par e corresponde ao indice numero 3 do "arrayNumeros"
*/
/**---------------------------------------*
  *           Exemplo #03                 *
  *    deletar um item específico         *
  *---------------------------------------*/
 
var arrayMarcas = ['Ford', 'BMW', 'Fiat', 'Audi', 'Volkswagen'];
arrayMarcas.forEach((marca, indice) => {
    console.log("A marca " + marca + " corresponde ao indice: " + indice);
    if (marca === 'BMW'){
        let itemExcluido = arrayMarcas.splice(indice,1);
        console.log("Confira: Excluimos o elemento " + itemExcluido);
    }
});
console.log(arrayMarcas)
/* saída:
A marca Ford corresponde ao indice: 0
A marca BMW corresponde ao indice: 1
Confira: Excluimos o elemento BMW
A marca Audi corresponde ao indice: 2
A marca Volkswagen corresponde ao indice: 3
[ 'Ford', 'Fiat', 'Audi', 'Volkswagen' ]
*/