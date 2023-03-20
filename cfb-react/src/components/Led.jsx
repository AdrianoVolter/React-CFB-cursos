// ligar e desligar led com react
import LedVerde from './img/led-verde.png'
import LedVermelho from './img/led-vermelho.jpg'

// function Led(props) {
function Led(props) {

  return (
    
     <div>
      <h3>{props.titulo}</h3>
      <img 
        style={{width:'50px'}} 
        src={props.ligado ? LedVerde : LedVermelho} 
        alt={props.led} 
      />
        <button onClick={props.onClick}>{props.m}</button>
     </div>
    
  )
}
//export default Led






//function App
// import { useState } from 'react'
// import Led from './components/Led'


// function App() {

//   const [ligado, setLigado] = useState(false)
//   const led = 'led' 
//   const onClick = () => setLigado(!ligado)
//   const m = ligado?'Desligar':'Ligar'
  

//   return (
    
//      <div>
     
//       <Led 
//         titulo="Ligar Lâmpada"
//         ligado={ligado}
//         setLigado={setLigado}
//         led = {led}
//         onClick={onClick}
//         m={m}
//       />

//      </div>
    

//   )
// }

// export default App
