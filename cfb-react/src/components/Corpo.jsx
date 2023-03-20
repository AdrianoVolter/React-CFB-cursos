import Dados from "./Dados";

export default function Corpo(){
    
const no = "Adriano";
const so = 'Jose Volter'
const id = '38';
const cr = 'React'
  
    return(

        <section>

            <h2>Ola curso de react</h2>
            <Dados 
                nome= {no}  
                sobrenome ={so}
                idade = {id} 
                curso= {cr}
            />
        </section>
    )
}