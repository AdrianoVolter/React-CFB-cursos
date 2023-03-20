import { useState, useEffect } from 'react'

//Aula localstorage

function App(props){

  const [nome, setNome] = useState('')

  const armazenarNome = (chave, valor) => {
    localStorage.setItem(chave, valor)
    alert('Nome armazenado')
  }

  const consultarNome = (chave) => {
    alert(localStorage.getItem(chave))

  }
 

  const apagerNome = (chave) => {
    localStorage.removeItem(chave)
    alert('Nome apagado')
  }
 
  return (

    <>
      <label htmlFor="">Digite um nome:</label><br />
      
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} /> <br /> <br />
      <button onClick={() => armazenarNome('ls_nome', nome)}>Gravar Nome</button> 
      <button onClick={() => consultarNome('ls_nome')}>Consultar Nome</button> 
      <button onClick={() => apagerNome('ls_nome')}>Apagar Nome</button> <br /> 

      
      <hr />

    </>
  )


}
  
export default App


 // localStorage.setItem('nome', 'João')
  // localStorage.getItem('nome')
  // localStorage.removeItem('nome')
