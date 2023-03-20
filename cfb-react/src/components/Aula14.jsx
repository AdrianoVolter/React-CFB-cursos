import { useState } from 'react'

function App() {


  const [nome, setNome] = useState('')
  const [carro, setCarro] = useState('Uno')
  // const handleChangeNome = (event) => {
  //   setNome(event.target.value)
  // }

  return (

    <>  
      <label htmlFor="">Digite seu Nome:</label>
      <input type="text" name="fnome" id="fnome" onChange={(event) => setNome(event.target.value) }value={nome}/>
      <p>Olá {nome}</p>
     <label htmlFor="">Selecione um carro:</label>
     <select value={carro} onChange={(e)=>setCarro(e.target.value)} >
        <option value="uno">Uno</option>
        <option value="palio">Palio</option>
        <option value="gol">Gol</option>
        <option value="corsa">Corsa</option>
        <option value="civic">Civic</option>
     </select>
     <p>Carro selecionado : {carro}</p>
    </>
    
  )
 
}
export default App
