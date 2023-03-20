import { useState } from 'react'

function App() {

  const [form, setForm] = useState(
    {"nome": "", "cidade": "", "ano": ""}
  )
  const handleFormChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  return (

    <section > 

      <label htmlFor="">Nome:</label>
      <input 
        type="text"
        name='nome' 
        value={form.nome}   
        onChange={handleFormChange}
        />

      <br />
      <br />

      <label htmlFor="">Cidade:</label>
      <input 
        type="text" 
        name='cidade' 
        value={form.cidade} 
        onChange={handleFormChange}
        />

      <br />
      <br />

      <label htmlFor="">Ano:</label>
      <input 
        type="number" 
        name='ano' 
        value={form.ano} 
        onChange={handleFormChange}
        />
      <br />

      <p>Nome digitado: {form.nome} </p>
      <p>Cidade digitada: {form.cidade} </p>
      <p>Ano digitado: {form.ano} </p>
      
    </section>
    
  )
 
}
export default App