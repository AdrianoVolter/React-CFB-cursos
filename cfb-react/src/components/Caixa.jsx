function Caixa(props){
    return(

        <>
            <p>
               {props.site}
            </p>
            {props.children[1]} 
            {props.children[0]} 
            
        </>


    )
}

export default Caixa

// children é um array de elementos filhos