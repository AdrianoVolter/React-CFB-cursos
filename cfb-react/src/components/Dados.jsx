export default function Dados(props){
    return(

        <section>
            //
            <h2>Nome: {props.nome} {props.sobrenome}</h2>
            <p>Idade: {props.idade} anos</p>
            <h3>Cidade: {props.cidade}</h3>
            <h3>Estado: {props.estado}</h3>
        </section>

    )
}