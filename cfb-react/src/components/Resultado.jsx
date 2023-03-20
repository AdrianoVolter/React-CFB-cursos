function Resultado(props){
    return(
        <div className="resultado">
            <p>Soma das notas:{props.somaNotas}</p>
            <p>
                {props.somaNotas >= 60 ? "Aprovado" : "Reprovado"}
            </p>

        </div>

    );
}

export default Resultado;