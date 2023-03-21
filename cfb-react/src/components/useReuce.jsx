import { useState, useEffect, useReducer } from 'react'
const App = () => {

const [tarefa, setTarefa] = useState('')
const [listaDeTarefas, despatchListaDeTarefas] = useReducer(reduce, [])
let listaGeral = [...listaDeTarefas]

    function reduce(state, action){
        switch(action.type){
            case 'ADCIIONAR':
                let tarefa = {
                    id: Math.random()              ,
                    tarefa: action.payload,
                    finalizado: false
                }
                setTarefa('')
                return [...state, tarefa]
            case 'FINALIZAR':
                return state.map((tarefa) => {
                    if(tarefa.id === action.payload){
                        tarefa.finalizado = !tarefa.finalizado
                    }
                    return tarefa
                })
            
            default:
                return state
           
        }
    }

    return ( 

        <div>
            <div>
                <input 
                    placeholder='Digite uma tarefa'
                    type="text" 
                    value={tarefa} 
                    onChange={(e) => setTarefa(e.target.value)}
                    />
                <button onClick={() => despatchListaDeTarefas({type: 'ADCIIONAR', payload: tarefa})}>Adicionar</button>
            </div>
            <div>
                <ul>
                    {
                        listaDeTarefas.map((tarefa) => {
                            return (
                                <li key={tarefa.id}>
                                    <span>{tarefa.tarefa}</span>
                                    <button onClick={() => despatchListaDeTarefas({type: 'FINALIZAR', payload: tarefa.id})}>Finalizar</button>
                                </li>
                            )
                        })
                    }
                </ul>

        </div>

        </div>
          
        
     );

}

  
export default App;










// import { useState, useEffect, useReducer } from 'react'
// const App = () => {


//   const [count, despatchCount] = useReducer(reduce, 0)


//     function reduce(state, action){
//         switch(action.type){
//             case 'increment':
//                 return state + 1
//             case 'decrement':
//                 return state - 1
//             default:
//                 return state
//         }
//     }

//     return ( 

//         <>
//           <h1>O valor contado: {count }</h1>
//             <button onClick={() => despatchCount({type: 'increment'})}>Incrementar</button>
//             <button onClick={() => despatchCount({type: 'decrement'})}>Decrementar</button>
//         </>
//      );

// }

  
// export default App;













// import { useState, useEffect } from 'react'
// function App(){
// //Operador ternário e operador lógico && 
//   const [finalizados, setFinalizados] = useState(true)
 
//   // function somar( a, b){
//   //   setFinalizados(!finalizados)
//   // }

//   const [count, setCount] = useState(12)

//   return (

//     <>
//       <div>
//         {
//           count <=10 ? (
//             <span>O count e menor ou igual a 10</span>
//           ) : (
//             <span>O count e maior que 10</span>
//           )
//         }
//       </div>
      
//     </>
//   )


// }
  
// export default App


 