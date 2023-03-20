import { useState, useEffect } from 'react'


function Userefct() {

  const [contagem, setContagem] = useState(0)

  useEffect(
    () => {
      console.log('Page loaded')
      document.title = `Contagem: ${contagem}`
  },)

  return(

    <>
      <p>
        Contagem: {contagem}
      </p>
      <button onClick={() => setContagem(contagem + 1)}>Contar</button>

    </>
  )
  
}
  
export default Userefct
