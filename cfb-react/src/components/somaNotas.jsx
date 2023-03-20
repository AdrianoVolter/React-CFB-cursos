import { useState } from 'react'
import Nota from './components/Nota'
import Resultado from './components/Resultado'

function App() {

  const [notas, setNotas] = useState({"nota1": "0", "nota2": "0", "nota3": "0", "nota4": "0"})

  const handleSetNotas = (e) => {

    if(e.target.getAttribute("name") === "nota1"){
      setNotas({...notas, nota1: e.target.value})
    }else if(e.target.getAttribute("name") === "nota2"){
      setNotas({...notas, nota2: e.target.value})
    }else if(e.target.getAttribute("name") === "nota3"){
      setNotas({...notas, nota3: e.target.value})
    }else if(e.target.getAttribute("name") === "nota4"){
      setNotas({...notas, nota4: e.target.value})
    }
    
  }
  return (

    <section > 
      <h1>Calculadora de média</h1>
      <Nota num={1} nome={"nota1"} nota={notas.nota1} setNota={handleSetNotas} />
      <Nota num={2} nome={"nota2"} nota={notas.nota2} setNota={handleSetNotas} />
      <Nota num={3} nome={"nota3"} nota={notas.nota3} setNota={handleSetNotas} />
      <Nota num={4} nome={"nota4"} nota={notas.nota4} setNota={handleSetNotas} />
      <Resultado somaNotas={parseFloat(notas.nota1) + parseFloat(notas.nota2) + parseFloat(notas.nota3) + parseFloat(notas.nota4)} />
     
    </section>
    
  )
 
}
export default App


