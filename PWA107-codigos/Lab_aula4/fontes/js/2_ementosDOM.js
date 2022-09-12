/**-------------------------------------------------*
 *       SENAC - TADS - Programação Web             *                
 *      Exemplo utilizacao de funcao                *
 *      e elementos DOM (Document Object Model )    *
 *--------------------------------------------------*/
var recebeEntradaDados = document.getElementById('entradaDados');
function loginSistema() {
    var nmUsuario=prompt("Digite Nome do Usuário");

    if (nmUsuario===""||nmUsuario===null){
        alert("Ops....algo deu errado")
        recebeEntradaDados.innerHTML="Por Favor, informe um usuário";
    }else{
        recebeEntradaDados.innerHTML="Sr. "+ nmUsuario +" Seu Login foi Efetuado com Sucesso!!!<br>";
        var botaoLogOut=document.createElement("button");
        botaoLogOut.innerText = "LogOut";
        botaoLogOut.id="botao2"
        botaoLogOut.onclick = logOut; 
        recebeEntradaDados.appendChild(botaoLogOut);
        var botao1 = document.querySelector("#botao1");
        botao1.hidden = true;
    }
}
function logOut(){
    var botao2 = document.querySelector("#botao2");
    botao2.hidden=true; 
    botao1.hidden = false;
    recebeEntradaDados.innerHTML="Obrigado por usar o sistema";
}