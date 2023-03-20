function Nota(props) {
  return (
    <div className="nota">
      <legend>Infome  nota:</legend>
        <input 
            type="text" 
            name={props.nome} 
            id="nota" min="0" 
            max="10" step="0.1" 
            value={props.nota} 
            onChange={(event)=>props.setNota(event)} 
            /> 
    </div>
  );
}

export default Nota;