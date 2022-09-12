/**-------------------------------------------------*
 *       SENAC - TADS - Programação Web             *                
 *          Trabalhando com Forms                   *
 *--------------------------------------------------*/
 import {useState} from 'react';  //para importar Hook
 function App() {
  const [nomex, setNome]= useState('');
  const [idade, setIdade]= useState(0);
  const [email, setEmail]= useState('');
  
   //const [dadosUsuario, setDadosUsuariox]=useState({});// ou inicializar com valores:
  const [dadosUsuario, setDadosUsuariox]=useState({
     nomekk:"xxxxx",
     idadekk:"......",
     emailkk:"@@@@@"
  })
   
   function handleRegister(eventox){
     /* onSubmit tem um evento automático para dar "refresh(f5)". Para evitar "preventDefault()"
  */
 eventox.preventDefault();
 alert("Usuario Cadastrado com Sucesso!!!")
    setDadosUsuariox({
     nomekk:nomex,
     idadekk:idade,
     emailkk:email
    })
   }
   return (
     <div>
       <h1>Formulario</h1>
      <form   onSubmit={handleRegister}>
               <label>Nome:</label><br/>
               <input placeholder='Informe seu nome:'
               value={nomex}
               onChange={(evento)=>setNome(evento.target.value)}/><br/>
               <label>e-mail:</label><br/>
               <input placeholder='Informe seu e-mail:'value={email}
               onChange={(evento)=>setEmail(evento.target.value)}/><br/>
               <label>Idade:</label><br/>
               <input placeholder='Informe sua idade:'value={idade}
               onChange={(evento)=>setIdade(evento.target.value)}/><br/><br/>
               <button type='submit'>Registrar</button> 
 
      </form>
      <br/><br/>
      <div>
       <span>Bem Vindo:{dadosUsuario.nomekk} </span><br/>
       <span>Idade: {dadosUsuario.idadekk}</span><br/>
       <span>E-mail: {dadosUsuario.emailkk}</span><br/>
      </div>
     </div>
 
   );
 
   }
 
 export default App;
 