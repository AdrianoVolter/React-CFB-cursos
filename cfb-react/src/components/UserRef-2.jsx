import { useState,useRef, useEffect } from 'react';

const App = () => {


  const [cor, setCor] = useState('green')

    const div = useRef()


    useEffect(() => {
      div.current.style.backgroundColor = cor
    }, [cor])

    return ( 

        <>
            <div ref={div} style={{width: '200px', height: '200px'}}>DIV</div>

            <button onClick={() => setCor("red")}>vermelho</button>

            <button onClick={() => setCor("yellow")}>amarelo</button>

            <button onClick={() => setCor("green")}>verde</button>

        </>
     );


}

  
export default App;
