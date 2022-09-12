/**-------------------------------------------------*
 *       SENAC - TADS - Programação Web             *                
 *       Exemplo de Arrow function                  *
 *--------------------------------------------------*/
//
// vamos chamar a função e mostrar o resultado
let valor1=3;
let valor2=6
let somaDosValores = (parcela1, parcela2) => {
    let resultado = parcela1+parcela2;
    return resultado;
};
 
//console.log(`O resultado da soma de ${valor1} + ${valor2} =${somaDosValores(valor1,valor2)} `);



//exemplo com 1 so parametro
nomeCliente="Joaquim José da Silva Xavier";
let nmcli = parmNomeCliente => {
    console.log("Bem vindo Sr."+parmNomeCliente)
}
nmcli(nomeCliente);