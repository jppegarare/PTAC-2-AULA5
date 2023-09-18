import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
    const[personagem, setPersongem] = useState("")
    const[idade, setIdade] = useState(1)
    const[recompensa, setRecompensa] = useState("")
    const[listas, setListas] = useState([])
    const[identidade, setIdentidade] = useState(1)

    const salvar = (e) => {
        e.preventDefault()
        setListas([...listas, {
            personagem:personagem, idade:idade, recompensa:recompensa, identidade:identidade
        }])
        setIdentidade(identidade + 1)
        console.log(listas)
    }
   
    const remover  = (id) => {
        const auxLista = [];
        listas.map((lista) => {
            if (lista.id !== id){
                auxLista.push(lista);
            }
        })
        setListas(auxLista)
    }

    return (
        <div>
            <Link to="/todo">todo</Link>
            <h1>Lista de Atividades</h1>

            <form onSubmit={salvar}>
                <input type="text" onChange={(e) => {setPersongem(e.target.value)}}></input>
                <input type="number" onChange={(e) => {setIdade(e.target.value)}}></input>
                <input type="text" onChange={(e) => {setRecompensa(e.target.value)}}></input>
                <button>Salvar</button>
            </form>

            {listas.map((atv) => 
                <div key = {atv.identidade}>
                    <p>{atv.personagem}</p>
                    <p>{atv.idade}</p>
                    <p>{atv.recompensa}</p>
                    <button onClick={() => remover(atv.id)}>Remover</button>                           
                </div>
            )}
        </div>

    );
}