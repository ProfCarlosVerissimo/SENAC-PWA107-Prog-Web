/* **--------------------------------------------*
     *        SENAC - TADS - Programacao Web       *
     *          Exemplo manipulação DOM            *          
     *           Criar lista dinamicamente         *
     *---------------------------------------------*/  
 
function montaFilmes(){
  var ul = document.createElement('ul');
  ul.setAttribute('id','filmeList');

  filmesList = ['...e o Vento Levou','Cidadão Kane','Aperte o cinto, que o piloto sumiu','Doutor Jivago'];

  document.getElementById('renderList').appendChild(ul);
  filmesList.forEach(renderFilmeList);

  function renderFilmeList(itemFilme, index, arr) {
      var li = document.createElement('li');
      li.setAttribute('class','item');

      ul.appendChild(li);

      li.innerHTML=li.innerHTML + itemFilme;
}}
