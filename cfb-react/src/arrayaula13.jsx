function Array() {

    const carros = [  {marca: 'Ford', modelo: 'Fiesta',  preco: 50000},
                      {marca: 'Ford', modelo: 'Ka',preco: 40000},
                      {marca: 'Ford', modelo: 'Focus', preco: 60000},
                      {marca: 'Ford', modelo: 'Fusion', preco: 70000},
                      {marca: 'Ford', modelo: 'Ecosport', preco: 80000},
                      {marca: 'Ford', modelo: 'Ranger', preco: 90000},
    ]
    
    const listaCarros = carros.map(
      (carro, i )  => 
      <li key={i}>{i} - {carro.marca} - {carro.modelo} - R$ {carro.preco}</li>);
    
    
      return (
        
    
          <div>
            <h1>Lista Carros</h1>
            <ul >{listaCarros}</ul>
          </div>
    
      )
    }
    //export default Array
    
    
    