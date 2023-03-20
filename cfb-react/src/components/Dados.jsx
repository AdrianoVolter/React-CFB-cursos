export default function Dados(props){
    return(

        <section>
            //
            <h2>Nome: {props.nome} {props.sobrenome}</h2>
            <p>Idade: {props.idade} anos</p>
            <h3>Curso: {props.curso}</h3>
        </section>

    )
}