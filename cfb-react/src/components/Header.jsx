import Logo from './img/qualquer-coisa-design-china-name.png'


export default function Header(){

    return(
        <header >
            <img src={Logo} width={400}/>
            <h1 >Aula De React</h1>
            <hr />
        </header>
    )
}

