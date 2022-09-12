/**-------------------------------------------------*
 *       SENAC - TADS - Programação Web             *                
 *      Trabalhando com useState (Hook)             *
 *--------------------------------------------------*/
 
 import Nome from './components/Nome';
 import {useState} from 'react';  //para importar Hook
 function App() {
   /* 
   *  [1,2]=useState[3] onde:
   *       1=Nome do estado;
   *       2=Nome da função para trocar o valor do estado
   *       3=Valor padrao do estado (1)
   */ 
   const [aluno,  setAluno]=useState('---------');
   
   return (
     <div>
       <h1>Bem Vindo !!!</h1>
       <h2>Olá: {aluno} </h2>
       <button onClick={()=>handleChangeName('Joaquim Jose da Silva Xavier')}>Mudar Nome</button>
       <br/>
        
     </div>
   );
 
   function handleChangeName(nomex){
     setAluno(nomex);
  }
 }
 
 export default App;
 