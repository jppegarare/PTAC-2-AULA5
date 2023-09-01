import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
    const[atividades, setAtividades] = useState("")
    const[listas, setListas] = useState([])
    const[identidade, setIdentidade] = useState(1)
    const salvar = (e) => {
        e.preventDefault()
        setListas([...listas, {
            atividades:atividades, identidade:identidade
        }])
        setIdentidade(identidade + 1)
        alert("A palavra " + atividades + " foi salva")
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
                <input type="text" onChange={(e) => {setAtividades(e.target.value)}}></input>
                <button>Salvar</button>
            </form>

            {listas.map((atv) => 
                <div key = {atv.identidade}>
                    <p>{atv.atividades}</p> 
                    <button onClick={() => remover(atv.id)}>Remover</button>                           
                </div>
            )}
        </div>

    );
}