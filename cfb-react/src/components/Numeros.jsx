function Numeros(props) {
  return (
   <p>
        <p>Valor  de state num: {props.num}</p>

        <button onClick={()=>props.setNum(props.num + 10)}>Soma 10</button>

        <p>Valor secudario num: {props.num -5}</p>
   </p>
  );
}
{/* <button onClick={()=>props.setNUm(props.num + 10)}>Soma 10</button> */}
export default Numeros;