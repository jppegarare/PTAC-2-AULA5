import { useState } from "react";
import { Link } from "react-router-dom";
import"./style.css"

export default function ToDo() {
    const[personagem, setPersongem] = useState("")
    const[idade, setIdade] = useState(1)
    const[id, setId] = useState(1)
    const[recompensa, setRecompensa] = useState("")
    const[listas, setListas] = useState([])
    const[identidade, setIdentidade] = useState(1)

    const salvar = (e) => {
        e.preventDefault()
        setListas([...listas, {
            personagem:personagem, idade:idade, recompensa:recompensa, identidade:identidade,
        }])
        setIdentidade(identidade + 1)
        console.log(listas)
    }
   
    const remover  = (identidade) => {
        const auxLista = [];
        listas.map((lista) => {
            if (lista.identidade !== identidade){
                auxLista.push(lista);
            }
        })
        setListas(auxLista)
    }

    return (
        <div class="container">
            <Link to="/">Home</Link>
            <h1>Informe o Foragido </h1>

            <form onSubmit={salvar}>
                <h3>Nome</h3>
                <input type="text" value={personagem} onChange={(e) => {setPersongem(e.target.value)}}></input>

                <h3>Idade</h3>
                <input type="number" value={idade} onChange={(e) => {setIdade(e.target.value)}}></input>

                <h3>Recompensa</h3>
                <input type="text" value={recompensa} onChange={(e) => {setRecompensa(e.target.value)}}></input>

                <br/>
                <br/>

                <button>Registrar</button>
            </form>

            {listas.map((atv) => 
                <div key = {atv.identidade}>
                    <p>Suejeito: {atv.personagem}</p>
                    <p>Idade: {atv.idade}</p>
                    <p>Recompensa: {atv.recompensa}</p>
                    <button onClick={() => remover(atv.identidade)}>Remover</button>                           
                </div>
            )}
        </div>

    );
}